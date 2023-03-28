import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import e from "../assets/banner.png"


const Banner = () => {
    return (
        <Container className='banner'>
            <Row className='my-3'>
                <Col md={5} xs={12} className="d-none d-md-block m-0">
                    <img src={e} alt="banner" width="50%" className='m-0' />
                </Col>
                <Col md={5} xs={12} className="banner-layout ">
                    <h2>New Summers collection drop out</h2>
                    <p> who says you are not perfect</p>


                </Col>
                <Col md={2} className="d-flex align-items-end">
                    <Button variant='warning' className='banner-button'>Shop Now</Button>
                </Col>

            </Row>
        </Container>
    )
}

export default Banner