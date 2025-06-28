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
        const resp = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );
        const data = (await resp.json()).items.filter((result) => result.id.kind === "youtube#video");
        cached = {
            videos: data,
            time: Date.now()
        }
    }
    res.json(cached);
});

app.listen(SERVER_PORT, () => {
    console.log("Server Started on Port", SERVER_PORT);
});