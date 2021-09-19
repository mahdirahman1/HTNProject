import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

const FormGroup = styled(Form.Group)`
  margin: 1rem;
`;

const FormWrapper = styled.div`
  margin: 4rem 20%;
`;

const EventForm = () => {
  const [eventName, seteventName] = useState("");
  const [eventType, seteventType] = useState("");
  const [eventDate, seteventDate] = useState("");
  const [eventAccess, seteventAccess] = useState("");
  const [eventdesc, seteventdesc] = useState("");
  const dispatch = useDispatch();

  const handleEventNameChange = (e) => {
    seteventName(e.target.value);
  };
  const handleEventTypeChange = (e) => {
    seteventType(e.target.value);
  };
  const handleEventDateChange = (e) => {
    seteventDate(e.target.value);
  };
  const handleEventAccessChange = (e) => {
    seteventAccess(e.target.value);
  };
  const handleEventDescriptionChange = (e) => {
    seteventdesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: 222,
      event: eventName,
      date: new Date(eventDate),
      time: "6pm",
      attendees: 100,
      description: eventdesc,
    };
    console.log(newEvent);
    dispatch({ type: "ADD_ITEM", payload: newEvent });
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Form.Label style={{ color: "white" }}>Event name: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter event name"
            value={eventName}
            onChange={handleEventNameChange}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label style={{ color: "white" }}>
            Event description:{" "}
          </Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter event description"
            value={eventdesc}
            onChange={handleEventDescriptionChange}
            style={{ height: "100px" }}
          />
        </FormGroup>

        <FormGroup>
          <Form.Label style={{ color: "white" }}>Type of event: </Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={eventType}
            onChange={handleEventTypeChange}
          >
            <option value="wedding">Wedding</option>
            <option value="concert">Concert</option>
            <option value="birthdayParty">Birthday Party</option>
            <option value="techConference">Tech Conference</option>
            <option value="seminarOrTalk">Seminar/Talk</option>
            <option value="sports">Sports game</option>
            <option value="dinnerOrGala">Dinner/Gala</option>
            <option value="touristAttraction">Tourist Attraction</option>
            <option value="other">Other</option>
          </Form.Select>
        </FormGroup>

        <FormGroup>
          <Form.Label style={{ color: "white" }}>Event date: </Form.Label>
          <Form.Control
            type="date"
            value={eventDate}
            onChange={handleEventDateChange}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          {["radio"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                type="radio"
                id="public"
                label="Public"
                name="access"
                value="public"
                onChange={handleEventAccessChange}
              />
              <Form.Check
                type="radio"
                id="private"
                label="Private"
                name="access"
                value="private"
                onChange={handleEventAccessChange}
              />
            </div>
          ))}
        </FormGroup>

        <FormGroup>
          <Button style={{ width: "100%" }} variant="primary" type="submit">
            Create Event
          </Button>
        </FormGroup>
      </Form>
    </FormWrapper>
  );
};

export default EventForm;
