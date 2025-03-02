import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'


function Header() {
    return (<div className={styles.header_container}>
        <div className={styles.header_text}>
            <Link to="/"><h1>BIOSENSOR CORE</h1></Link>
        </div>
        <div className={styles.logo_container}>
            <Link to="https://ucsd.edu"><img className={styles.header_logo_image} src="images/ucsd-logo-long.png"/></Link>
        </div>
    </div>);
}

export default Header;