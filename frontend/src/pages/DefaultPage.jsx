import Header from "../components/Header";
import HeaderNavbar from "../components/HeaderNavbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function DefaultPage({page}) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [headerHeight, setHeaderHeight] = useState('calc(20vh + 60px)');

    useEffect(() => {
        const calculateTotalHeight = () => {
            const headerElement = document.querySelector('.header_container');
            const navbarElement = document.querySelector('.navbar');
            const contentHeaderElement = document.querySelector('.content_header');
            
            let totalHeight = 0;
            
            if (headerElement) {
                totalHeight += headerElement.offsetHeight;
            }
            if (navbarElement) {
                totalHeight += navbarElement.offsetHeight;
            }
            if (contentHeaderElement) {
                totalHeight += contentHeaderElement.offsetHeight;
            }
            
            console.log('Total header height:', totalHeight);
            return `${totalHeight}px`;
        };

        // Wait for DOM to render, then calculate height
        const timer = setTimeout(() => {
            const height = calculateTotalHeight();
            setHeaderHeight(height);
        }, 100);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    const backgroundStyle = {
        position: 'absolute',
        top: headerHeight,
        left: 0,
        width: '100%',
        height: `calc(100vh - ${headerHeight})`,
        backgroundImage: 'url(/images/banner.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -2,
        pointerEvents: 'none'
    };

    const overlayStyle = {
        position: 'absolute',
        top: headerHeight,
        left: 0,
        width: '100%',
        height: `calc(100vh - ${headerHeight})`,
        backgroundColor: isHomePage ? 'transparent' : 'rgba(255, 255, 255, 0.3)',
        zIndex: -1,
        pointerEvents: 'none'
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 1,
        backgroundColor: 'transparent'
    };

    return <>
        <div style={backgroundStyle}></div>
        <div style={overlayStyle}></div>
        <div style={contentStyle}>
            <Header />
            <HeaderNavbar />
            <Outlet />
            <Footer />
        </div>
    </>
    
}

export default DefaultPage;