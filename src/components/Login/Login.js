import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useHistory, useLocation } from 'react-router'
import { Col, Container, Form, Row, Button, Image, NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './Login.css'
import useAuth from '../../Hooks/useAuth';

library.add(fab);


const Login = () => {
    // const {signInUsingGoogle, user, errorMsg} = useFirebase() // 1st option
    const {signInUsingGoogle, customSignInProcess, user, setUser, setIsLoading, successMsg, setSuccessMsg, errorMsg, setErrorMsg, forgotPassword} = useAuth() // 2nd option

    const location = useLocation()
    // console.log(location.state?.from);
    const history = useHistory()
    const redirect_url = location.state?.from || '/login'; 

    const handleSingInUsingGoogle = () => {
        setIsLoading(true)
        signInUsingGoogle()
        .then((result) => {
            // console.log(result);
            setUser(result.user);
            history.push(redirect_url)
        })
        .finally(() => {
            setIsLoading(false)
        })
        .catch((error) => {
            setErrorMsg(error.message);
        })
    }

    // Custom login form using firebase ...
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailValue = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordValue = (e) => {
        setPassword(e.target.value)
    }

    const handleCustomLoginProcess = (e) => {
        e.preventDefault();
        customSignInProcess(email, password)
        .then((userCredential) => {
            const {displayName, email, photoURL} = userCredential.user;
            // const customLoggedInUser = {
            // fullName: displayName,
            // email: email,
            // image: photoURL
            // }
            setErrorMsg('')
            setSuccessMsg('') 
            setSuccessMsg('You are successfully logged In...')
            history.push(redirect_url)
    
        })
        .catch(error => {
            const errMsg = error.message
            // console.log(errMsg);
            if(errMsg) {
            setSuccessMsg('') 
            setErrorMsg("Sign-in Error!!! - " + errMsg)
            }
        })
    }

    // Password reset link send to email addresses ...
    const handleForgotPassword = () => {
        forgotPassword(email)
        .then(() => {
            setSuccessMsg('Reset password link has been sent.')
        })
    }

    return (
        <div className="App login-form-container">
            <Container fluid="md">
                <Row>
                    <Col md={3} lg={3}></Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="form mt-5">
                            <h2 style={{ color: "#25304c", padding: "10px" }}>Login Form:</h2>
                            <div className="login-form p-3 text-light">
                                <span className="text-success fw-bold">{successMsg}</span>
                                <span className="text-danger fw-bold">{errorMsg}</span>
                                <Form onSubmit={handleCustomLoginProcess} className="mt-4">
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
                                    <Form.Group as={Row} className="mb-3" controlId="formBasicRememberMeCheckbox">
                                        <Form.Label column sm="3">
                                        </Form.Label>
                                        <Col sm="5">
                                        <Form.Check type="checkbox" label="Remember me" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formBasicAlreadyResisterCheckbox">
                                        <Form.Label column sm="2">
                                        </Form.Label>
                                        <Col sm="8">
                                        Forgot Password?&nbsp;
                                        <span className="d-inline-block ml-0">
                                            <Link onClick={handleForgotPassword}> Click Here</Link>
                                        </span>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formBasicAlreadyResisterCheckbox">
                                        <Form.Label column sm="2">
                                        </Form.Label>
                                        <Col sm="8">
                                        Create an account?&nbsp;
                                        <span className="d-inline-block ml-0">
                                            <Link to="/registration"> Click here
                                            </Link>
                                        </span>
                                        </Col>
                                    </Form.Group>

                                    <Button className="ml-auto login-btn" type="submit">
                                        Login
                                    </Button>

                                </Form>
                                <div className="social-media">
                                <hr />
                                    <h5>Or, use one of these options</h5>
                                    <Button onClick={handleSingInUsingGoogle} className="btn btn-danger mt-2 text-light fw-bold"><FontAwesomeIcon icon={['fab', 'google']} /></Button>&nbsp;&nbsp;
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

export default Login;