import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'


function Header() {
    return (<div className={styles.header_container}>
        <div className={styles.header_text}>
            <Link className={styles.home_link} to="/"><p className={styles.brand_title}>BIOSENSOR CORE</p></Link>
        </div>
        <div className={styles.logo_container}>
            <a href="https://ucsd.edu"><img className={styles.header_logo_image} src="images/ucsd-logo-long.png" alt="UC San Diego"/></a>
        </div>
    </div>);
}

export default Header;
