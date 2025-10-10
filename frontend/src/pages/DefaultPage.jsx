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
        
        // Wait for DOM to be ready, then calculate actual header height
        const calculateHeights = () => {
            const headerElement = document.querySelector('.header_container');
            const navbarElement = document.querySelector('.navbar');
            
            let headerHeight = 0;
            let navbarHeight = 0;
            
            if (headerElement) {
                headerHeight = headerElement.offsetHeight;
            }
            if (navbarElement) {
                navbarHeight = navbarElement.offsetHeight;
            }
            
            const totalHeight = headerHeight + navbarHeight;
            console.log('Header height:', headerHeight, 'Navbar height:', navbarHeight, 'Total:', totalHeight);
            
            return totalHeight;
        };
        
        // Apply background styles
        body.style.backgroundImage = 'url(/images/banner.jpg)';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
        body.style.backgroundAttachment = 'fixed';
        
        // Wait a bit for elements to render, then calculate heights
        setTimeout(() => {
            const totalHeight = calculateHeights();
            const headerHeightPx = `${totalHeight}px`;
            
            // Create overlay element
            let overlay = document.getElementById('background-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.id = 'background-overlay';
                overlay.style.position = 'fixed';
                overlay.style.top = headerHeightPx;
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = `calc(100vh - ${headerHeightPx})`;
                overlay.style.backgroundColor = isHomePage ? 'transparent' : 'rgba(255, 255, 255, 0.3)';
                overlay.style.zIndex = '-1';
                overlay.style.pointerEvents = 'none';
                document.body.appendChild(overlay);
            } else {
                overlay.style.top = headerHeightPx;
                overlay.style.height = `calc(100vh - ${headerHeightPx})`;
                overlay.style.backgroundColor = isHomePage ? 'transparent' : 'rgba(255, 255, 255, 0.3)';
            }
        }, 100);

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