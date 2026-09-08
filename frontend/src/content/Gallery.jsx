import { useState, useEffect, useRef } from "react";

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
    const [expandedVideo, setExpandedVideo] = useState(null);
    const [hoveredVideo, setHoveredVideo] = useState(null);
    const closeButtonRef = useRef(null);

    const loadVideos = async () => {
        const timestamp = Date.now();
        try {
            const resp = await axios.get(`${APP_URL}/latest_videos?t=${timestamp}`);
            setVideos(resp.data.videos || []);
        } catch {
            setVideos([]);
        }
    }

    const handleVideoHover = (videoId, isHovering) => {
        if (isHovering) {
            setHoveredVideo(videoId);
        } else {
            setHoveredVideo(null);
        }
    };

    const handleVideoClick = (video) => {
        setExpandedVideo(video);
    };

    const handleCloseExpanded = () => {
        setExpandedVideo(null);
    };

    useEffect(() => {
        loadVideos();
    }, []);

    useEffect(() => {
        if (!expandedVideo) {
            return undefined;
        }
        closeButtonRef.current?.focus();
        const onKey = (event) => {
            if (event.key === "Escape") {
                setExpandedVideo(null);
            }
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [expandedVideo]);

    return <>
        <h1 className={content.content_header}>Video Gallery</h1>
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
                    <div className={content.video_text}>
                        <h2 className={content.video_title}>{video.snippet.title}</h2>
                    </div>
                    <div className={content.video_container}>
                        <div 
                            className={content.video_thumbnail}
                            onMouseEnter={() => handleVideoHover(video.id.videoId, true)}
                            onMouseLeave={() => handleVideoHover(video.id.videoId, false)}
                        >
                            {hoveredVideo === video.id.videoId ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${video.id.videoId}&iv_load_policy=3&fs=0&disablekb=1&cc_load_policy=0&playsinline=1&widget_referrer=&origin=${window.location.origin}`}
                                    title={video.snippet.title}
                                    allowFullScreen
                                    className={content.iframe_hover}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                />
                            ) : (
                                <img
                                    src={video.snippet.thumbnails?.medium?.url || video.snippet.thumbnails?.default?.url}
                                    alt={video.snippet.title}
                                    className={content.thumbnail_image}
                                />
                            )}
                            <button 
                                type="button"
                                className={content.expand_button}
                                onClick={() => handleVideoClick(video)}
                                aria-label={`Expand video: ${video.snippet.title}`}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M7 14H5V20H11V18H7V14ZM5 10H7V6H11V4H5V10ZM13 20H19V14H17V18H13V20ZM17 6V10H19V4H13V6H17Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={content.video_text}>
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

            {expandedVideo && (
                <div className={content.video_modal} onClick={handleCloseExpanded}>
                    <div className={content.video_modal_content} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={expandedVideo.snippet.title}>
                        <button
                            type="button"
                            className={content.close_button}
                            onClick={handleCloseExpanded}
                            ref={closeButtonRef}
                            aria-label="Close video"
                        >
                            ×
                        </button>
                        <iframe
                            src={`https://www.youtube.com/embed/${expandedVideo.id.videoId}?autoplay=1&loop=1&playlist=${expandedVideo.id.videoId}`}
                            title={expandedVideo.snippet.title}
                            allowFullScreen
                            className={content.modal_iframe}
                        />
                    </div>
                </div>
            )}
        </div>
    </>
}

export default Gallery;
