import React, { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './FacilityDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const FacilityDetail = () => {
    const {facilityId} = useParams()

    const [facilities, setFacilities] = useState([])
    useEffect(() => {
        const url = '/facilities.JSON'
        fetch(url)
        .then(res => res.json())
        .then(data => setFacilities(data))

    }, [])

    const [facility, setFacility] = useState({})
    useEffect(() => {
        const matchedFacility = facilities.find(facility => facility.id === facilityId)
        setFacility(matchedFacility)

    }, [facilities])

    return (
        <>
            <section className="facility-detail" id="facility-detail">
                <div className="container">
                    <div className="row min-vh-100">
                        <div className="col-lg-6 col-md-6 facility-detail-img" data-aos="fade-right">
                            <Image className="w-100" src={facility?.image} alt="About Image"></Image>
                        </div>
                        <div className="col-lg-6 col-md-6 facility-detail-content" data-aos="fade-left" >
                            <h3>{facility?.name}</h3>
                            <p>{facility?.longDesc}</p>
                            <div className="facility-detail-btn">
                                <Link to="/">
                                    <Button>Booking Now <FontAwesomeIcon className="facility-detail-icon" icon={faArrowRight} /></Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FacilityDetail;