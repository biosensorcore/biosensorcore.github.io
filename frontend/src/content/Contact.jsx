import content from "../styles/Content.module.css"

function Contact() {
    return <>
        <div className={content.content_header}>Contact Us</div>
        <div className={content.content_main}>
            <div className={content.content_default} style={{marginBottom: "5%"}}>
                <h3>Reach Out</h3>
                <p>Reach out via our email <a className={content.content_link} href="mailto:biosensors@health.ucsd.edu
    ">biosensors@health.ucsd.edu</a>
                </p>
            </div>
            <div className={content.content_default}>
                <h3>Find Us</h3>
                <p>Visit us at:</p>
                <a className={content.content_link} href="https://www.google.com/maps/place/Medical+Teaching+Facility/@32.8756041,-117.2380811,17z/data=!3m1!4b1!4m6!3m5!1s0x80dc06c59fa451ab:0x497a8a5658288d29!8m2!3d32.8756041!4d-117.2355062!16s%2Fg%2F12hrygy14!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank">Medical Teaching Facility rm 421 9515 Gilman Drive La Jolla, CA 92093</a>
            </div>
        </div>
    </>
}

export default Contact;