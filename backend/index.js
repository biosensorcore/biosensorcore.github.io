const cors = require("cors");

// Initiate Express Server
const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "production") {
    var dotenv = require("dotenv").config({ path: "../.env" });
}
const SERVER_PORT = process.env.SERVER_PORT;
const API_KEY = process.env.YT_API_KEY;
const CHANNEL_ID = "UCD77pe3TNokglyOR0bPSz4Q";
const MAX_RESULTS = 20;


// use cors with express
app.use(cors());

const refresh_window = 30 * 60 * 1000 // 30 minutes in millis

let cached = {
    videos: [],
    time: 0
}

app.get("/latest_videos", async(req, res) => {
    // Add debug logging
    console.log('Cache time:', cached.time, 'Current time:', Date.now(), 'Refresh needed:', Date.now() - cached.time > refresh_window);
    
    if (Date.now() - cached.time > refresh_window) {
        try {
            // First, get the video IDs from search
            const searchResp = await fetch(
                `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
            );
            const searchData = (await searchResp.json()).items.filter((result) => result.id.kind === "youtube#video");
            
            // Extract video IDs
            const videoIds = searchData.map(video => video.id.videoId).join(',');
            
            // Get full video details including complete descriptions
            const videosResp = await fetch(
                `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=snippet`
            );
            const videosData = await videosResp.json();
            
            // Debug: Log description lengths
            console.log('Videos API response:', videosData.items.length, 'videos');
            videosData.items.forEach((video, index) => {
                console.log(`Video ${index + 1}: Description length: ${video.snippet.description.length} chars`);
            });
            
            // Use only the videos API data which has complete descriptions
            const videosWithFullDescriptions = videosData.items.map(video => ({
                id: { videoId: video.id },
                snippet: {
                    title: video.snippet.title,
                    description: video.snippet.description,
                    thumbnails: video.snippet.thumbnails,
                    publishedAt: video.snippet.publishedAt,
                    channelTitle: video.snippet.channelTitle
                }
            }));
            
            cached = {
                videos: videosWithFullDescriptions,
                time: Date.now()
            }
        } catch (error) {
            console.error('Error fetching videos:', error);
            // Fallback to search API if videos API fails
            const searchResp = await fetch(
                `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
            );
            const searchData = (await searchResp.json()).items.filter((result) => result.id.kind === "youtube#video");
            cached = {
                videos: searchData,
                time: Date.now()
            }
        }
    }
    res.json(cached);
});

// Force refresh endpoint for debugging
app.get("/latest_videos/refresh", async(req, res) => {
    console.log('Force refresh requested');
    cached.time = 0; // Force cache refresh
    const resp = await fetch(`http://localhost:${SERVER_PORT}/latest_videos`);
    const data = await resp.json();
    res.json(data);
});

app.listen(SERVER_PORT, () => {
    console.log("Server Started on Port", SERVER_PORT);
});