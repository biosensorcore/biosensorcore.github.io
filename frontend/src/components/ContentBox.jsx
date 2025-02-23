import styles from '../styles/ContentBox.module.css';

function ContentBox({content}) {
    const {text, header, img, url, short} = content;

    function Box() {
        return (
            <div className={styles.content_box_container}>
                {img ? <div className={`${styles.content_box_image_container} ${short ? styles.content_box_short : ""}`}>
                    <img src={`images/${img}`}/>
                </div> : null}
                <div className={styles.content_box_header}>
                    <h5>{header}</h5>
                </div>
                <div className={`${styles.content_box_text} ${short ? styles.content_box_short : ""}`}>
                    <p>{text}</p>
                </div>
            </div>
        )
    }


    return <div className={`${styles.content_box_wrapper} ${short ? styles.content_box_short : ""}`}>
        {url ? 
        <a href={url} target={`${url.includes("http") ? "_blank" : "" }`}>
            <Box/>
        </a> : <Box/>}
    </div>
    
}

export default ContentBox;