import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { GlobalMsg } from '../layout/GlobalMsg'
import { Header } from '../layout/Header'
import { useDispatch, useSelector } from 'react-redux';
import './order.css';
import { Link, Route } from 'react-router-dom';
import ProductPage from '../Product/ProductPage';
import { setRemoveFromCard, setUpdateCart } from '../Product/CartSlice';
import Checkout from '../checkout/Checkout';
import ProductCard from '../Product/ProductCard';

const Order = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state.cart)

    const sum = cart.reduce((acc, curr) => {
        return acc + parseInt(curr?.shopQty) * parseInt(curr?.price);
    }, 0);

    const handleRemove = (id) => {
        dispatch(setRemoveFromCard(id))
    }
    const handleOnQty = (id, e) => {
        const { name, value } = e.target;
        console.log(id)
        dispatch(setUpdateCart({ id, name, value }))

    }




    return (
        <>
            <div className="sticky-head">
                <GlobalMsg />
                <Header />
            </div>
            <div className="scroller">
                {cart.length == 0 ?

                    <p>
                        your cart is empty.
                        <ProductCard />
                    </p>
                    :

                    <Container className="mainPage">
                        <h2 className='text-center'>  Trolly - There are  {cart.length} items</h2>
                        <hr></hr>
                        {cart.map((item, index) => (


                            <Row key={index} className="order">
                                <Col className='m-3'>
                                    <img
                                        src={item?.mainImage && item.mainImage}
                                        width="80px"
                                        alt="photos"
                                    />
                                </Col>

                                <Col>
                                    <Link style={{ color: 'black', textDecoration: 'none' }} to={`/product/${item?.slug}`}> <bold> {item?.name} </bold> </Link>
                                    <div className='d-flex justify-content-around'>
                                        <input type="number" name="shopQty" defaultValue={item?.shopQty} min={1} max={item?.qty} inputMode="numeric" style={{ appearance: 'textfield' }} onClick={(e) => handleOnQty(item?._id, e)} />
                                        <span style={{ textDecoration: 'underline', cursor: 'pointer', color: 'grey' }} onClick={() => handleRemove(item?._id)}>remove</span>
                                    </div>


                                </Col>
                                <Col className='text-end'>
                                    <h3>  ${item?.price}</h3>
                                </Col>

                            </Row>

                        ))}
                        <hr>
                        </hr>
                        <Row className='m-5'>
                            Total:  $ {sum}

                            <Link to="checkout">
                                <Button className='cardButton m-3' style={{ width: '100%', background: "grey", color: "white", border: "1px solid grey" }} >
                                    <bold>CheckOut</bold>
                                </Button>
                            </Link>



                        </Row>




                    </Container>


                }

            </div >


        </>
    )
}

export default Order