import Header from "../components/Header";
import HeaderNavbar from "../components/HeaderNavbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";

function DefaultPage({page}) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const backgroundStyle = {
        backgroundImage: 'url(/images/banner.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2
    };

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
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