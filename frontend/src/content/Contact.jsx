import content from "../styles/Content.module.css"

function Contact() {
    return <>
        <div className={content.content_header}>Contact Us</div>
        <div className={content.content_main}>
            <div className={content.content_default}>
                <h2 className={content.section_heading}>Discuss a project</h2>
                <p>For questions about biosensors, imaging and analysis, or a potential Core project, contact us at <a className={content.content_link} href="mailto:biosensors@health.ucsd.edu">biosensors@health.ucsd.edu</a>. Early discussion is useful when sensor selection, experimental design, imaging, and analysis are still being planned.</p>
            </div>
            <div className={content.content_default}>
                <h2 className={content.section_heading}>Starting a project</h2>
                <p>An initial email is most useful if it includes whatever information is already available about the items below. It is fine if some aspects of the project are not yet defined.</p>
                <ul className={content.plain_list}>
                    <li>The biological question or measurement of interest</li>
                    <li>The model system and experimental context</li>
                    <li>Any biosensor or assay already being considered or used</li>
                    <li>Relevant imaging instrumentation or acquisition constraints</li>
                    <li>The type of support you are seeking, such as consultation, imaging and analysis, characterization, or biosensor development</li>
                </ul>
                <p>We can help determine the appropriate next steps from there.</p>
            </div>
            <div className={content.content_default}>
                <h2 className={content.section_heading}>Find Us</h2>
                <p>Visit us at:</p>
                <a className={content.content_link} href="https://www.google.com/maps/place/Medical+Teaching+Facility/@32.8756041,-117.2380811,17z/data=!3m1!4b1!4m6!3m5!1s0x80dc06c59fa451ab:0x497a8a5658288d29!8m2!3d32.8756041!4d-117.2355062!16s%2Fg%2F12hrygy14!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">
                    Medical Teaching Facility, Room 421<br />
                    9515 Gilman Drive<br />
                    La Jolla, CA 92093
                </a>
            </div>
        </div>
    </>
}

export default Contact;
