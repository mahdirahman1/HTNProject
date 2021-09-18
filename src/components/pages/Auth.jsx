import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";

const Wrapper = styled.div`
  margin: 5% 10%;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 4.5rem;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 5% 0;
`;

const StyledButton = styled.button`
  margin: 1rem 0.5rem;
  font-size: 2rem;
  padding: 1rem;
  width: 15rem;
  border: none;
  color: ${(props) => (props.option == props.number ? "red" : "white")};
  cursor: pointer;
  border-bottom: 1px solid red;
  background: none;

  &:hover {
    color: red;
  }
`;

const FormWrapper = styled.div`
  margin: 5% 30%;
`;

const Auth = (props) => {
  //1 for login, 2 for sign up
  const [option, setoption] = useState(1);

  return (
    <Wrapper>
      <Title>VenueBrite</Title>
      <ButtonWrapper>
        <StyledButton number={1} option={option} onClick={() => setoption(1)}>
          Log In
        </StyledButton>
        <StyledButton number={2} option={option} onClick={() => setoption(2)}>
          Sign Up
        </StyledButton>
      </ButtonWrapper>
      <FormWrapper>
        {option == 1 && <LoginForm />}
        {option == 2 && <SignupForm />}
      </FormWrapper>
    </Wrapper>
  );
};

export default Auth;
