import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_infobar}>
                <div className={styles.infobar_logo_container}>
                <a href="https://ucsd.edu">
                    <img className={styles.infobar_logo} src="images/ucsd-logo-white.png"/>
                </a>
                </div>
                <div className={styles.infobar_text}>9515 Gilman Drive, La Jolla, CA 92093</div>
                <div className={styles.infobar_text}>(858) 822-4007</div>
            </div>

            <div className={styles.footer_main_container}>
                <div className={styles.footer_table_container}>
                    <table>
                        <thead>
                            <tr>
                                <th>MENU</th>
                                <th>QUICK LINKS</th>
                                <th>SOCIAL MEDIA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a className={styles.footer_link} href="/about">About</a>
                                </td>
                                <td>
                                    <a className={styles.footer_link} href="/contact">Contact</a>
                                </td>
                                <td>
                                    <a className={styles.footer_link} href="https://x.com" target="_blank" aria-label="Twitter">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td>
                                    <a className={styles.footer_link} href="/collections">Biosensors</a>
                                </td>
                                <td>
                                    <a className={styles.footer_link} href="/rates">Rates & Services</a>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.footer_logo_container}></div>
            </div>
        </div>

    )
}

export default Footer;