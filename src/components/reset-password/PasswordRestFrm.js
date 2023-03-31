import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomeInputeField } from "../custom-input-field/CustomeInputeField";


export const PasswordRestFrm = ({ handleOnPasswordReset }) => {
  const [frmDt, setFormDt] = useState({});
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setError("");
      value.length < 6 && setError("Minimum lenght 6 char is required");
      !/[0-9]/.test(value) && setError("Number is required");
      !/[A-Z]/.test(value) && setError("Upper case is required");
      !/[a-z]/.test(value) && setError("Lower case is required");
    }

    setFormDt({
      ...frmDt,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnPasswordReset(frmDt);
  };

  const inputes = [
    {
      label: "OTP",
      type: "number",
      name: "otp",
      placeholder: "34567",
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
  ];
  return (
    <>
      <Form onSubmit={handleOnSubmit} className="border p-4 rounded shadow-lg">
        <h3>Reset new password </h3>
        <hr />

        {inputes.map((item, i) => (
          <CustomeInputeField key={i} {...item} onChange={handleOnChange} />
        ))}
        <Form.Group>
          <Form.Text className="mb-5">
            Your password must have atleast 6 charater long and one number,
            upper case and lower case
          </Form.Text>
        </Form.Group>

        <div className="text-danger mt-3 fw-bolder"> {error}</div>

        <div className="d-grid mt-5">
          <Button variant="primary" type="submit" disabled={error}>
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};
