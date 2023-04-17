import { Row, Col, Button, Form } from "react-bootstrap";
import React, { Children, useEffect, useRef, useState } from "react";

import myLogo from '../../assets/a.png';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestSuccess } from "../login/authSlice";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


export const Header = () => {
  const [accessJWT1, setAccessJWT] = useState(null);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { carts } = useSelector((state) => state.product);
  console.log(carts, "i am form carts")




  const handleOnLogout = () => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    // setAccessJWT(null)
    dispatch(requestSuccess({}))
    return <href to="/" />;



  };
  useEffect(() => {
    const jwt = sessionStorage.getItem("accessJWT");
    setAccessJWT(jwt)
  }, [accessJWT1, dispatch, user])

  return (
    <div className="header md-2">
      <Row className="p-3">
        <Col xs={6} md={3} lg={2}>
          <img src={myLogo} alt="Logo" width="150" height="90" />
        </Col>

        <Col xs={0} md={4} sm={4} lg={5} className="m-3 d-none d-md-block">
          <Form>
            <Row className="searchBar">
              <Col xs={8} >
                <Form.Control type="text" placeholder="search" style={{ border: '0', backgroundColor: 'transparent' }} />
              </Col>
              <Col xs={4} className='text-end'>
                <Button variant="white"><i class="fa-solid fa-magnifying-glass"></i>
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>


        <Col className="mt-3" xs={6} md={4} lg={4}>
          <div className="d-flex justify-content-around">
            {accessJWT1 ? (

              <Nav >
                <NavDropdown title={<span className="d-flex flex-column  header-link">
                  <i className="fa-solid fa-user fa-header"></i>
                  <span style={{ fontSize: '0.7rem' }}>account</span>
                </span>}
                >

                  <NavDropdown.Item>
                    <Row className="align-items-center">
                      <Col xs={12} className="mb-4">
                        <span className="fw-bold">Hi {user.fName}! welcome to the Account</span>
                      </Col>
                      <Col xs={12} className="text-end">
                        <Link to="/">
                          <Button variant="warning" onClick={handleOnLogout}>Logout</Button>
                        </Link>
                      </Col>
                    </Row>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="account">
                      <i class="fa-solid fa-bag-shopping me-5"></i>
                      <span className="fw-bold"> Your orders </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="profile">
                    <i class="fa-solid fa-user-pen me-5"> </i>
                    <span className="fw-bold"> Profile </span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    <i class="fa-brands fa-cc-visa me-5"></i>
                    <span className="fw-bold"> Payment </span>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>


            ) : (
              <>
                <Link to="/login" className="d-flex flex-column align-items-center header-link" >
                  <i className="fa-solid fa-user fa-header"></i>
                  <span style={{ fontSize: '0.7rem' }}>login / sign up</span>
                </Link>
              </>
            )}


            {/* <Link to="/" className="d-flex flex-column align-items-center header-link" onClick={handleOnLogout}>
              <i class="fa-solid fa-right-from-bracket p-2"></i>
              <span style={{ fontSize: '0.7rem' }}>logout</span>
            </Link> */}



            <Link to="/" className="d-flex flex-column align-items-center header-link" >
              <i class="fa-solid fa-cart-shopping fa-cart-header"></i>
              <span style={{ fontSize: '0.7rem' }}>{carts[0]?.reQty * carts[1]?.price}</span>
            </Link>


          </div>
        </Col>
      </Row>
    </div >
  );
};
