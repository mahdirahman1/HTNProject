import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormGroup = styled(Form.Group)`
  margin: 1rem;
`;

const SignupForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitHandler = () => {
    alert(`${email} ${password}`);
  };

  const onChangeHandlePassword = (e) => {
    setpassword(e.target.value);
  };
  const onChangeHandleEmail = (e) => {
    setemail(e.target.value);
  };
  const onChangeHandleName = (e) => {
    setname(e.target.value);
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Form.Label style={{ color: "white" }}>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your nanme"
          onChange={onChangeHandleName}
        />
      </FormGroup>
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
        <Button style={{ width: "100%" }} variant="primary" type="submit">
          Sign Up
        </Button>
      </FormGroup>
    </Form>
  );
};

export default SignupForm;
