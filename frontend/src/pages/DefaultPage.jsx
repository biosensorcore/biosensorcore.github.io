import Header from "../components/Header";
import HeaderNavbar from "../components/HeaderNavbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function DefaultPage({page}) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        // Apply background directly to body element
        const body = document.body;
        const headerHeight = 'calc(20vh + 60px)';
        
        body.style.backgroundImage = 'url(/images/banner.jpg)';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
        body.style.backgroundAttachment = 'fixed';
        body.style.backgroundOrigin = 'border-box';
        body.style.backgroundClip = 'border-box';
        
        // Create overlay element
        let overlay = document.getElementById('background-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'background-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = headerHeight;
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = `calc(100vh - ${headerHeight})`;
            overlay.style.backgroundColor = isHomePage ? 'transparent' : 'rgba(255, 255, 255, 0.3)';
            overlay.style.zIndex = '-1';
            overlay.style.pointerEvents = 'none';
            document.body.appendChild(overlay);
        } else {
            overlay.style.backgroundColor = isHomePage ? 'transparent' : 'rgba(255, 255, 255, 0.3)';
        }

        // Cleanup function
        return () => {
            // Don't remove background on unmount to avoid flicker
        };
    }, [isHomePage]);

    return <>
        <Header />
        <HeaderNavbar />
        <Outlet />
        <Footer />
    </>
    
}

export default DefaultPage;