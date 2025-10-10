import Header from "../components/Header";
import HeaderNavbar from "../components/HeaderNavbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function DefaultPage({page}) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        // Apply background image to body immediately
        document.body.style.backgroundImage = 'url(/images/banner.jpg)';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
        
        // Add overlay class for conditional styling
        if (isHomePage) {
            document.body.classList.add('home-page');
        } else {
            document.body.classList.remove('home-page');
        }
    }, []); // Run on mount only

    useEffect(() => {
        // Update overlay class when route changes
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