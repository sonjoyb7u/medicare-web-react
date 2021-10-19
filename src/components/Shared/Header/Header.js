import React from 'react';
// import { HashLink } from 'react-router-hash-link';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from './../../../assets/images/logo/medicare_logo_2.png'
import './Header.css'

const Header = () => {
    const {signOutUsingGoogle, user} = useAuth()
    // console.log(user);

    return (
        <>
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="container">
                        <Link className="navbar-brand me-3" to="/">
                            <img width="110" src={logo} alt="Site Logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#service">Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#facilities">Facility</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#doctors">Doctor</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/registration">Registration</Link>
                                </li>

                                {
                                    user?.email 
                                    ?
                                    <li className="nav-item dropdown">
                                        <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {
                                            user?.photoURL ?
                                            <Image style={{ width: "40px", borderRadius: '25px' }} src={user?.photoURL}></Image>
                                            : 
                                            user?.displayName
                                        }
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <Link className="dropdown-item" to="/home">Profile</Link>
                                            </li>
                                            <li>
                                                <Button variant="link" onClick={signOutUsingGoogle} className="dropdown-item text-dark">Logout</Button>
                                            </li>
                                        </ul>
                                    </li> 
                                    :
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                }
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/appointment">
                                        <Button className="appointment-btn btn-sm">Get Appointment?</Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;