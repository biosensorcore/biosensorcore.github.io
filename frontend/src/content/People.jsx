import ContentBoxGroup from "../components/ContentBoxGroup";
import styles from "../styles/Content.module.css";
import PeopleJSON from '../util/people.json';

function People() {
    function nameToImageFilePath(name) {
        let out = name.split(" ").join("_");
        console.log(out);
        return out;
    }

    const boxes = PeopleJSON.people.map((person) => {return {
        header: person.name,
        text: person.bio,
        img: `People_${nameToImageFilePath(person.name)}.jpg`,
        short: true
    }})

    return (<>
        <div className={styles.content_header}>People</div>
        <div className={styles.content_main}>
            <ContentBoxGroup contentBoxes={boxes}/>
            <div className={styles.advisory_board}>
                <h2>Advisory Board</h2>
                {PeopleJSON.advisory_board.map((person => (
                    <>
                        <h3>
                            {person.name}
                        </h3>
                        <p>
                            {person.bio}
                        </p>
                    </>
                )))}
            </div>
        </div>
    </>);
}

export default People;