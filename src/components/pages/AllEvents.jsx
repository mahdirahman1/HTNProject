import React, { useState } from "react";
import Subcomponent from "../Subcomponent";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Switch } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    event: "Google I/O",
    time: "5 AM",
    date: new Date(2021, 1, 29),
    attendees: 1203,
  },
  {
    id: "e2",
    event: "Travis Scott Concert",
    time: "12 PM",
    date: new Date(3002, 8, 2),
    attendees: 4550,
  },
  {
    id: "e3",
    event: "Eve's Birthday Party",
    time: "3 PM",
    date: new Date(1834, 6, 18),
    attendees: 103,
  },
];

const Wrapper = styled.div`
  margin: 4% 10%;
`;

const AllEvents = (props) => {
  return (
    <Wrapper>
      <div className="" style={{ color: "white" }}>
        <h1 style={{ textAlign: "center", margin: "3rem" }}>
          Current events to join
        </h1>
        <Container>
          <Row>
            {DUMMY_EVENTS.map((currentEvent) => (
              <Col xl={4} lg={6} md={6}>
                <Subcomponent
                  event={currentEvent.event}
                  time={currentEvent.time}
                  date={
                    currentEvent.date.toLocaleString("en-US", {
                      month: "long",
                    }) +
                    " " +
                    currentEvent.date.toLocaleString("en-US", {
                      day: "2-digit",
                    }) +
                    ", " +
                    currentEvent.date.getFullYear()
                  }
                  attendees={currentEvent.attendees}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Wrapper>
  );
};

export default AllEvents;
