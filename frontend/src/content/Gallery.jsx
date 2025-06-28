import { useState, useEffect } from "react";

import content from "../styles/Content.module.css"
import axios from "axios";
import ServerInfo from "../util/serverInfo.json"

var APP_URL = ServerInfo.url;

try {
    if (process.env.NODE_ENV !== "production") {
        APP_URL = "http://localhost:3001";
    }
} catch (error) {
    APP_URL = "http://localhost:3001";
}

function Gallery() {
    const [videos, setVideos] = useState([]);
    const [lastUpdated, setLastUpdated] = useState(0);

    const loadVideos = async () => {
        const resp = await axios.get(`${APP_URL}/latest_videos`);
        setVideos(resp.data.videos);
        setLastUpdated(resp.data.time);
    }

    useEffect(() => {
        loadVideos();
    }, []);

    return <>
        <div className={content.content_header}>Video Gallery</div>
        <div className={content.content_main}>
            <div className={content.video_gallery}>
            {videos.map((video) => (
                <div key={video.id.videoId} className={content.video}>
                <iframe
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    allowFullScreen
                    className={content.iframe}
                />
                </div>
            ))}
            </div>
        </div>
    </>
}

export default Gallery;