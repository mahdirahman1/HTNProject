import React, { useState } from "react";
import Subcomponent from "../Subcomponent";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Switch, Link } from "react-router-dom";
import Event from "./Event";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  margin: 4% 10%;
`;

const AllEvents = (props) => {
  const DUMMY_EVENTS = useSelector((state) => state.items.data);
  const [events, setEvents] = useState(DUMMY_EVENTS);
  const addNewEventHandler = (event) => {
    setEvents((prevEvents) => {
      return [event, ...prevEvents];
    });
  };

  return (
    <Router>
      <Wrapper>
        <div className="" style={{ color: "white" }}>
          <h1 style={{ textAlign: "center", margin: "3rem" }}>
            Current events to join
          </h1>
          {/* <Host/> */}
          <Container>
            <Row>
              {events.map((currentEvent) => (
                <Col xl={4} lg={6} md={6}>
                  <Link
                    to={"/events/" + currentEvent.id}
                    style={{ textDecoration: "none" }}
                  >
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
                  </Link>
                </Col>
              ))}
            </Row>
            <Route
              exact
              path="/events/:id"
              render={({ match }) => (
                <Event event={events.find((p) => p.id === match.params.id)} />
              )}
            />
          </Container>
        </div>
      </Wrapper>
    </Router>
  );
};

export default AllEvents;
