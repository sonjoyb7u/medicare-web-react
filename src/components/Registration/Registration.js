import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { useHistory, useLocation } from 'react-router'
import { Col, Container, Form, Row, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './Registration.css'
import useAuth from '../../Hooks/useAuth';

library.add(fab);

const Registration = () => {

    const {handleCustomRegistration, setUserFullName, sendLinkToEmailForVerify, successMsg, setSuccessMsg, setErrorMsg, errorMsg, setIsLoading} = useAuth()

    const location = useLocation()
    // console.log(location.state?.from);
    const history = useHistory()
    const redirect_url = location.state?.from || '/registration';

        // Custom registration form using firebase ...
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleNameValue = (e) => {
        setFullName(e.target.value)
    }
    const handleEmailValue = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordValue = (e) => {
        setPassword(e.target.value)
    }
    const handleCustomRegistrationProcess = (e) => {
        e.preventDefault();
        handleCustomRegistration(fullName, email, password)
        .then((userCredential) => {
            setErrorMsg('')
            setUserFullName(fullName)
            // sendLinkToEmailForVerify()
            setSuccessMsg('Registration Success.')
            history.push(redirect_url)
        })
        .finally(() => {
            setIsLoading(false)
        })
        .catch(error => {
            const errMsg = error.message
            if(errMsg) {
                setErrorMsg("Registration Error!!! - " + errMsg)
            }
        })
    }
    
    return (
        <div className="App register-form-container">
            <Container fluid="md">
                <Row>
                    <Col md={3} lg={3}></Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="form mt-5">
                            <h2 style={{ color: "#25304c", padding: "10px" }}>Registration Form:</h2>
                            <div className="register-form p-3 text-white">
                                <span className="text-success fw-bold">{successMsg}</span>
                                <span className="text-danger fw-bold">{errorMsg}</span>
                                <Form onSubmit={handleCustomRegistrationProcess} className="mt-4">
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                                    <Form.Label column sm="3">
                                        Full Name
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control onBlur={handleNameValue} type="text" placeholder="Full name" required />
                                    </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="3">
                                        Email
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control onBlur={handleEmailValue} type="email" placeholder="Email" required />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="3">
                                        Password
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control onBlur={handlePasswordValue} type="password" placeholder="Password" required />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formBasicAlreadyResisterCheckbox">
                                        <Form.Label column sm="2">
                                        </Form.Label>
                                        <Col sm="8">
                                        Already an account? &nbsp;
                                        <span className="d-inline-block ml-0">
                                            <Link to="/login"> Please login</Link>
                                        </span>
                                        </Col>
                                    </Form.Group>

                                    <Button className="ml-auto register-btn" type="submit">
                                        Register
                                    </Button>
                                    {/* <Button className="ml-auto" variant="primary" type="submit">
                                    Register
                                    </Button> */}

                                </Form>
                                <div className="social-media">
                                <hr />
                                    <h5>Or, use one of these options</h5>
                                    <Button className="btn btn-danger mt-2 text-light fw-bold"><FontAwesomeIcon icon={['fab', 'google']} /></Button>&nbsp;&nbsp;
                                    <Button className="btn btn-primary mt-2 text-light fw-bold"><FontAwesomeIcon icon={['fab', 'facebook']} /></Button>&nbsp;&nbsp;
                                    <Button className="btn btn-dark mt-2 text-light fw-bold"><FontAwesomeIcon icon={['fab', 'github']} /></Button>&nbsp;&nbsp;
                                    <Button className="btn btn-info mt-2 text-light fw-bold"><FontAwesomeIcon icon={['fab', 'twitter']} /></Button>&nbsp;&nbsp;
                                    <Button className="btn btn-success mt-2 text-light fw-bold"><FontAwesomeIcon icon={['fab', 'microsoft']} /></Button>&nbsp;&nbsp;
                                    <Button className="btn btn-dark mt-2 text-light fw-bold"><FontAwesomeIcon icon={['fab', 'apple']} /></Button>&nbsp;&nbsp;
                                </div>
                                </div>
                        </div>
                    </Col>
                    <Col md={3} lg={3}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Registration;