import Header from "../components/Header";
import HeaderNavbar from "../components/HeaderNavbar";
import styles from "../styles/Content.module.css";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function DefaultPage({page}) {
    return <>
        <Header />
        <HeaderNavbar />
            <Outlet />
        <Footer />
    </>
    
}

export default DefaultPage;