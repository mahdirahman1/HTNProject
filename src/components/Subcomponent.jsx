import React from 'react';
// import styled from "styled-components";
// import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

const Subcomponent = (props) => (
  <div className=''>
    <Card style={{ border: '1px solid black', width: '18rem', color: '#070026', backgroundColor: '#BABDFF', textAlign: "center" }}>
      {/* <Card.Header>{props.event}</Card.Header> */}
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold', fontSize: '25px'}}>{props.event}</Card.Title>
        <Card.Text style={{fontSize: '15px'}}>{props.date} at {props.time}</Card.Text>
        <Card.Text style={{color: '#3721E8', fontSize: '15px'}}>{props.attendees} people attending</Card.Text>
      </Card.Body>
    </Card>
  </div>
  )

export default Subcomponent;
