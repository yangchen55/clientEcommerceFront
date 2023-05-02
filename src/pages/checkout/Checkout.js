
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { GlobalMsg } from '../layout/GlobalMsg'
import { Header } from '../layout/Header'
import React, { useState, useEffect } from 'react'
import './checkout.css';
import { autoLogin } from '../login/authAction';
import Accordion from 'react-bootstrap/Accordion';
import { fetchPayment } from '../../helper/axios';

const Checkout = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state.cart)
    const { user } = useSelector((state) => state.user)
    const [payment, setPayment] = useState([])
    const [order, setOrder] = useState([])



    const handleOnPlaceOrder = () => {
        console.log(order)

    }

    const handleOnClick = (e) => {
        const { name, value } = e.target
        setOrder({
            ...order, ...user,
            [name]: value,

        }
        )


    }



    const getAllPayment = async () => {

        const { paymentMethods } = await fetchPayment()
        setPayment(paymentMethods)
    }

    useEffect(() => {
        dispatch(autoLogin())
        getAllPayment()
    }, [dispatch])

    const sum = cart.reduce((acc, curr) => {
        return acc + parseInt(curr?.shopQty) * parseInt(curr?.price);
    }, 0);

    const Qty = cart.reduce((acc, curr) => {
        return acc + parseInt(curr?.shopQty);
    }, 0);

    const d = 9;
    return (
        <>
            <div className="sticky-head">
                <GlobalMsg />
                <Header />
            </div>
            <div className="scroller">
                <Container className='mainPage'>
                    <Row>
                        <Col className="deliver">
                            <div>

                                Dear {user.fName} {user.lName}, Your registered email  {user.email}

                                we will contact via this
                                {user.phone}
                            </div>
                            <h5> Delivery address </h5>
                            <hr></hr>

                            <Form>
                                <Row className="mb-3 p-3">

                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Label className='checkoutfonttext'>Address Line:</Form.Label>
                                        <Form.Control type="text" placeholder="24/323 Forest Road" name="addressline" required onChange={handleOnClick} />

                                    </Form.Group>

                                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                                        <Form.Label className='checkoutfonttext'>Town/City:</Form.Label>
                                        <Form.Control type="text" placeholder="Hurstville" name='town' required onChange={handleOnClick} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid state.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                                        <Form.Label className='checkoutfonttext'>Posscode:</Form.Label>
                                        <Form.Control type="number" placeholder="2000" name='posscode' required onChange={handleOnClick} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid PossCode.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Label className='checkoutfonttext'>State:</Form.Label>

                                        <Form.Control as="select" required name="state" onChange={handleOnClick}>
                                            <option value="">Please select</option>
                                            <option value="ACT">Australian Capital Territory</option>
                                            <option value="NSW">New South Wales</option>
                                            <option value="NT">Northern Territory</option>
                                            <option value="QLD">Queensland</option>
                                            <option value="SA">South Australia</option>
                                            <option value="TAS">Tasmania</option>
                                            <option value="VIC">Victoria</option>
                                            <option value="WA">Western Australia</option>

                                        </Form.Control>

                                    </Form.Group>
                                    <hr className='mt-5'></hr>

                                    <Form.Group>
                                        <Form.Label as="legend">Payment method:</Form.Label>
                                        {payment.map((item, index) => (
                                            <Accordion>
                                                <Accordion.Item eventKey={index}>
                                                    <Accordion.Header>
                                                        <Form.Check
                                                            type="radio"
                                                            label={item?.name}
                                                            name="paymentMethod"
                                                            id="debit-card"
                                                            value={item?.name}
                                                            onChange={handleOnClick}
                                                        />
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        {item?.description}
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>
                                        ))}

                                    </Form.Group>




                                </Row>
                            </Form>
















                        </Col>
                        <Col className='orderSummary '>
                            <h6 className='text-center mt-4'>order Details</h6>
                            <hr></hr>
                            <Row>
                                <Col> your trolley ({Qty} items)</Col>
                                <Col className='text-end'> ${sum}</Col>
                            </Row>
                            {cart.map((item, index) => (
                                <Row style={{ color: "grey" }}>
                                    <Col> {item?.name} * {item?.shopQty}</Col>
                                    <Col className='text-end'> ${item?.price}</Col>
                                </Row>


                            ))}
                            <Row style={{ color: "grey" }}>
                                <Col> Delivery</Col>
                                <Col className='text-end'>${d}</Col>
                            </Row>
                            <hr></hr>
                            <Row >
                                <Col> total(with Gst)</Col>
                                <Col className='text-end'> ${sum + d}</Col>
                                <p style={{ color: "grey", fontSize: "10px", margin_top: "10px" }}> Price, savings and bagging quantity shown are estimates only and you’ll be charged the final amount after your order is packed. A pending payment may be withheld when you place your order. Learn more </p>

                            </Row>
                            <div>
                                <input type="checkbox" id="myCheckbox" name="myCheckbox" value="myCheckboxValue" />
                                <label for="myCheckbox" style={{ fontsize: "2px" }}>I have read and agree to the  <a href='' className='text-end'>customer agreement</a>
                                </label>

                            </div>
                            <Button className='place_order mt-3' variant='success' onClick={handleOnPlaceOrder}>place order</Button>



                        </Col>
                    </Row>




                </Container>

            </div >
        </>
    )
}

export default Checkout