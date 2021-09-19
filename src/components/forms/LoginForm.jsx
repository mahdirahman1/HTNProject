import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const FormGroup = styled(Form.Group)`
  margin: 1rem;
`;

const LoginForm = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitHandler = () => {};

  const onChangeHandlePassword = (e) => {
    setpassword(e.target.value);
  };
  const onChangeHandleEmail = (e) => {
    setemail(e.target.value);
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Form.Label style={{ color: "white" }}>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          onChange={onChangeHandleEmail}
        />
      </FormGroup>
      <FormGroup>
        <Form.Label style={{ color: "white" }}>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your your password"
          onChange={onChangeHandlePassword}
        />
      </FormGroup>
      <FormGroup>
        <Link to={"/events"}>
          <Button style={{ width: "100%" }} variant="primary" type="submit">
            Login
          </Button>
        </Link>
      </FormGroup>
    </Form>
  );
};

export default LoginForm;
