import Header from "../components/Header";
import HeaderNavbar from "../components/HeaderNavbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function DefaultPage({page}) {
    const backgroundStyle = {
        backgroundImage: 'url(/images/banner.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        position: 'relative'
    };

    return <>
        <div style={backgroundStyle}>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>
            <Header />
            <HeaderNavbar />
            <Outlet />
            <Footer />
        </div>
    </>
    
}

export default DefaultPage;