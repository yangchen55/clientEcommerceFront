import React from "react";
import { Button, Form } from "react-bootstrap";

export const RequestOTP = ({ handleOnChange, handleOnOtpRequest }) => {
  return (
    <>
      <Form
        className="border p-4 rounded shadow-lg"
        onSubmit={handleOnOtpRequest}>
        <h3 className="text-center">Request OTP!</h3>
        <p className="text-center"><em> please enter email address, OTP will be send to your email</em></p>
        <hr className="mb-5" />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          Request OTP
        </Button>
      </Form >
    </>
  );
};
