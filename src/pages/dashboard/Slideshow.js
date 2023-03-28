import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import { Container, Button } from 'react-bootstrap';
import a from '../../assets/b.png';
import b from '../../assets/a.png';
import c from "../../assets/c.webp"
import d from "../../assets/d.jpeg"
import e from "../../assets/e.avif"
const Slideshow = () => {
    const images = [
        {
            image: c,
            caption: "this is suppose to be inteeresting",
            variant: "success",
            buttonText: "shop",
            interval: 10000
        },
        {
            image: c,
            caption: "this is suppose to be inteeresting",
            variant: "primary",
            buttonText: "sales",
            interval: 5000
        },
        {
            image: c,
            caption: "this is suppose to be inteeresting",
            variant: "danger",
            buttonText: "new arrival",
            interval: 0
        },

    ]

    return (
        <Carousel>
            {images.map((item, index) => (
                <Carousel.Item interval={item.interval}>
                    <img
                        className="d-block w-100"
                        src={item.image}
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption-area'>
                        <Button variant={item.variant} style={{ width: '50%' }}>shop Now</Button>
                        <p>{item.caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>

            ))}



        </Carousel>








    )
}

export default Slideshow