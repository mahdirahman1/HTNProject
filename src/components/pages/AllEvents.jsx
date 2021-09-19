import React, { useState } from "react";
import Subcomponent from "../Subcomponent";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Switch, Link } from "react-router-dom";
import Event from "./Event";
import {BrowserRouter as Router} from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    event: "Google I/O",
    time: "5 AM",
    date: new Date(2021, 1, 29),
    attendees: 1203,
    description: "lorem"
  },
  {
    id: "e2",
    event: "Travis Scott Concert",
    time: "12 PM",
    date: new Date(3002, 8, 2),
    attendees: 4550,
    description: "lorem ipsum"
  },
  {
    id: "e3",
    event: "Eve's Birthday Party",
    time: "3 PM",
    date: new Date(1834, 6, 18),
    attendees: 103,
    description: "lorem ipsum lorem"
  },
  {
    id: "e4",
    event: "random1",
    time: "3 PM",
    date: new Date(1834, 6, 18),
    attendees: 103,
    description: "lorem ipsum lorem lorem"
  },
  {
    id: "e5",
    event: "random",
    time: "3 PM",
    date: new Date(1834, 6, 18),
    attendees: 103,
    description: "lorem ipsum lorem lorem lorem"
  },
  {
    id: "e6",
    event: "random",
    time: "3 PM",
    date: new Date(1834, 6, 18),
    attendees: 103,
    description: "lorem ipsum lorem lorem lorem lorem"
  },
];

const Wrapper = styled.div`
  margin: 4% 10%;
`;

const AllEvents = (props) => {
  return (
    <Router>
      <Wrapper>
        <div className="" style={{ color: "white" }}>
          <h1 style={{ textAlign: "center", margin: "3rem" }}>
            Current events to join
          </h1>
          <Container>
            <Row>
              {DUMMY_EVENTS.map((currentEvent) => (
                <Col xl={4} lg={6} md={6}>
                  <Link to={'/events/' + currentEvent.id} style={{textDecoration: "none"}}><Subcomponent
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
                  /></Link>
                </Col>
              ))}
            </Row>
              <Route exact path="/events/:id" render={({match}) => (
                <Event event={DUMMY_EVENTS.find(p => p.id === match.params.id)}/>
              )} />
          </Container>
        </div>
      </Wrapper>
    </Router>

  );
};

export default AllEvents;
