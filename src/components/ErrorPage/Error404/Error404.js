import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Error404.css'
import error404Image from './../../../assets/images/error404/error_404_2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Error404 = () => {
    return (
        <>
            <section className="error-404" id="error-404">
                <div className="container">
                    <div className="row min-vh-100">
                        <div className="col-lg-6 col-md-6 error-404-img" data-aos="fade-right">
                            <Image className="w-100 h-100" src={error404Image} alt="Error 404 Image"></Image>
                        </div>
                        <div className="col-lg-6 col-md-6 error-404-content" data-aos="fade-left" >
                            <div className="error-404-btn">
                                <Link to="/">
                                    <Button>Back To Home <FontAwesomeIcon className="error-404-icon" icon={faArrowLeft} /></Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Error404;