import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Counter from '../Counter/Counter';
import Doctors from '../Doctors/Doctors';
import Facilities from '../Facilities/Facilities';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';
import './Home.css'

const Home = () => {
    const [facilities, setFacilities] = useState([])
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        const url = '/facilities.JSON'
        fetch(url)
        .then(res => res.json())
        .then(data => setFacilities(data.slice(0, 6)))
    }, [])

    useEffect(() => {
        const url = '/doctors.JSON'
        fetch(url)
        .then(res => res.json())
        .then(data => setDoctors(data.slice(0, 4)))
    }, [])

    return (
        <div id="home">
            <Slider></Slider>
            <About></About>
            <Service></Service>
            <Facilities facilities={facilities}></Facilities>
            <Counter></Counter>
            <Doctors doctors={doctors}></Doctors>
        </div>
    );
};

export default Home;