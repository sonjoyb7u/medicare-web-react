import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import logo from './../../../assets/images/logo/medicare_logo_2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Footer = () => {
    return (
        <>
            <footer className="footer mt-5">
                <div className="container">
                    <div className="row p-5">
                        <div className="col-md-4">
                            <Link className="navbar-brand me-3" to="/">
                                <img width="110" src={logo} alt="Site Logo" />
                            </Link>
                            <p>Our Clinic has grown to provide a world class facility for the clinic advanced restorative. </p>
                            <p>We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <h3>Quick Links: </h3>
                            <div className="p-5">
                                <Link to="/home">Home</Link>
                                <a href="#about">About</a>
                                <a href="#facilities">Facility</a>
                                <a href="#doctors">Doctor</a>
                                <Link to="/contact">Contact</Link>
                            </div>
                        </div>
                        <div className="social-link col-md-4 text-center">
                            <h3>Social Share Links: </h3>
                            <div className="col-lg-12 col-md-12 p-4">
                                <FontAwesomeIcon className="social-icon" icon={['fab', 'facebook']} />
                                <FontAwesomeIcon className="social-icon" icon={['fab', 'twitter']} />
                                <FontAwesomeIcon className="social-icon" icon={['fab', 'linkedin']} />
                                <FontAwesomeIcon className="social-icon" icon={['fab', 'instagram']} />
                            </div>
                        </div>
                    </div>
                </div>
                <h6 className="copy-right text-center mx-auto">Copyright &#169; & Created by <strong>Programming Hero Batch-4 || All Rights Reserved</strong></h6>
            </footer> 
        </>
    );
};

export default Footer;