import React from 'react';
import { Image } from 'react-bootstrap';
import doctorImageOne from './../../../assets/images/doctor/doctor_1.png'
import './Doctor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Doctor = (props) => {
    const {id, name, image, dept} = props.doctor

    return (
        <>
           <div className="doctors-content col-lg-3 col-md-6 col-sm-12">
                <div className="doctor-box" data-aos="flip-right">
                    <div className="doctor-img">
                        <Image className="w-100 h-100" src={image} alt="Doctor Image"></Image>
                    </div>
                    <div className="doctor-info">
                        <h3>{name}</h3>
                        <span>{dept}</span>
                        <div className="social-link">
                            <FontAwesomeIcon className="social-icon" icon={['fab', 'facebook']} />
                            <FontAwesomeIcon className="social-icon" icon={['fab', 'twitter']} />
                            <FontAwesomeIcon className="social-icon" icon={['fab', 'linkedin']} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Doctor;