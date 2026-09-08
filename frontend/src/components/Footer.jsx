import { Link } from 'react-router-dom'
import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer_infobar}>
                <div className={styles.infobar_logo_container}>
                <a href="https://ucsd.edu">
                    <img className={styles.infobar_logo} src="images/ucsd-logo-white.png" alt="UC San Diego"/>
                </a>
                </div>
                <div className={styles.infobar_text}>
                    Medical Teaching Facility, Room 421<br />
                    9515 Gilman Drive, La Jolla, CA 92093
                </div>
                <div className={styles.infobar_text}>
                    <a className={styles.infobar_link} href="mailto:biosensors@health.ucsd.edu">biosensors@health.ucsd.edu</a>
                </div>
            </div>

            <div className={styles.footer_main_container}>
                <div className={styles.footer_table_container}>
                    <table className={styles.footer_table}>
                        <thead>
                            <tr>
                                <th>MENU</th>
                                <th>QUICK LINKS</th>
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
                                
                                
                            </tr>
                            <tr>
                                <td>
                                    <Link className={styles.footer_link} to="/collections">Biosensor Collection</Link>
                                </td>
                                <td>
                                    <Link className={styles.footer_link} to="/rates">Services & Rates</Link>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.footer_logo_container}></div>
            </div>
        </footer>
    );
}

export default Footer;
