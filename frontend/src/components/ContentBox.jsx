import styles from '../styles/ContentBox.module.css';

function ContentBox({content, variant}) {
    const {text, header, img, url, short} = content;

    function Box() {
        const containerClass = variant === 'resources' ? styles.content_box_container_resources : styles.content_box_container;
        const imageClass = variant === 'resources' ? 
            `${styles.content_box_image_container_resources} ${short ? styles.content_box_short : ""}` :
            `${styles.content_box_image_container} ${short ? styles.content_box_short : ""}`;
        const contentClass = variant === 'resources' ? styles.content_box_content_resources : styles.content_box_content;
        const headerClass = variant === 'resources' ? styles.content_box_header_resources : styles.content_box_header;
        const textClass = variant === 'resources' ? 
            `${styles.content_box_text_resources} ${short ? styles.content_box_short : ""}` :
            `${styles.content_box_text} ${short ? styles.content_box_short : ""}`;

        return (
            <div className={containerClass}>
                {img ? <div className={imageClass}>
                    <img src={`images/${img}`} alt={header || "Content image"}/>
                </div> : null}
                <div className={contentClass}>
                    <div className={headerClass}>
                        <h5>{header}</h5>
                    </div>
                    <div className={textClass}>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        )
    }

    const wrapperClass = variant === 'resources' ? 
        `${styles.content_box_wrapper_resources} ${short ? styles.content_box_short : ""}` :
        `${styles.content_box_wrapper} ${short ? styles.content_box_short : ""}`;

    return <div className={wrapperClass}>
        {url ? 
        <a href={url} target={`${url.includes("http") ? "_blank" : "" }`}>
            <Box/>
        </a> : <Box/>}
    </div>
    
}

export default ContentBox;