import { Row, Col, Button, Form } from "react-bootstrap";
import myLogo from '../../assets/a.png';

export const Header = () => {
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
          <div className="d-flex justify-content-between">
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
