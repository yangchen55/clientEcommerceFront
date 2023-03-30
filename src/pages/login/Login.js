import React, { Children, useEffect, useRef } from "react";
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import LoginRegisterLayout from '../layout/LoginRegisterLayout'
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./authAction";
import { useLocation, useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { requestSuccess } from "./authSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emailRef = useRef("");
    const passRef = useRef("");
    const location = useLocation();
    const { isLoading, user, notRegisteredUser } = useSelector((state) => state.user);

    const origin = location?.state?.from?.pathname || "/dashboard";
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const formDt = {
            email: emailRef.current.value,
            password: passRef.current.value,
        };
        if (!formDt.email || !formDt.password) {
            return alert("Please fill in both the fields!");
        }

        // disptach login action to call api
        dispatch(loginAction(formDt));

        console.log(notRegisteredUser)
    }
    useEffect(() => {
        if (notRegisteredUser?.email) {
            navigate("/register")
        } else {

            // user?._id ? navigate(origin) : navigate("/login")
            user?._id ? navigate("/") && dispatch(requestSuccess({})) : navigate("/login")
        }
    }, [notRegisteredUser, dispatch, user?._id, origin, navigate])



    return (

        <div>
            {/* <LoginRegisterLayout /> */}
            <Container className="mt-2">
                <Row className="justify-content-center">
                    <Col sm={12} md={8} lg={5}>
                        <Form
                            onSubmit={handleOnSubmit}
                            className="p-5 rounded shadow-lg" >
                            <h3 className="text-center"> Sign IN or UP </h3>
                            <small><em>Please enter email address to login or sign up</em></small>
                            <br></br>new user?<a href="/register">Register</a>
                            <hr />
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    ref={emailRef}
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    ref={passRef}
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                            </Form.Group>
                            <Button variant="success" style={{ width: '100%' }} type="submit">
                                {isLoading ? (
                                    <Spinner variant="dark" animation="border" />
                                ) : (
                                    " Submit"
                                )}
                            </Button>
                            <div className="mt-2 text-end">
                                Forget password? <a href="/reset-password">Reset now</a>
                            </div>

                        </Form>
                    </Col>
                </Row>

                <p className="mt-5 text-center">View our privacy policy, collection notice and terms and conditions to understand how we use your personal information</p>
            </Container>

        </div>
    )
}

export default Login