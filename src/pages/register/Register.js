import React, { useState } from "react"
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import LoginRegisterLayout from '../layout/LoginRegisterLayout'
import { toast } from "react-toastify"
import { CustomeInputeField } from "../../components/custom-input-field/CustomeInputeField"
import { registerNewUser } from "../../helper/axios"
import { Alert, Spinner } from "react-bootstrap";



const Register = () => {
    const [response, setResponse] = useState(true);
    const inputes = [
        {
            label: "First Name",
            type: "text",
            name: "fName",
            placeholder: "Sam",
            required: true,
        },
        {
            label: "Last Name",
            type: "text",
            name: "lName",
            placeholder: "Smith",
            required: true,
        },
        {
            label: "Phone",
            type: "number",
            name: "phone",
            placeholder: "02345",
        },

        {
            label: "Email",
            type: "email",
            name: "email",
            placeholder: "Smith@email.com",
            required: true,
        },
        {
            label: "Password",
            type: "password",
            name: "password",
            placeholder: "********",
            required: true,
        },
        {
            label: "Confirm Password",
            type: "password",
            name: "confirmPassword",
            placeholder: "********",
            required: true,
        },
    ]
    const [form, setForm] = useState({})
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const { confirmPassword, ...rest } = form
        if (confirmPassword !== rest.password) {
            toast.error("Password and confirm password do not match!")
        }
        const pending = registerNewUser(rest)
        toast.promise(pending, { pending: "Please wait ...." });

        const { status, message, link } = await pending;


        toast[status](
            <div>
                {message}
                <br />
                <a href={link} target="_blank">{link}</a>
            </div>,
            {
                autoClose: false,
                closeOnClick: false,
            }
        );



    }
    return (
        <div>
            <LoginRegisterLayout />
            <Container className="mt-4">
                <Row className="justify-content-center">
                    <Col sm={12} md={8} lg={5}>

                        <Form
                            onSubmit={handleOnSubmit}
                            className="p-5 rounded shadow-lg" >
                            <h3 className="text-center">Register </h3>

                            <em>I already have an account ?<a href="/login">Login</a> </em>
                            <hr />
                            {inputes.map((item, i) => (
                                <CustomeInputeField key={i} {...item} onChange={handleOnChange} style={{ width: '100%' }} />
                            ))}
                            <Button variant="danger" style={{ width: '100%' }} type="submit">
                                verify acccount

                            </Button>
                        </Form>

                    </Col>

                </Row>

                <p className="mt-5 text-center">Adhered to Feminal Policy</p>
            </Container>



        </div >
    )
}

export default Register