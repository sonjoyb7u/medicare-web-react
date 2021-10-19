import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sliderImg from './../../../assets/images/slider/slider_img_1.png'
import './Slider.css'

const Slider = () => {
    return (
        <>
            <section className="slider" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 slider-img ">
                            <Image className="w-100 h-100" src={sliderImg} alt="Slider Image"></Image>
                        </div>
                        <div className="col-md-6 p-5 slider-content">
                            <span className="slider-title">Welcome to our Medical Health Care Center</span>
                            <h2 className="slider-head">We take care our <br />patients health</h2>
                            <p className="slider-desc">I realized that becoming a doctor, I can only help a small community. <br />
                            But by becoming a doctor, I can help my whole country.
                            </p>
                            <div className="slider-btn">
                                <Link to="/about">
                                    <Button >More About Clinic</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Slider;