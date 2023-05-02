import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Footer } from '../layout/Footer';
import { GlobalMsg } from '../layout/GlobalMsg';
import { Header } from '../layout/Header';
import NavHead from '../layout/NavHead';
import ProfilePage from '../profile/ProfilePage';
import Container from 'react-bootstrap/Container';
import './privateDashboard.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Checkout from '../checkout/Checkout';


const PrivateDashboard = () => {
    const { user } = useSelector((state) => state.user);
    return (
        <>
            <GlobalMsg />
            <Header />
            <NavHead />
            <Container className='mainPage mt-3'>
                <Tab.Container defaultActiveKey="first">
                    <Row>
                        <Col sm={4} className='tabColumn'>
                            <span className='fw-bold'><h1>Hi {user.fName}! </h1>
                                welcome to Account </span>
                            <Nav variant='pill' className="flex-column mt-4">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className='text-black'>
                                        <i class="fa-solid fa-bag-shopping me-5"></i>
                                        <span className="fw-bold"> Your orders </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className='text-black'>
                                        <i class="fa-solid fa-user-pen me-5"> </i>
                                        <span className="fw-bold"> Profile </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" className='text-black'>
                                        <i class="fa-brands fa-cc-visa me-5"></i>
                                        <span className="fw-bold"> Payment </span>
                                    </Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Checkout />

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <ProfilePage />

                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

            </Container>
            <Footer />

        </>
    )
}

export default PrivateDashboard