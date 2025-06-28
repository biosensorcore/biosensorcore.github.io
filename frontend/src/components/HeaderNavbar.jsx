import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarButton from './NavbarButton';
import '../styles/Navbar.css';
import Pages from '../util/pages.json';


function HeaderNavbar() {
    

    return (
        <Navbar bg="primary" expand="lg" data-bs-theme="dark" sticky="top">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" placement="middle">
                <Nav className="d-flex justify-content-evenly">
                    {Pages.pages.map((item) => {
                        
                        return <NavbarButton key={item.url} page={item}/>
                        
                    })}
                    
                    
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default HeaderNavbar;