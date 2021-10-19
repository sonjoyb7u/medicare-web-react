import React from 'react';
import './Counter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital, faUsers, faSmile, faProcedures } from '@fortawesome/free-solid-svg-icons'

const Counter = () => {
    return (
        <>
            <section className="counter">
                <div className="container">
                    <div className="counter-content">
                        <div className="counter-box" data-aos="zoom-in">
                            <div className="counter-icon">
                                <FontAwesomeIcon className="about-icon" icon={faHospital} />
                            </div>
                            <div className="counter-info">
                                <span>120+</span>
                                <h3>Hospitals</h3>
                            </div>
                        </div>
                        <div className="counter-box" data-aos="zoom-in">
                            <div className="counter-icon">
                                <FontAwesomeIcon className="about-icon" icon={faUsers} />
                            </div>
                            <div className="counter-info">
                                <span>100+</span>
                                <h3>Staffs</h3>
                            </div>
                        </div>
                        <div className="counter-box" data-aos="zoom-in">
                            <div className="counter-icon">
                                <FontAwesomeIcon className="about-icon" icon={faSmile} />
                            </div>
                            <div className="counter-info">
                                <span>1200+</span>
                                <h3>Happy Patients</h3>
                            </div>
                        </div>
                        <div className="counter-box" data-aos="zoom-in">
                            <div className="counter-icon">
                                <FontAwesomeIcon className="about-icon" icon={faHospital} />
                            </div>
                            <div className="counter-info">
                                <span>110+</span>
                                <h3>Bed Facility</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Counter;