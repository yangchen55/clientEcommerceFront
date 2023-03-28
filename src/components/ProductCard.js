import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import c from "../assets/c.webp"
import d from "../assets/d.jpeg"
import e from "../assets/e.avif"


const ProductCard = () => {
    return (
        <Card style={{ width: '16rem' }} className="m-3 card">
            <Card.Img variant="top" src={d} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Text>
                <Button className='cardButton' style={{ width: '100%', background: "white", color: "black", border: "1px solid grey" }}><i className="fa-solid fa-cart-plus" style={{ color: "#111213" }}> </i> Add</Button>
            </Card.Body>
        </Card >
    )
}

export default ProductCard