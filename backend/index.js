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
    if (Date.now() - cached.time > refresh_window) {
        // First, get the video IDs from search
        const searchResp = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );
        const searchData = (await searchResp.json()).items.filter((result) => result.id.kind === "youtube#video");
        
        // Extract video IDs
        const videoIds = searchData.map(video => video.id.videoId).join(',');
        
        // Get full video details including complete descriptions
        const videosResp = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=snippet,contentDetails`
        );
        const videosData = await videosResp.json();
        
        // Merge search results with full video details
        const enrichedVideos = searchData.map(searchVideo => {
            const fullVideo = videosData.items.find(v => v.id === searchVideo.id.videoId);
            return {
                ...searchVideo,
                snippet: {
                    ...searchVideo.snippet,
                    description: fullVideo ? fullVideo.snippet.description : searchVideo.snippet.description
                }
            };
        });
        
        cached = {
            videos: enrichedVideos,
            time: Date.now()
        }
    }
    res.json(cached);
});

app.listen(SERVER_PORT, () => {
    console.log("Server Started on Port", SERVER_PORT);
});