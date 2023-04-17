import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { updateProfileAction } from '../login/authAction';
import { useDispatch } from "react-redux";

const EditProfilePage = ({ onCancel, user }) => {
    const dispatch = useDispatch()
    const [formDt, setFormDt] = useState({});


    useEffect(() => {
        setFormDt(user)
    }, [user])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormDt({
            ...formDt,
            [name]: value,
        });



    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { _id, ...rest } = formDt;
        console.log(_id, rest, "ahndfkj")
        // handle form submission
        dispatch(updateProfileAction({ _id, rest }))
    };






    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" className="form-control" id="firstName" name="fName" value={formDt.fName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" className="form-control" id="lastName" name="lName" value={formDt.lName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange} />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" className="form-control" id="phone" name="phone" value={formDt.phone} onChange={handleChange} />
                </div>
                <Button variant="primary" type="submit" className='m-3'>Save</Button>
                <Button variant="secondary" onClick={onCancel}>Cancel</Button>
            </Form>

        </div>
    )
}

export default EditProfilePage