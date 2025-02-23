import Header from "../components/Header";
import HeaderNavbar from "../components/HeaderNavbar";
import { lazy, Suspense } from "react";
import styles from "../styles/Content.module.css";
import Footer from "../components/Footer";

function DefaultPage({page}) {

    function toUpperCamelCase(str) {
        return str
          .split(/[\s_-]+/) 
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
          .join('');
    }

    const PageContent = lazy(() =>
        import(`../content/${toUpperCamelCase(page.url)}.jsx`)
    );

    console.log(toUpperCamelCase(page.url));

    console.log(PageContent)

    return <>
        <Header/>
        <HeaderNavbar/>
        <div className={styles.content_header}>{page.title.toUpperCase()}</div>
        <div className={styles.content_main}>
            <Suspense fallback={<div>Loading...</div>}>
                <PageContent />
            </Suspense>
        </div>
        <Footer/>
    </>
    
}

export default DefaultPage;