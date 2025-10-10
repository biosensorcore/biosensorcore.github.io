import Header from "../components/Header";
import HeaderNavbar from "../components/HeaderNavbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function DefaultPage({page}) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [offsetTop, setOffsetTop] = useState(0);

    useEffect(() => {
        // Calculate the total height of header + navbar + content header
        const headerHeight = window.innerHeight * 0.2; // 20vh
        const navbarHeight = 56; // Bootstrap navbar height
        const contentHeaderHeight = 64; // Approximate height of content header with padding
        
        // For Home page, reduce the offset to show more of the background image
        const backgroundOffset = isHomePage ? -100 : 0; // Negative offset to show more background
        
        const totalOffset = headerHeight + navbarHeight + contentHeaderHeight + backgroundOffset;
        setOffsetTop(totalOffset);
    }, [isHomePage]);

    const pageWrapperStyle = {
        backgroundImage: 'url(/images/banner.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: `center ${offsetTop}px`,
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        position: 'relative'
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: isHomePage ? 'transparent' : 'rgba(255, 255, 255, 0.3)',
        zIndex: 0,
        pointerEvents: 'none',
        display: isHomePage ? 'none' : 'block' // Completely remove overlay on Home page
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 1
    };

    return <>
        <div style={pageWrapperStyle}>
            <div style={overlayStyle}></div>
            <div style={contentStyle}>
                <Header />
                <HeaderNavbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    </>
    
}

export default DefaultPage;