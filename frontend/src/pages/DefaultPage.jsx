import Header from "../components/Header";
import HeaderNavbar from "../components/HeaderNavbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";

function DefaultPage({page}) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // Calculate header height: 20vh (header) + navbar height (~60px)
    const headerHeight = 'calc(20vh + 60px)';

    const backgroundStyle = {
        position: 'fixed',
        top: headerHeight,
        left: 0,
        width: '100%',
        height: `calc(100vh - ${headerHeight})`,
        backgroundImage: 'url(/images/banner.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        zIndex: -2,
        pointerEvents: 'none'
    };

    const overlayStyle = {
        position: 'fixed',
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