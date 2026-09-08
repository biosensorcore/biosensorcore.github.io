import styles from "../styles/Content.module.css";

function About() {

    return (
        <>
            <div className={styles.content_header}>About</div>
            <div className={styles.content_main}>
                <div className={styles.content_default}>
                    <p>The UC San Diego Biosensor Core supports the rigorous use and development of genetically encoded biosensors, including fluorescent and bioluminescent indicators and related optical tools. The Core is an integral component of the Biological Imaging Core of the UC San Diego/UCLA NIDDK Diabetes Research Center (P30 DK063491).</p>
                    <p>We provide consultation on biosensor selection, experimental design, imaging strategies, and quantitative analysis; training and support for implementation of biosensor measurements; characterization and benchmarking of existing and prototype sensors; and collaborative development of new biosensors and assays.</p>
                    <p>Projects may involve existing, well-characterized biosensors or require adaptation, optimization, or development of new tools. Our role is therefore tailored to the scientific question and can range from consultation and training to experimental characterization, quantitative imaging and analysis, or more extensive biosensor-engineering projects.</p>
                    <p>The Core maintains and develops characterized biosensor constructs and associated experimental resources. We also work with UC San Diego imaging facilities, including the Nikon Imaging Center, when projects require instrumentation beyond that available within the Core.</p>
                    <p>The Biosensor Core serves UC San Diego investigators as well as other academic and commercial researchers. Investigators interested in using the Core are encouraged to contact us early in project planning so that sensor choice, experimental design, imaging, and analysis can be considered together.</p>
                </div>
            </div>
        </>
    );
}

export default About;
