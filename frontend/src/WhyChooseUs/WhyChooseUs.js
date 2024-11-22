import React from "react";
import "./WhyChooseUs.css";
import xv from '../Navbar/Picture/whywork.png';
import xa from '../Navbar/Picture/w2.png';
const WhyChooseUs = () => {
    return (
        <div style={{marginBottom:'5%'}}>
        <div className="why-choose-us-container">

            <div className="title-section">

                <h1>Why Choose Us</h1>


            </div>
            <div className="images-section">
                <img
                    src={xv}
                    alt="Office space"
                    className="image"
                />
                <img
                    src={xa}
                    alt="Team collaboration"
                    className="image"
                />
            </div>
            <div className="content-section">
                <p>
                    We are committed to delivering scalable solutions that are adaptable
                    and future-ready, ensuring our clients stay prepared for evolving
                    business landscapes. With an agile development approach, we embrace
                    flexibility and iterative processes to deliver efficient and timely
                    results. Our customer-centric philosophy focuses on tailoring
                    solutions to meet each client's unique needs and goals.
                </p>
            </div>
        </div>
        </div>
    );
};

export default WhyChooseUs;