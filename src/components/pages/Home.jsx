import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  margin: 10rem 0;
`;

const StyledButton = styled.button`
  margin: 4rem;
  font-size: 2rem;
  width: 15rem;
  padding: 1rem;
  border-radius: 1.5rem;
  border: none;
  color: red;
  cursor: pointer;
`;

const Home = (props) => {
  return (
    <Wrapper>
      <Title>VenueBrite</Title>
      <ButtonWrapper>
        {/* <StyledButton>Host Event</StyledButton> */}
        {/* <StyledButton>Join Event</StyledButton> */}
        <StyledButton>
          <Link style={{ textDecoration: "none", color: "red" }} to={"/host"}>
            Host Event
          </Link>
        </StyledButton>
        <StyledButton>
          <Link style={{ textDecoration: "none", color: "red" }} to={"/events"}>
            Join Event
          </Link>
        </StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Home;
