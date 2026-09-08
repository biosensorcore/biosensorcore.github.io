import { Link } from "react-router-dom";
import content from '../styles/Content.module.css';
import styles from '../styles/Home.module.css';

function Home() {
    return (<>
        <div className={content.content_header}>UC San Diego Biosensor Core</div>
        <div className={styles.home_hero} aria-hidden="true"></div>
        <div className={content.content_main}>
            <div className={`${content.content_section}`}>
                <div className={styles.home_intro}>
                    <p>The UC San Diego Biosensor Core provides expertise and resources for the selection, implementation, characterization, and development of genetically encoded biosensors and related optical tools.</p>
                    <p>We work with investigators at UC San Diego and elsewhere to design rigorous biosensor experiments, establish quantitative imaging and analysis workflows, evaluate existing sensors, and develop new approaches when suitable tools are not available.</p>
                    <nav className={styles.home_actions} aria-label="Primary site actions">
                        <Link className={styles.home_action} to="/contact">Discuss a project</Link>
                        <Link className={styles.home_action} to="/rates">Rates & Services</Link>
                        <Link className={styles.home_action} to="/collections">Biosensor Collection</Link>
                    </nav>
                </div>
            </div>
            <div className={styles.mission_section}>
                <h2>What we do</h2>
                <p>Support ranges from consultation and training to collaborative experimental and sensor-development projects. We can assist with biosensor selection, experimental design, imaging and data analysis, sensor benchmarking and characterization, and custom biosensor engineering.</p>
                <p>Projects can begin at any stage, from choosing among existing sensors to troubleshooting an established assay or developing a new sensor for a biological measurement that is not currently accessible.</p>
                <p>For questions about a project or to discuss whether the Core can help, contact us at <a href="mailto:biosensors@health.ucsd.edu">biosensors@health.ucsd.edu</a>.</p>
            </div>
        </div>
        
    </>);
}

export default Home;
