import React from 'react';
// import styled from "styled-components";
// import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

const Subcomponent = (props) => (
  <div className=''>
    <Card border="primary" style={{ width: '18rem', color: 'black' }}>
      {/* <Card.Header>{props.event}</Card.Header> */}
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold', fontSize: '25px'}}>{props.event}</Card.Title>
        <Card.Text style={{fontSize: '15px'}}>{props.date} at {props.time}</Card.Text>
        <Card.Text style={{color: 'blue', fontSize: '15px'}}>{props.attendees} people attending</Card.Text>
      </Card.Body>
    </Card>
  </div>
  )

export default Subcomponent;
