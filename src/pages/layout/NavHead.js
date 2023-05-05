import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProduct } from '../../helper/axios';
import { fetchCategoryAction } from '../category/CategoryAction';
import { fetchCatProductAction, fetchProductAction } from '../Product/ProductAction';


const NavHead = () => {
    const { categories } = useSelector((state) => state.category);
    const dispatch = useDispatch()




    const handleProduct = (e, itemId) => {
        e.preventDefault()
        dispatch(fetchCatProductAction(itemId))


    }
    useEffect(() => {
        dispatch(fetchCategoryAction());
    }, [dispatch]);



    return (
        <>
            <Navbar key="sm" expand="sm" className=" p-2 nav-head">
                <Container fluid>
                    <Navbar.Brand href="/">shop all</Navbar.Brand>
                    <Navbar.Toggle placement="start" aria-controls="offcanvasNavbar-expand-sm" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-sm"
                        aria-labelledby="offcanvasNavbarLabel-expand-sm"
                        placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-around flex-grow-1 pe-1">

                                <Nav.Link >
                                    bought Before
                                </Nav.Link>


                                <NavDropdown
                                    title="catalogue"
                                    id="offcanvasNavbarDropdown-expand-sm"
                                >

                                    {categories.map((item, index) => (
                                        <NavDropdown.Item key={index} onClick={(e) => handleProduct(e, item._id)
                                        }>
                                            <Link to={`/category/${item.slug}`}>{item.name}</Link>

                                        </NavDropdown.Item>
                                    ))}

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action4">
                                        Offer
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