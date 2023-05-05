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
import Order from "../orders/Order";
import ProductCard from "../Product/ProductCard";
import { setFilteredProducts, setProducts } from "../Product/productSlice";


export const Header = () => {
  const dispatch = useDispatch();
  const [accessJWT1, setAccessJWT] = useState(null);
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.product);
  const [search, setSearch] = useState([])




  const sum = cart.reduce((acc, curr) => {
    return acc + parseInt(curr?.shopQty) * parseInt(curr?.price);
  }, 0);
  const totalQty = cart.reduce((acc, curr) => {
    return acc + parseInt(curr?.shopQty);
  }, 0);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const tempArg = products.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    setSearch(tempArg)


  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    dispatch(setFilteredProducts(search))

  }



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
          <Link to="/">
            <img src={myLogo} alt="Logo" width="150" height="90" />
          </Link>
        </Col>

        <Col xs={0} md={4} sm={4} lg={5} className="m-3 d-none d-md-block">
          <Form onSubmit={handleSearchSubmit}>
            <Row className="searchBar">
              <Col xs={8} >
                <Form.Control type="text" placeholder="search" style={{ all: "unset", padding: "5px" }} onChange={handleOnSearch} />

              </Col>
              <Col xs={4} className='text-end'>
                <Button variant="white" type="submit" ><i class="fa-solid fa-magnifying-glass"></i>
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>


        <Col className="mt-3" xs={6} md={4} lg={4}>
          <div className="d-flex justify-content-around">
            {accessJWT1 ? (
              <>



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
                      <Link to="/order/checkout" className="my-link">
                        <i class="fa-solid fa-bag-shopping me-5"></i>
                        <span className="fw-bold"> Your orders </span>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>

                      <Link to="/account" className="my-link">
                        <i class="fa-solid fa-user-pen me-5"> </i>
                        <span className="fw-bold"> Profile </span>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      <i class="fa-brands fa-cc-visa me-5"></i>
                      <span className="fw-bold"> Payment </span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>


                <Link to="/order" className="d-flex flex-column align-items-center header-link">
                  <span className="badge bg-danger position-absolute top-20 start-100 translate-middle">
                    {totalQty}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                  <i className="fa-solid fa-cart-shopping fa-cart-header">
                    <span> $ {sum}</span>
                  </i>
                </Link>
              </>





            ) : (
              <>
                <Link to="/login" className="d-flex flex-column align-items-center header-link" >
                  <i className="fa-solid fa-user fa-header"></i>
                  <span style={{ fontSize: '0.7rem' }}>login / sign up</span>

                </Link>
              </>
            )}


          </div>
        </Col>
      </Row>
    </div >
  );
};
