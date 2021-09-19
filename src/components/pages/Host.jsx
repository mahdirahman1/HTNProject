import React from "react";
import styled from "styled-components";
import EventForm from "../forms/EventForm";

const Wrapper = styled.div`
  margin: 4% 10%;
`;

const Host = (props) => (
  <Wrapper>
    <div className="" style={{ color: "white" }}>
      <h1 style={{ textAlign: "center" }}>Host an event</h1>
      <EventForm />
    </div>
  </Wrapper>
);

export default Host;
