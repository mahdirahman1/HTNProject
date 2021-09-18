import React, {useState} from 'react';
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormGroup = styled(Form.Group)`
  margin: 1rem;
`;

class EventForm extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            eventName: '',
            eventType: '',
            eventDate: '',
            eventAccess: ''
        }
    }

    handleEventNameChange = (e) => {
        this.setState({eventName: e.target.value});
    }
    handleEventTypeChange = (e) => {
        this.setState({eventType: e.target.value});
    }
    handleEventDateChange = (e) => {
        this.setState({eventDate: e.target.value})
    }
    handleEventAccessChange = (e) => {
        this.setState({eventAccess: e.target.value})
    }

    handleSubmit = (e) => {
        alert(`${this.state.eventName} ${this.state.eventType} ${this.state.eventDate} ${this.state.eventAccess}`)
        e.preventDefault();
    }

    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Form.Label style={{ color: "white" }}>Event name: </Form.Label>
                    <Form.Control type="text" placeholder="Enter event name" value={this.state.eventName} onChange={this.handleEventNameChange}></Form.Control>
                </FormGroup>

                <FormGroup>
                    <Form.Label style={{ color: "white" }}>Type of event: </Form.Label>
                    <Form.Select aria-label="Default select example" value={this.state.eventType} onChange={this.handleEventTypeChange}>
                        <option value="wedding">Wedding</option>
                        <option value="concert">Concert</option>
                        <option value="funeral">Funeral</option>
                    </Form.Select>
                </FormGroup>

                <FormGroup>
                    <Form.Label style={{ color: "white" }}>Event date: </Form.Label>
                    <Form.Control type="date" value={this.state.eventDate} onChange={this.handleEventDateChange}></Form.Control>
                </FormGroup>

                <FormGroup>
                    {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                        type="radio" id="public" label="Public" name="access"  value="public" onChange={this.handleEventAccessChange}
                    />
                    <Form.Check 
                        type="radio" id="private" label="Private" name="access" value="private" onChange={this.handleEventAccessChange}
                    />
                    </div>
                ))}
                </FormGroup>

                <FormGroup>
                    <Button style={{ width: "100%" }} variant="primary" type="submit">Create Event</Button>
                </FormGroup>
            </Form>
        )
    }

}
export default EventForm;
