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

    const loadVideos = async () => {
        // Add cache-busting parameter to force fresh data
        const timestamp = Date.now();
        const resp = await axios.get(`${APP_URL}/latest_videos?t=${timestamp}`);
        console.log('Fetched videos:', resp.data.videos.length);
        console.log('First video description length:', resp.data.videos[0]?.snippet?.description?.length || 'N/A');
        setVideos(resp.data.videos);
    }

    useEffect(() => {
        loadVideos();
    }, []);

    return <>
        <div className={content.content_header}>Video Gallery</div>
        <div className={content.content_main}>
            <p style={{textAlign: 'center', marginBottom: '20px', fontSize: '18px'}}>
                Videos from the UCSD Biosensor Core YouTube channel - 
                <a href="https://www.youtube.com/@UCSDBiosensorCore" target="_blank" rel="noopener noreferrer" style={{color: '#007bff', textDecoration: 'none', marginLeft: '5px'}}>
                    @UCSDBiosensorCore
                </a>
            </p>
            <div className={content.video_gallery}>
            {videos.map((video) => (
                <div key={video.id.videoId} className={content.video_box}>
                    <div className={content.video_container}>
                        <iframe
                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            title={video.snippet.title}
                            allowFullScreen
                            className={content.iframe}
                        />
                    </div>
                    <div className={content.video_text}>
                        <h3 className={content.video_title}>{video.snippet.title}</h3>
                        <p className={content.video_description}>
                            {video.snippet.description}
                            {video.snippet.description.endsWith('...') && (
                                <a 
                                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={content.read_more_link}
                                >
                                    Read more and watch on YouTube
                                </a>
                            )}
                        </p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </>
}

export default Gallery;