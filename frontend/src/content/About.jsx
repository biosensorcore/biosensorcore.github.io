import styles from "../styles/Content.module.css";

function About() {

    return (
        <>
            <div className={styles.content_header}>About</div>
            <div className={styles.content_main}>
                <div className={styles.content_default}>
                    <h2>About Us</h2>
                    <p>The UCSD Biosensor Core is an integral component of the DRC Biological Imaging Core, supported by the UCSD/UCLA NIDDK Diabetes Research Center (P30 DK063491). Inspired by Roger Tsien's pioneering work, the Biosensor Core offers comprehensive support for the use and development of genetically encoded biosensors, including fluorescent and bioluminescent indicators and optogenetic tools. These technologies enable precise visualization and control of dynamic cellular processes, but their effective application often requires specialized expertise. Our core offers consultation on biosensor selection, imaging protocols, and experimental design, maintains a repository of validated biosensors, and assists with custom biosensor design and optimization. Using our in-house microscopes and in collaboration with UCSD's Nikon Imaging Center, we also provide full support and training in quantitative imaging techniques and data analysis. By addressing technical challenges and sharing expertise, the core aims to enable researchers from diverse fields to integrate biosensors into their work with greater ease and rigor.</p>
                </div>
            </div>
        </>
    );
}

export default About;