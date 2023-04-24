import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Card, Row, Container, Col, Form, Button } from 'react-bootstrap';
import RatingStar from 'react-rating-stars-component';
import { GlobalMsg } from '../layout/GlobalMsg';
import { Header } from '../layout/Header';
import NavHead from '../layout/NavHead';
import { Footer } from '../layout/Footer';
import { setAddtoCard } from "./CartSlice";




const ProductPage = () => {
    const { products } = useSelector((state) => state.product);
    const { slug } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const filterProduct = products.length ? products.find(item => item.slug === slug) : null;


    const [form, setForm] = useState(0)

    const handleOnChange = (e) => {
        const { value } = e.target
        setForm(value)


    }

    const handleAddToCard = (e) => {
        e.preventDefault()
        //descructure the product infos
        const { name, _id, qty, price, mainImage } = filterProduct;




        // create an obj to send to the cart
        const obj = {
            shopQty: form,
            name, _id, qty, price, mainImage

        }
        // send obj to slic to add to cart
        dispatch(setAddtoCard(obj));

    }
    return (
        <>
            <div className="sticky-head">
                <GlobalMsg />
                <Header />
                <NavHead />
            </div >
            <div className="scroller">
                <Container className="mainPage">
                    <Row className="mt-5">
                        <Col>
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={process.env.REACT_APP_DOMAIN + filterProduct?.mainImage.substr(6)} />
                                <Card.Body>
                                    <Card.Title>{filterProduct.name}</Card.Title>
                                    <Card.Text> Price: {filterProduct.price}</Card.Text>
                                    <Card.Text></Card.Text>
                                    <RatingStar
                                        count={5}
                                        size={24}
                                        activeColor="#ffd700"
                                        value={filterProduct?.ratings}
                                        edit={false}
                                    />
                                    <Card.Subtitle className="mb-2 text-muted"> Available: {filterProduct.qty}</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Form onSubmit={handleAddToCard}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Quantity </Form.Label>
                                    <Form.Control type="number" name="productQty" min="1" max={filterProduct.qty} defaultValue="1" onChange={handleOnChange}
                                    />
                                </Form.Group>

                                <Button className='cardButton' style={{ width: '100%', background: "white", color: "black", border: "1px solid grey" }}
                                    type="submit" >
                                    <i className="fa-solid fa-cart-plus" style={{ color: "#111213" }}> </i>
                                </Button>



                            </Form>
                        </Col>
                    </Row>



                </Container>
                <Footer />
            </div>
        </>

    )
}

export default ProductPage