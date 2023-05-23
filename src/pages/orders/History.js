import React, { useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderAction } from '../checkout/CheckoutAction';
import { GlobalMsg } from '../layout/GlobalMsg'
import { Header } from '../layout/Header'
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate, Link } from "react-router-dom";


const History = () => {
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { orderList } = useSelector((state) => state.order)




    useEffect(() => {
        dispatch(getOrderAction(user._id))
    }, [])
    return (
        <>
            <div className="sticky-head">
                <GlobalMsg />
                <Header />
            </div>
            <div className="scroller">
                {orderList.length > 0 ?
                    <Container>
                        <h2 className='text-center'>  ORDER HISTORY</h2>

                        {orderList.map((item, index) => (
                            <Accordion className='mt-4'>
                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header>

                                        <Row key={index} >

                                            <Col >

                                                <h6> Total  orders: <br></br>  {item?.cart.length}</h6>

                                            </Col>


                                            <Col>
                                                order Date:  {new Date(item?.createdAt).toLocaleDateString()}



                                            </Col>
                                            <Col className='text-end'>
                                                <h6> Total Amount: ${item?.paymentDetails.totalAmount}</h6>
                                            </Col>


                                        </Row>


                                    </Accordion.Header>
                                    <Accordion.Body>
                                        {item?.cart.map((item, index) => (
                                            <>
                                                <Link style={{ color: 'black', textDecoration: 'none' }} to={`/product/${item?.slug}`}>
                                                    <Row>








                                                        <Col className='m-3'>
                                                            <img
                                                                src={item?.mainImage && process.env.REACT_APP_DOMAIN + item.mainImage.substr(6)}
                                                                width="80px"
                                                                alt="photos"
                                                            />
                                                        </Col>
                                                        <Col>
                                                            {item.price}
                                                        </Col>
                                                        <Col>
                                                            <bold>
                                                                {item?.name}
                                                            </bold>
                                                        </Col>









                                                    </Row>
                                                </Link>
                                            </>
                                        ))}

                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        ))}



                    </Container>
                    :
                    <>
                        <h2 className='text-center'> you don't have previous order</h2>
                        <hr></hr>
                    </>


                }




            </div>
        </>
    )
}

export default History