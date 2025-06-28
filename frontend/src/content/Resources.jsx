import ContentBoxGroup from "../components/ContentBoxGroup";
import styles from "../styles/Content.module.css";

function Resources() {

    const content = [
        {
            header: "Biosensor Database",
            text: "The Biosensor Database is a repository of the array of fluorescent biosensors developed to study cell signaling in live cells. This database has been designed to be a community driven resource that can be updated and revised to maintain both a historical and current view of fluorescent biosensor tools.",
            img: "bsdb.jpeg",
            url: "https://biosensordb.ucsd.edu/index.php"
        },
        {
            header: "FPbase",
            text: "Comprehensive database of published fluorescent proteins",
            img: "fpbase.png",
            url: "https://www.fpbase.org"
        },
        {
            header: "BLbase",
            text: "Work-in-progress database of bioluminescent probes",
            img: "blbase.png",
            url: "https://www.blbase.org"
        },
        {
            header: "Bioluminescence Hub",
            text: "Resources for using bioluminescent and bioluminescent-optogenetic (BL-OG) tools",
            img: "biohub.jpg",
            url: "https://www.bioluminescencehub.org/"
        },
        {
            header: "Cell Signaling San Diego",
            text: "The Cell Signaling Center at UC San Diego unites researchers passionate about understanding the molecular mechanisms of cell signaling with the goal of leveraging this understanding to treat disease.",
            img: "cssd.png",
            url: "https://cellsignaling.ucsd.edu/"
        }
    ];

    return  <>
        <div className={styles.content_header}>Resources</div>
        <div className={styles.content_main}>
            <ContentBoxGroup contentBoxes={content}/>
        </div>
    </>
}

export default Resources;