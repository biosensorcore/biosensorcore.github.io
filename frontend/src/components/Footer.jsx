import { Link } from 'react-router-dom';
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
                                    <Link className={styles.footer_link} to="/about">About</Link>
                                </td>
                                <td>
                                    <Link className={styles.footer_link} to="/contact">Contact</Link>
                                </td>
                                <td>
                                    <Link className={styles.footer_link} to="https://x.com" target="_blank" aria-label="Twitter">
                                        <i class="fab fa-twitter"></i>
                                    </Link>
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td>
                                    <Link className={styles.footer_link} to="/collections">Biosensors</Link>
                                </td>
                                <td>
                                    <Link className={styles.footer_link} to="/rates">Rates & Services</Link>
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