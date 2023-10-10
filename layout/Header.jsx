import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container fluid>
                <Nav>

                    <Navbar.Brand className="d-flex ms-3">BookStore
                    </Navbar.Brand>
                </Nav>


                <Nav>
                    <Nav.Link href="#deets">Login</Nav.Link>
                    <Nav.Link className='me-3' eventKey={2} href="#memes">
                        Home
                    </Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    )
}
