import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { GlobalMsg } from "./GlobalMsg";
import { Header } from "./Header";


export const AdminLayout = ({ children }) => {
  return (
    <div>
      <GlobalMsg />
      <Header />
      <Container className="mainPage">
        <Container fluid>
          <Row>
            {/* <Col xs="3" className="side-bar bg-dark text-light">
              <SideBar />
            </Col> */}
            <Col>{children}</Col>
          </Row>
        </Container>
      </Container>

      <Footer />
    </div>
  );
};
