import ContentBoxGroup from "../components/ContentBoxGroup.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import HeaderNavbar from '../components/HeaderNavbar.jsx';
import content from '../styles/Content.module.css';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

function Home() {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 1); 
        return () => clearTimeout(timer);
    }, []);

    const contentBoxes = [
        {
            header: "Resources",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Pellentesque ridiculus hendrerit justo consequat odio sapien fusce. Proin facilisi dictum parturient accumsan suscipit ipsum. Libero quis urna odio; molestie magna efficitur. Felis malesuada quam at mauris lacus imperdiet luctus. Pretium fusce fringilla vestibulum donec fames. Senectus massa risus leo bibendum vitae. Posuere pellentesque curabitur primis venenatis natoque. Nisl dapibus placerat quis blandit urna taciti. Molestie non suscipit leo platea penatibus. Elementum aliquet proin litora velit mus lacus conubia.",
            img: "bsdb.jpeg",
            url: "resources"
        },
        {
            header: "Rates & Services",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: "tmp.jfif",
            url: "rates"
        }
        
    ];


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
