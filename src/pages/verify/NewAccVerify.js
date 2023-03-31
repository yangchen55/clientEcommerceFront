import React, { useEffect, useState, useRef } from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { postEmailVerification } from "../../helper/axios";
import LoginRegisterLayout from "../layout/LoginRegisterLayout";
import Login from "../login/Login";



const initalState = {
  status: "default"
}
export const NewAccVerify = () => {
  // call the api with the code and email
  // show the message if verified or not

  let [searchParams] = useSearchParams();
  const [response, setResponse] = useState(initalState);
  const isFetch = useRef(true);

  useEffect(() => {
    const emailVerificationCode = searchParams.get("c");
    const email = searchParams.get("email");
    //call the api
    email && emailVerificationCode && callAPi({ email, emailVerificationCode });
    isFetch.current = false;
  }, [searchParams]);

  const callAPi = async (obj) => {
    if (isFetch.current) {
      const response = await postEmailVerification(obj);
      setResponse(response);
    }
  };
  console.log(response)

  return (
    <>
      <LoginRegisterLayout />


      <div className="main p-2 d-flex justify-content-center align-items-center">
        {response?.message ? (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        ) : response?.status === "default" ? (
          <div></div>
        ) : (
          <Spinner animation="border" variant="primary" className="fs-1" />
        )}
      </div>
      <br></br>
      <p className="text-center">

        {response && response.status === "success" && (
          <Link to="/login" className="mt-3">
            Go to Login
          </Link>
        )}
      </p>






    </>
  );
};
