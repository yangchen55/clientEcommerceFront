import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../components/Banner";
import ProfilePage from "../profile/ProfilePage";
import { Footer } from "./Footer";
import { GlobalMsg } from "./GlobalMsg";
import { Header } from "./Header";
import NavHead from "./NavHead";


export const AdminLayout = ({ slideshow, productCard }) => {
  return (
    <>
      <div className="sticky-head">
        <GlobalMsg />
        <Header />
        <NavHead />
      </div >
      <div className="scroller">
        {slideshow}


        <Container className="mainPage m-5">

          {productCard}


          {/* <Row className="d-flex justify-content-around">
            <Col lg={3} md={6} sm={12}>{productCard}</Col>
            <Col lg={3} md={6} sm={12}>{productCard}</Col>
            <Col lg={3} md={6} sm={12}>{productCard}</Col>
            <Col lg={3} className="d-none d-md-block" md={6} sm={12}>{productCard} </Col>
          </Row> */}


        </Container>
        <Banner />

        <Footer />
      </div>

    </>
  );
};
