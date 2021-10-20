import React, { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Facility.css'

const Facility = (props) => {
    const {id, categoryId, name, image, shortDesc} = props.facility

    const [categories, setCategories] = useState([])
    useEffect(() => {
        const url = '/categories.JSON'
        fetch(url)
        .then(res => res.json())
        .then(data => setCategories(data))

    }, [])

    const [category, setCategory] = useState({})
    useEffect(() => {
        const matchedCategory = categories.find(category => category.id === categoryId)
        setCategory(matchedCategory)

    }, [categories])

    return (
        <>
            <div className="facilities-content col-lg-4 col-md-6 col-sm-12">
                <div className="facility-box">
                    <div className="facility-img" data-aos="zoom-in-down">
                        <Image className="w-100 h-100" src={image} alt="Facilities Image"></Image>
                    </div>
                    <div className="facility-content">
                        <span>Category: <strong>{category?.name}</strong></span>
                        <h3 className="mt-3">{name}</h3>
                        <p>{shortDesc}</p>
                        <div className="facility-btn">
                            <Link to={`/facility-detail/${id}`}>
                                <Button>View Details</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Facility;