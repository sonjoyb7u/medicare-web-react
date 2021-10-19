import React from 'react';
import './Doctors.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Doctor from '../Doctor/Doctor';
library.add(fab)

const Doctors = (props) => {
    const {doctors} = props
    return (
        <>
            <section className="doctors" id="doctors">
                <div className="container">
                    <div className="row min-vh-100">
                        <div className="facility-section text-center p-5">
                            <span>Our Special Doctor</span>
                            <h2>Our Dedicated Doctors Team</h2>
                        </div>
                        {
                            doctors?.map(doctor => <Doctor key={doctor.id} doctor={doctor} ></Doctor>)
                        }
                        

                        <div className="col-md-12 mt-5 all-doctor-btn">
                            <Link to="/home">
                                <Button className="d-block mx-auto">View All Doctors</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Doctors;