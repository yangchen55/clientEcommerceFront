import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import { Container, Button } from 'react-bootstrap';
import a from '../../assets/slideshow1.jpg';
import b from '../../assets/slideshow2.jpg';
import c from "../../assets/slideshow3.jpg"

const Slideshow = () => {
    const images = [
        {
            image: a,
            caption: "this is suppose to be inteeresting",
            variant: "success",
            buttonText: "shop",
            interval: 10000
        },
        {
            image: b,
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
        <Carousel className='carou'>
            {images.map((item, index) => (
                <Carousel.Item interval={item.interval}>
                    <img
                        className="slideshow-image"
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