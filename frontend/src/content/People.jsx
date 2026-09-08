import content from "../styles/Content.module.css";
import styles from "../styles/People.module.css";
import PeopleJSON from "../util/people.json";

function displayName(person) {
    return person.degree ? `${person.name}, ${person.degree}` : person.name;
}

function People() {
    return (
        <>
            <div className={content.content_header}>People</div>
            <div className={`${content.content_main} ${styles.people_main}`}>
                <section className={styles.section} aria-labelledby="core-staff-heading">
                    <h2 id="core-staff-heading" className={styles.section_heading}>Core Leadership and Staff</h2>
                    <div className={styles.staff_group}>
                        {PeopleJSON.people.map((person) => {
                            const name = displayName(person);
                            return (
                                <article className={styles.staff_card} key={person.name}>
                                    <figure>
                                        {person.photo ? (
                                            <img
                                                className={styles.staff_photo}
                                                src={`images/${person.photo}`}
                                                alt={`Portrait of ${person.name}`}
                                            />
                                        ) : null}
                                        <figcaption className={styles.staff_caption}>
                                            <h3 className={styles.staff_name}>{name}</h3>
                                            <p className={styles.staff_role}>{person.role}</p>
                                        </figcaption>
                                    </figure>
                                </article>
                            );
                        })}
                    </div>
                </section>
                <section className={styles.section} aria-labelledby="advisory-board-heading">
                    <h2 id="advisory-board-heading" className={styles.section_heading}>Scientific Advisory Board</h2>
                    <ul className={styles.advisory_list}>
                        {PeopleJSON.advisory_board.map((person) => (
                            <li className={styles.advisory_item} key={person.name}>
                                <h3 className={styles.advisory_name}>{person.name}</h3>
                                <p className={styles.advisory_institution}>{person.institution}</p>
                                <p className={styles.advisory_expertise}>{person.expertise}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    );
}

export default People;
