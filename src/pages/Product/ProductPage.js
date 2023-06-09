import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Card, Row, Container, Col, Form, Button } from 'react-bootstrap';
import RatingStar from 'react-rating-stars-component';
import { GlobalMsg } from '../layout/GlobalMsg';
import { Header } from '../layout/Header';
import NavHead from '../layout/NavHead';
import { Footer } from '../layout/Footer';
import { setAddtoCard } from "./CartSlice";
import ProductCard from "./ProductCard";
import { fetchProductAction } from "./ProductAction";
import './product.css'




const ProductPage = () => {
    const { products } = useSelector((state) => state.product);
    const { slug } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(products, slug, " ia m from producy")
    const filterProduct = products.length ? products.find(item => item.slug === slug) : null;


    const [form, setForm] = useState(0)

    const handleOnChange = (e) => {
        const { value } = e.target
        setForm(value)


    }

    const handleAddToCard = (e) => {
        e.preventDefault()
        //descructure the product infos
        const { name, _id, qty, price, mainImage, slug, description } = filterProduct;

        // create an obj to send to the cart
        const obj = {
            shopQty: form,
            name, _id, qty, price, mainImage, slug, description

        }
        // send obj to slic to add to cart
        dispatch(setAddtoCard(obj));

    }
    useEffect(() => {
        dispatch(fetchProductAction());
    }, [dispatch]);

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
                        <h3 className="m-2 text-center">Product Details</h3>

                        <Col className="mt-2">

                            <img src={filterProduct?.mainImage} height="80%" width="80%" />

                        </Col>
                        <Col className="mt-5">
                            <Form onSubmit={handleAddToCard}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <h1> {filterProduct?.name}</h1>
                                    <h6> Price : $ {filterProduct?.price}</h6>
                                    <Form.Label>Quantity </Form.Label>
                                    <Form.Control type="number" name="productQty" min="1" max={filterProduct?.qty} placeholder="1" onChange={handleOnChange}
                                    />
                                    <RatingStar
                                        count={5}
                                        size={24}
                                        activeColor="#ffd700"
                                        value={filterProduct?.ratings}
                                        edit={false}
                                    />
                                </Form.Group>
                                <Card.Subtitle className="mb-2 text-muted"> Available: {filterProduct?.qty}</Card.Subtitle>


                                <Button className='cardButton' style={{ width: '100%', background: "white", color: "black", border: "1px solid grey" }}
                                    type="submit" >
                                    <i className="fa-solid fa-cart-plus" style={{ color: "#111213" }}> </i>
                                </Button>
                                <div>{filterProduct?.description}</div>

                            </Form>
                        </Col>
                    </Row>
                    <Row className="imageRow">
                        {filterProduct?.images.map((i, it) => (
                            <Col className="imageColumn">
                                <img src={i} width="80%" />
                            </Col>
                        ))}
                    </Row>






                </Container>
                <Footer />
            </div>
        </>

    )
}

export default ProductPage