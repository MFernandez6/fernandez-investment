import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
    "https://financialframework.com.au/application/files/2714/7996/7598/ff_services_investments.jpg",
    "https://strawberrytours.com/wp-content/uploads/2019/10/Miami_500x500.jpg",
    "https://modelinvesting.com/content/uploads/2019/08/market-volatility.jpg",
    "https://www.strath.ac.uk/media/1newwebsite/departmentsubject/law/500x500/Law_-_scales_-_500x500.jpg",
    "https://ieeecs-media.computer.org/wp-media/2018/11/06075026/computer_chip.jpg"
];

const Carousel = () => {
    return (
        <div className="slide-container">
        <Fade>
            <div className="each-fade">
            <div className="image-container">
                <img src={fadeImages[0]} />
            </div>
            <h2>Financial Services</h2>
            </div>
            <div className="each-fade">
            <div className="image-container">
                <img src={fadeImages[1]} />
            </div>
            <h2>Real Estate Investments</h2>
            </div>
            <div className="each-fade">
            <div className="image-container">
                <img src={fadeImages[2]} />
            </div>
            <h2>Trading Services</h2>
            </div>
            <div className="each-fade">
            <div className="image-container">
                <img src={fadeImages[3]} />
            </div>
            <h2>Legal Services</h2>
            </div>
            <div className="each-fade">
            <div className="image-container">
                <img src={fadeImages[4]} />
            </div>
            <h2>Technology Services</h2>
            </div>
        </Fade>
        </div>
    )
}



export default Carousel