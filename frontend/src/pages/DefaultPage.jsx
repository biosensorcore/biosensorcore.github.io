import Header from "../components/Header";
import HeaderNavbar from "../components/HeaderNavbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function DefaultPage({page}) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        if (isHomePage) {
            document.body.classList.add('home-page');
        } else {
            document.body.classList.remove('home-page');
        }
    }, [isHomePage]);

    return <>
        <Header />
        <HeaderNavbar />
        <Outlet />
        <Footer />
    </>
    
}

export default DefaultPage;