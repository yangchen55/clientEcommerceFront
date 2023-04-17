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



const ProductCard = () => {
    const { products } = useSelector((state) => state.product);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [reqty, setQty] = useState(1);
    const [showQty, setShowQty] = useState(false);
    const dispatch = useDispatch()

    const handleCheckout = () => {
        setShowQty(true);
    }



    const handleAddToCard = (item, reqty) => {
        dispatch(addtoCardAction(item, reqty))

    }

    const handleQtyChange = (e) => {
        const { name, value } = e.target


        setQty({
            ...reqty,
            [name]: value,
        })

        // const newQty = parseInt(event.target.value);
        // setQty(newQty);
    }



    useEffect(() => {
        dispatch(fetchProductAction());
    }, [dispatch]);



    return (
        <div>
            <Row className="d-flex justify-content-around">
                {products.map((item, index) => (
                    <Col lg={3} md={6} sm={12}>
                        <Card style={{ width: '16rem' }}
                            className={`m-3 card ${selectedCardIndex === index ? 'selected' : ''}`}
                            onClick={() => setSelectedCardIndex(index)}
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
                                <Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted"> Available: {item.qty}</Card.Subtitle>


                                {selectedCardIndex === index && (
                                    <>
                                        {!showQty &&


                                            <Button className='cardButton' style={{ width: '100%', background: "white", color: "black", border: "1px solid grey" }} onClick={handleCheckout}>
                                                <i className="fa-solid fa-cart-plus" style={{ color: "#111213" }}> </i>
                                            </Button>
                                        }
                                        {showQty &&
                                            <Button className="cardButton1 d-flex justify-content-around align-items-center"
                                                style={{ width: '100%', background: "white", color: "black", border: "1px solid grey" }}
                                                onClick={() => handleAddToCard(item, reqty)}>
                                                qty  <input type="number" min="1" max={item.qty} name="reQty" style={{ border: "none", outline: "none" }}
                                                    onChange={handleQtyChange} />
                                            </Button>
                                        }


                                    </>
                                )}

                            </Card.Body>
                        </Card>
                    </Col>


                ))}

            </Row>
        </div>






    )
}



export default ProductCard