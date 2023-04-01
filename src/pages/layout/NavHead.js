import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


const NavHead = () => {
    return (
        <>

            <Navbar key="sm" expand="sm" className=" p-2 nav-head">
                <Container fluid>
                    <Navbar.Brand href="#">shop all</Navbar.Brand>
                    <Navbar.Toggle placement="start" aria-controls="offcanvasNavbar-expand-sm" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-sm"
                        aria-labelledby="offcanvasNavbarLabel-expand-sm"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-around flex-grow-1 pe-1">
                                <Nav.Link href="#action1">Bought Before</Nav.Link>
                                <Nav.Link href="#action2">categories</Nav.Link>
                                <NavDropdown
                                    title="More"
                                    id="offcanvasNavbarDropdown-expand-sm"
                                >
                                    <NavDropdown.Item href="#action3">Exclusive</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Offer
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Promotion
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>


        </>
    )
}

export default NavHead