import Header from "../components/Header";
import HeaderNavbar from "../components/HeaderNavbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";

function DefaultPage({page}) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const pageWrapperStyle = {
        backgroundImage: 'url(/images/banner.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
        pointerEvents: 'none'
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