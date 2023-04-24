import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { GlobalMsg } from '../layout/GlobalMsg'
import { Header } from '../layout/Header'
import { useDispatch, useSelector } from 'react-redux';

const Order = () => {
    const { cart } = useSelector((state) => state.cart)
    console.log(cart)
    return (
        <>
            <div className="sticky-head">
                <GlobalMsg />
                <Header />
            </div>
            <div className="scroller">
                <Container className="mainPage">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Details</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>
                                        <img
                                            src={process.env.REACT_APP_DOMAIN + item?.mainImage.substr(6)}
                                            width="80px"
                                            alt="photos"
                                        />


                                    </td>
                                    <td>{item.price}</td>
                                    <td>{item.shopQty}</td>

                                </tr>


                            ))}


                        </tbody>
                    </Table>
                </Container>
            </div >


        </>
    )
}

export default Order