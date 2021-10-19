import React from 'react';
import './About.css'
import { Button, Image } from 'react-bootstrap';
import aboutImage from './../../../assets/images/about/about_1.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const About = () => {

    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="row min-vh-100">
                        <div className="col-lg-6 col-md-6 about-img" data-aos="fade-right">
                            <Image className="w-100" src={aboutImage} alt="About Image"></Image>
                        </div>
                        <div className="col-lg-6 col-md-6 about-content" data-aos="fade-left" >
                            <span>Our Medical</span>
                            <h3>We're setting Standards in Research what's more, Clinical Care.</h3>
                            <p>We provide the most full medical services, so every person could have the opportunity o receive qualitative medical help.</p>
                            <p>Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of uality training and experience.</p>
                            <div className="about-btn">
                                <Link to="/about-detail">
                                    <Button>More About <FontAwesomeIcon className="about-icon" icon={faArrowRight} /></Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;