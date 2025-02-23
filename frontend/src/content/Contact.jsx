import content from "../styles/Content.module.css"

function Contact() {
    return <>
        <div className={content.content_default}>
            <h3>Reach Out</h3>
            <p>Reach out via our email <a className={content.content_link} href="mailto:biosensors@health.ucsd.edu
">biosensors@health.ucsd.edu</a>
            </p>
        </div>
        <div className={content.content_default}>
            <h3>Find Us</h3>
            <p>Visit us at:</p>
            <p>Medical Teaching Facility rm 421 9515 Gilman Drive La Jolla, CA 92093</p>
        </div>
    </>
}

export default Contact;