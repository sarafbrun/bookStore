import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from 'react-bootstrap';

// export const Header = () => {
//     return (
//         <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
//             <Container fluid>
//                 <Nav>

//                     <Navbar.Brand className="d-flex ms-3">BookStore
//                     </Navbar.Brand>
//                 </Nav>

//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">

//                     <Nav>
//                         <Nav.Link href="#deets">Login</Nav.Link>
//                         <Nav.Link className='me-3' eventKey={2} href="#memes">
//                             Home
//                         </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>

//             </Container>
//         </Navbar >
//     )
// }

import { Link } from "react-router-dom";
export function Header() {
    return (
        <Navbar className="bg-body-tertiary justify-content-between">
            <Navbar.Brand className="d-flex ms-3">BookStore</Navbar.Brand>
            <Nav>
                <Row>
                    <Col xs="auto">
                        <Nav.Link>
                            Books
                        </Nav.Link>
                    </Col>
                    <Col xs="auto">
                        <Nav.Link className='mx-3'>
                            Contact us
                        </Nav.Link>
                    </Col>
                </Row>

            </Nav>
        </Navbar>
    );
}

