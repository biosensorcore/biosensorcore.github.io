import { Link } from "react-router-dom";
import content from "../styles/Content.module.css";
import styles from "../styles/Collections.module.css";

const CATEGORIES = [
    {
        title: "Calcium and ion indicators",
        text: "Genetically encoded indicators for calcium and other ionic signals, including fluorescent and bioluminescent approaches."
    },
    {
        title: "Cell-signaling biosensors",
        text: "Sensors for kinase activity, signaling pathways, and other dynamic biochemical processes."
    },
    {
        title: "Second-messenger and metabolic biosensors",
        text: "Sensors for intracellular second messengers, metabolites, and related cellular physiological measurements."
    },
    {
        title: "pH, redox, and environmental sensors",
        text: "Genetically encoded tools for monitoring cellular chemical environments and physiological state."
    },
    {
        title: "Bioluminescent tools",
        text: "Luciferases, bioluminescent indicators, and related approaches for optical measurement and manipulation."
    },
    {
        title: "Fluorescent proteins and optogenetic tools",
        text: "Fluorescent proteins, optical reporters, and genetically encoded tools for manipulating cellular activity."
    }
];

function Collections() {
    return <>
        <div className={content.content_header}>Biosensor collection</div>
        <div className={content.content_main}>
            <div className={content.content_default}>
                <p>We maintain a growing collection of characterized biosensor constructs and associated experimental resources. A searchable public catalog is in development. In the meantime, <Link className={content.content_link} to="/contact">contact the Biosensor Core</Link> if you are looking for a sensor for a particular measurement or application.</p>
                <h2 className={styles.section_heading}>Areas represented in the collection</h2>
                <p>Examples of biosensor and optical-tool categories that we maintain, develop, or work with include:</p>
                <ul className={styles.category_list}>
                    {CATEGORIES.map((category) => (
                        <li className={styles.category_item} key={category.title}>
                            <h3 className={styles.category_title}>{category.title}</h3>
                            <p className={styles.category_text}>{category.text}</p>
                        </li>
                    ))}
                </ul>
                <p>Availability, characterization status, and suitability for a particular experiment vary among constructs. Contact us to discuss the measurement you need rather than assuming that a listed category implies a specific sensor is ready for every application.</p>
            </div>
        </div>
    </>;
}

export default Collections;
