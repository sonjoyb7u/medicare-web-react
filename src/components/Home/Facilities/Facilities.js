import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Facilities.css'

import Facility from '../Facility/Facility';

const Facilities = (props) => {
    const {facilities} = props

    return (
        <>
            <section className="facilities" id="facilities">
                <div className="container">
                    <div className="row min-vh-100">
                        <div className="facility-section text-center p-2">
                            <span>Our Facilities</span>
                            <h2>We Care Our Patients</h2>
                        </div>
                        {
                            facilities?.map(facility => <Facility key={facility.id} facility={facility}></Facility>)
                        }
                        <div className="col-md-12 mt-5">
                            <Link to="/home">
                                <Button className="all-facility-btn d-block mx-auto">View All Facilities</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Facilities;