import content from '../styles/Content.module.css';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

function Home() {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 1); 
        return () => clearTimeout(timer);
    }, []);



    return (<>
        
        <div>
            <div className={styles.banner_image}>
            {/* <div className={styles.banner_image + (isLoaded ? styles.fade_in : "")}> */}
                <div className={`${styles.banner_text} ${isLoaded ? styles.fade_in : ""}`}>
                    <h2>BIOSENSOR CORE</h2>
                </div>
            </div>
            
        </div>
        <div className={content.content_main}>
            <div className={`${content.content_section}`}>
                <div className={styles.about_section}>
                    <button onClick={() => {window.location.href="/about"}}>ABOUT US</button>
                    <p className={styles.wid}>The UCSD Biosensor Core, inspired by Roger Tsien’s pioneering work, provides support for the use and development of genetically encoded biosensors, including fluorescent and bioluminescent indicators and optogenetic tools. </p>
                </div>
            </div>
            <div className={styles.mission_section}>
                <h2>OUR MISSION</h2>
                <p>The UCSD Biosensor Core is a first-of-its-kind facility dedicated exclusively to genetically encoded biosensors and optogenetic tools. By bridging the gap between novel molecular designs and end users, we make these advanced technologies more accessible, rigorous, and reproducible. From selecting the right probe to troubleshooting experimental designs, our mission is to help researchers illuminate dynamic biological processes with greater clarity and confidence. We provide training, consultation, and a shared repository of proven biosensors so that you can focus on discoveries rather than tool development.
                </p>
            </div>
        </div>
        
    </>);
}

export default Home;
