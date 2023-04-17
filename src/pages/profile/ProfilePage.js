import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { autoLogin } from '../login/authAction';
import { Table, Form, Container, Row, Button } from 'react-bootstrap';
import { GlobalMsg } from '../layout/GlobalMsg';
import { Header } from '../layout/Header';
import NavHead from '../layout/NavHead';
import { Footer } from '../layout/Footer';
import EditProfilePage from './EditProfilePage';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user)
    console.log(user, " iam from profiile page")

    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    useEffect(() => {
        dispatch(autoLogin())
    }, [dispatch])



    return (
        <>

            <Container className="mainPage">
                <div className="table-container mt-3">
                    <h1 className='fw text-center'>  Details</h1>
                    <hr></hr>
                    {isEditing ? (
                        <EditProfilePage onCancel={handleCancel} user={user} />
                    ) : (

                        <Form onSubmit={handleEdit}>
                            <Table className="custohgjkm-table mt-5">
                                <tbody>
                                    <tr>
                                        <th>Name:</th>
                                        <td>{user.fName} {user.lName}</td>
                                    </tr>
                                    <tr>
                                        <th>Email:</th>
                                        <td>{user.email}</td>
                                    </tr>
                                    <tr>
                                        <th>Phone:</th>
                                        <td>{user.phone}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex justify-content-start">
                                            <Button className="mt-3" variant="warning" type='submit'>Edit</Button>
                                        </td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Form>
                    )}

                </div>


            </Container>


        </>
    )
}

export default ProfilePage