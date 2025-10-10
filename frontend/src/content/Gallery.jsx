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
    const videoRefs = useRef({});

    const loadVideos = async () => {
        // Add cache-busting parameter to force fresh data
        const timestamp = Date.now();
        const resp = await axios.get(`${APP_URL}/latest_videos?t=${timestamp}`);
        console.log('Fetched videos:', resp.data.videos.length);
        console.log('First video description length:', resp.data.videos[0]?.snippet?.description?.length || 'N/A');
        setVideos(resp.data.videos);
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
                    <div className={content.video_text}>
                        <h3 className={content.video_title}>{video.snippet.title}</h3>
                    </div>
                    <div className={content.video_container}>
                        <div 
                            className={content.video_thumbnail}
                            onMouseEnter={() => handleVideoHover(video.id.videoId, true)}
                            onMouseLeave={() => handleVideoHover(video.id.videoId, false)}
                        >
                            {hoveredVideo === video.id.videoId ? (
                                <div className={content.hover_container}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${video.id.videoId}&iv_load_policy=3&fs=0&disablekb=1&cc_load_policy=0&playsinline=1`}
                                        title={video.snippet.title}
                                        allowFullScreen
                                        className={content.iframe_hover}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    />
                                    <button 
                                        className={content.expand_button}
                                        onClick={() => handleVideoClick(video)}
                                        title="Expand to full screen"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 14H5V20H11V18H7V14ZM5 10H7V6H11V4H5V10ZM13 20H19V14H17V18H13V20ZM17 6V10H19V4H13V6H17Z" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                            ) : (
                                <img
                                    src={video.snippet.thumbnails?.medium?.url || video.snippet.thumbnails?.default?.url}
                                    alt={video.snippet.title}
                                    className={content.thumbnail_image}
                                />
                            )}
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

            {/* Expanded Video Modal */}
            {expandedVideo && (
                <div className={content.video_modal} onClick={handleCloseExpanded}>
                    <div className={content.video_modal_content} onClick={(e) => e.stopPropagation()}>
                        <button className={content.close_button} onClick={handleCloseExpanded}>
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