import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useHistory, useLocation } from 'react-router'
import { Button, Image, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from './../../../assets/images/logo/medicare_logo_2.png'
import './Header.css'

const Header = () => {
    const {signOutUsingGoogle, user, setUser, setSuccessMsg, successMsg, setErrorMsg, errorMsg, setIsLoading} = useAuth()
    // console.log(user);

    // Scroll to add navbar background active css class ...
    const [navbarBg, setNavbarBg] = useState(false)
    const changeNavbarBackground = () => {
        // console.log(window.scrollY);
        if(window.scrollY >= 80) {
            setNavbarBg(true)
        }
        else {
            setNavbarBg(false)
        }
    }
    window.addEventListener('scroll', changeNavbarBackground)

    const location = useLocation()
    // console.log(location.state?.from);
    const history = useHistory()
    const redirect_url = '/';

    const handleLogoutProcess = (e) => {
        e.preventDefault();
        signOutUsingGoogle()
        .then(() => {
            setUser({})
            setErrorMsg('')
            setSuccessMsg('')
            // setSuccessMsg('You are successfully logged out...')
            history.push(redirect_url)
        })
        .finally(() => {
            setIsLoading(false)
        })
        .catch((error) => {
            setSuccessMsg('')
            setErrorMsg("Something wrong with user logout!")
        })

    }

    return (
        <>
            <header className={navbarBg ? 'header active' : 'header'}>
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="container">
                        <Link as={Link} className="navbar-brand me-3" to="/">
                            <img width="110" src={logo} alt="Site Logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link as={Link} className="nav-link active" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <NavLink as={HashLink} className="nav-link" to="/home#about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink as={HashLink} className="nav-link" to="/home#service">Service</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink as={HashLink} className="nav-link" to="/home#facilities">Facility</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink as={HashLink} className="nav-link" to="/home#doctors">Doctor</NavLink>
                                </li>
                                <li className="nav-item">
                                    <Link as={Link} className="nav-link" to="/contact">Contact</Link>
                                </li>
                                {
                                    user?.email 
                                    ?
                                    ""
                                    : 

                                    <li className="nav-item">
                                        <Link as={Link} className="nav-link" to="/registration">Registration</Link>
                                    </li>
                                }

                                {
                                    user?.email 
                                    ?
                                    <li className="nav-item dropdown">
                                        <NavLink as={HashLink} to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {
                                            user?.photoURL ?
                                            <Image style={{ width: "40px", borderRadius: '25px' }} src={user?.photoURL}></Image>
                                            : 
                                            user?.displayName
                                        }
                                        </NavLink>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <Link as={Link} className="dropdown-item" to="/home">Profile</Link>
                                            </li>
                                            <li>
                                                <Button variant="link" onClick={handleLogoutProcess} className="dropdown-item text-dark">Logout</Button>
                                            </li>
                                        </ul>
                                    </li> 
                                    :
                                    <li className="nav-item">
                                        <Link as={Link} className="nav-link" to="/login">Login</Link>
                                    </li>
                                }
                                
                                <li className="nav-item">
                                    <Link as={Link} className="nav-link" to="/appointment">
                                        <Button className="appointment-btn btn-sm">Get Appointment?</Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <span className="text-success fw-bold d-block text-center">{successMsg}</span>
                <span className="text-danger fw-bold d-block text-center">{errorMsg}</span>
            </header>
        </>
    );
};

export default Header;