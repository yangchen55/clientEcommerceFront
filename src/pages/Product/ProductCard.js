import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Card, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
// import c from "../assets/c.webp"
import d from "../../assets/c.webp"
import { addtoCardAction, fetchProductAction } from './ProductAction';
// import e from "../assets/e.avif"
import RatingStar from 'react-rating-stars-component';
import { setAddtoCard } from './productSlice';
import { Link, useLocation, useNavigate } from "react-router-dom";



const ProductCard = () => {
    const { products, filteredProducts } = useSelector((state) => state.product);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProductAction());
    }, [dispatch]);



    return (
        <div>
            <Row className="d-flex justify-content-around">
                {filteredProducts.length > 0 ?

                    <>

                        {filteredProducts.map((item, index) => (
                            <Col lg={3} md={6} sm={12}>
                                <Link to={`/product/${item.slug}`}>
                                    <Card style={{ width: '16rem' }}
                                        className="m-3 card"
                                    >
                                        <Card.Img variant="top" src={process.env.REACT_APP_DOMAIN + item?.mainImage.substr(6)} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text> Price: {item.price}</Card.Text>

                                            <Card.Text></Card.Text>
                                            <RatingStar
                                                count={5}
                                                size={24}
                                                activeColor="#ffd700"
                                                value={item.ratings}
                                                edit={false}
                                            />

                                            <Card.Subtitle className="mb-2 text-muted"> Available: {item.qty}</Card.Subtitle>




                                            <Button className='cardButton' style={{ width: '100%', background: "white", color: "black", border: "1px solid grey" }} >
                                                <i className="fa-solid fa-cart-plus" style={{ color: "#111213" }}> </i>
                                            </Button>






                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </>

                    :
                    <>

                        {products.map((item, index) => (
                            <Col lg={3} md={6} sm={12}>
                                <Link to={`/product/${item.slug}`}>
                                    <Card style={{ width: '16rem' }}
                                        className="m-3 card"
                                    >
                                        <Card.Img variant="top" src={process.env.REACT_APP_DOMAIN + item?.mainImage.substr(6)} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text> Price: {item.price}</Card.Text>

                                            <Card.Text></Card.Text>
                                            <RatingStar
                                                count={5}
                                                size={24}
                                                activeColor="#ffd700"
                                                value={item.ratings}
                                                edit={false}
                                            />

                                            <Card.Subtitle className="mb-2 text-muted"> Available: {item.qty}</Card.Subtitle>




                                            <Button className='cardButton' style={{ width: '100%', background: "white", color: "black", border: "1px solid grey" }} >
                                                <i className="fa-solid fa-cart-plus" style={{ color: "#111213" }}> </i>
                                            </Button>






                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>



                        ))}

                    </>
                }

            </Row>
        </div >






    )
}



export default ProductCard