import React from "react";
import styled from "styled-components";
import EventForm from "../forms/EventForm";

const Wrapper = styled.div`
  margin: 4% 10%;
`;

const saveDataHandler = (enteredData) => {
  const newData = {
    ...enteredData,
    id: Math.random().toString()
  }
  props.onAddEvent(newData); //this onAddEvent prop is supposed to be for a Host component that was made in the same file as the dummy data array.
}

const Host = (props) => (
  <Wrapper>
    <div className="" style={{ color: "white" }}>
      <h1 style={{ textAlign: "center" }}>Host an event</h1>
      <EventForm onSaveData={saveDataHandler}/>
    </div>
  </Wrapper>
);

export default Host;
