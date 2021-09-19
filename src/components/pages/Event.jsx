import React from "react";
import styled from "styled-components";
import { Route, Switch, Link, withRouter } from "react-router-dom";

const Wrapper = styled.div`
  margin: 4% 10%;
`;

const Event = (props) => {
    console.warn(props);
    return (
        <Wrapper>
            <div className="" style={{ color: "white" }}>
            {/* <h1 style={{ textAlign: "center" }}>THSI IS THE {props.match.params.id} EVENT </h1> */}
            <h1 style={{ textAlign: "center" }}>{props.event.event}</h1>
            <h3 style={{ textAlign: "center" }}> {props.event.date.toLocaleString('en-US', {month: 'long'}) + " " + props.event.date.toLocaleString("en-US", {day: "2-digit"}) + ", " + props.event.date.getFullYear()} at {props.event.time}</h3>
            <h4 style={{ textAlign: "center" }}> {props.event.description}</h4>
            <h4 style={{ textAlign: "center", color: 'red' }}> {props.event.attendees} people attending</h4>
            </div>
        </Wrapper>)
};

export default withRouter(Event);
