import { Row, Col, Button, Form } from "react-bootstrap";
import myLogo from '../../assets/a.png';

export const Header = () => {
  return (
    <div className="header md-5">
      <Row className="p-3">
        <Col xs={12} md={3}>
          <img src={myLogo} alt="Logo" width="150" height="90" />
        </Col>

        <Col className="mt-2" xs={12} md={6}>
          <Form>
            <Row className="searchBar">
              <Col xs={8}>
                <Form.Control type="text" placeholder="search" style={{ border: '0', backgroundColor: 'transparent' }} />
              </Col>
              <Col xs={4}>
                <Button variant="white"><i class="fa-solid fa-magnifying-glass"></i>
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>

        <Col xs={12} md={3}>
          <div className="d-flex justify-content-around mt-2">
            <i class="fa-solid fa-user fa-header"> </i>
            <i class="fa-solid fa-list fa-header"></i>
            <i class="fa-solid fa-right-from-bracket p-2"></i>
            <i class="fa-solid fa-cart-shopping fa-cart-header">$ 0.00</i>
          </div>
        </Col>
      </Row>
    </div>
  );
};
