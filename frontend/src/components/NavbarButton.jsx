import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import '../styles/Navbar.css';

function NavbarButton({page}) {
    const { title, url, subpages } = page;
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };
    if (subpages.length > 0) {
        return (
            <NavDropdown
                title={title.toUpperCase()}
                onClick={() => {window.location.href = `/${url}`}}
                show={showDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {subpages.map((item) => (
                    <NavDropdown.Item href={item.url}>{item.title.toUpperCase()}</NavDropdown.Item>
                ))}
            </NavDropdown>
        )
    } else {
        return (<Nav.Link href={url}>{title.toUpperCase()}</Nav.Link>);
    }
}

export default NavbarButton;