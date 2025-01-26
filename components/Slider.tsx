"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Slider() {
    const images = [
        "aadhaar_card.jpg",
        "airplane_ticket.jpg",
        "certificates.jpg",
        "driving_license.jpg",
        "legal_service.jpg",
        "pancard.jpg",
        "passport.jpg",
        "train_ticket.jpg",
    ]
    return (
        <>
            <Carousel 
            autoPlay={true} 
            emulateTouch={true} 
            useKeyboardArrows={true} 
            showArrows={false}
            interval={2000} 
            infiniteLoop={true}
            showThumbs={false}>
                {
                    images.map((image, index) => (
                        <div key={index} className='md:h-[calc(100vh-58px)]'>
                            <img src={`/images/${image}`} />
                        </div>
                    ))
                }
            </Carousel>
        </>
    )
}
