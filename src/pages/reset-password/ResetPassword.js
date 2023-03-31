import React, { useState } from "react";

import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { toast } from "react-toastify";
import { Alert, Container, Col, Row } from "react-bootstrap";
import LoginRegisterLayout from "../layout/LoginRegisterLayout";
import { RequestOTP } from "../../components/request-otp/RequestOTP";
import { fetchOtpRequest, resetPassRequest } from "../../helper/axios";
import { PasswordRestFrm } from "../../components/reset-password/PasswordRestFrm";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState("otp");
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    const { value } = e.target;
    setEmail(value);

  };

  const handleOnOtpRequest = async (e) => {
    e.preventDefault();
    const pending = fetchOtpRequest({ email });
    toast.promise(pending, { pending: "Please wait ...." });

    const { status, message, link } = await pending;

    toast[status](<div>
      {message}
      <br />
      <a href={link} target="_blank">{link}</a>
    </div>,
      {
        autoClose: false,
        closeOnClick: false,
      }
    );
    setResponse({ status, message });
    status === "success" && setShowForm("reset");
    console.log(response)
  };

  const handleOnPasswordReset = async (data) => {
    console.log("sending plassword to reset ", data);
    const { confirmPassword, ...rest } = data;
    if (rest.password !== confirmPassword) {
      return toast.error("Password do not match");
    }
    const pending = resetPassRequest({ ...rest, email });
    toast.promise(pending, { pending: "please wait " })
    const { status, message, link } = await pending

    toast[status](<div>
      {message}
      <br />
      <a href={link} target="_blank">{link}</a>
    </div>,
      {
        autoClose: false,
        closeOnClick: false,
      }
    );
    setResponse({ status, message });
  };

  const forms = {
    otp: (
      <RequestOTP
        handleOnChange={handleOnChange}
        handleOnOtpRequest={handleOnOtpRequest}
      />
    ),

    reset: <PasswordRestFrm handleOnPasswordReset={handleOnPasswordReset} />,
  };
  return (
    <>
      <LoginRegisterLayout />
      <Container className="m-4 mainPage">
        <Row className="justify-content-center">
          {response.message && (
            <Alert variant={response.status === "success" ? "success" : "danger"}>
              {response.message}
            </Alert>
          )}
          <Col sm={12} md={8} lg={5}>
            {forms[showForm]}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ResetPassword;
