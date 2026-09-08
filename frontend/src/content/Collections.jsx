import content from "../styles/Content.module.css"

function Collections() {
    return <>
        <div className={content.content_header}>Biosensor collection</div>
        <div className={content.content_main}>
            <div className={content.content_default}>
                <p>We maintain a growing collection of characterized biosensor constructs and associated experimental resources. A searchable public catalog is in development. In the meantime, <a className={content.content_link} href="/contact">contact the Biosensor Core</a> if you are looking for a sensor for a particular measurement or application.</p>
            </div>
        </div>
    </>;
}

export default Collections;
