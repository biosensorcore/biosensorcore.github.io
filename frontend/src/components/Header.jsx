import styles from '../styles/Header.module.css'


function Header() {
    return (<div className={styles.header_container}>
        <div className={styles.header_text}>
            <a href="/"><h1>BIOSENSOR CORE</h1></a>
        </div>
        <div className={styles.logo_container}>
            <a href="https://ucsd.edu"><img className={styles.header_logo_image} src="images/ucsd-logo-long.png"/></a>
        </div>
    </div>);
}

export default Header;