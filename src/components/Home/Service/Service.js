import React from 'react';
import './Service.css'
import { Image } from 'react-bootstrap';
import serviceImage from './../../../assets/images/service/service_1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance, faProcedures, faStethoscope } from '@fortawesome/free-solid-svg-icons'

const Service = () => {
    return (
        <>
            <section className="service" id="service">
                <div className="container">
                    <div className="row min-vh-100">
                        <div className="service-section text-center p-5">
                            <span>Our Service</span>
                            <h2>We're setting Standards in Research what's more, Clinical Care.</h2>
                        </div>
                        <div className="col-lg-6 col-md-8 service-content" data-aos="fade-right" >
                            <div className="box">
                                <h3><FontAwesomeIcon className="service-icon" icon={faAmbulance} /> Ambulance Services</h3>
                                <p>We offer extensive medical procedures to outbound & inbound patients what it is and we are very proud achievement staff.</p>
                            </div>
                            <div className="box">
                                <h3><FontAwesomeIcon className="service-icon" icon={faProcedures} /> Emergency Rooms</h3>
                                <p>We offer extensive medical procedures to outbound & inbound patients what it is and we are very proud achievement staff.</p>
                            </div>
                            <div className="box">
                                <h3><FontAwesomeIcon className="service-icon" icon={faStethoscope} /> Free Health Check</h3>
                                <p>We offer extensive medical procedures to outbound & inbound patients what it is and we are very proud achievement staff.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 about-img d-none d-md-block" data-aos="fade-left">
                            <Image className="w-100 h-100" src={serviceImage} alt="About Image"></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;