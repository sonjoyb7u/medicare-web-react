import React from 'react';
import './Appointment.css'
import appointmentImage from './../../assets/images/appointment/appointment_1.png'
import { Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Appointment = () => {
    return (
        <>
           <section className="appointment" id="appointment">
                <div className="container min-vh-100">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 appointment-img" data-aos="fade-right">
                            <Image className="w-100" src={appointmentImage} alt="Appointment Image"></Image>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 appointment-content" data-aos="fade-left" >
                            <form>
                                <h3>Book Appointment</h3>
                                <input className="form-control mb-3" type="text" placeholder="Enter name" />
                                <input className="form-control mb-3" type="number" placeholder="Enter number" />
                                <input className="form-control mb-3" type="email" placeholder="Enter email" />
                                <input className="form-control mb-3" type="date" placeholder="Enter date" />
                                <div className="about-btn">
                                    <Link to="/about-detail">
                                        <Button>Submit Now <FontAwesomeIcon className="about-icon" icon={faArrowRight} /></Button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Appointment;