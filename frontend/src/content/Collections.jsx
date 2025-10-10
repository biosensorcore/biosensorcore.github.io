import content from "../styles/Content.module.css"

function Collections() {
    return <>
        <div className={content.content_header}>Biosensor Collection</div>
        <div className={content.content_main}>
            <div className={content.content_default}>
                <h3>Collection & Catalog Under Construction</h3>
                <p>We're building an extensive biosensor collection and catalog. Stay tuned for updates!</p>
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        marginTop: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                >
                    <source src="/images/under_construction.mov" type="video/quicktime" />
                    <source src="/images/under_construction.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </>;
}

export default Collections;