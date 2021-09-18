import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormGroup = styled(Form.Group)`
  margin: 1rem;
`;

const SignupForm = () => {
  return (
    <Form>
      <FormGroup>
        <Form.Label style={{ color: "white" }}>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your nanme" />
      </FormGroup>
      <FormGroup>
        <Form.Label style={{ color: "white" }}>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </FormGroup>
      <FormGroup>
        <Form.Label style={{ color: "white" }}>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your your password" />
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
