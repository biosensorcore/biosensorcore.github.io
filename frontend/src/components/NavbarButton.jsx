import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';

function NavbarButton({page}) {
    const { title, url, subpages } = page;
    const to = `/${url}`;
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
                title={title}
                as={Link}
                to={to}
                show={showDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {subpages.map((item) => (
                    <NavDropdown.Item as={Link} to={`/${item.url}`} key={item.url}>{item.title}</NavDropdown.Item>
                ))}
            </NavDropdown>
        )
    } else {
        return (<Nav.Link as={Link} to={to}>{title}</Nav.Link>);
    }
}

export default NavbarButton;
