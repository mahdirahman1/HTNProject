import React, {useState} from "react";
import Subcomponent from "../Subcomponent";
import { Route, Switch } from "react-router-dom";

const DUMMY_EVENTS = [
  {id: 'e1', event: "Google I/O", time: "5 AM", date: new Date(2021, 1, 29), attendees: 1203},
  {id: 'e2', event: "Travis Scott Concert", time: "12 PM", date: new Date(3002, 8, 2), attendees: 4550},
  {id: 'e3', event: "Eve's Birthday Party", time: "3 PM", date: new Date(1834, 6, 18), attendees: 103},
];

const AllEvents = (props) => {
  return(
  <div className="" style={{ color: "white"}}>
    <h1 style={{textAlign: 'center'}}>Current events to join</h1>
    <div>
      {
        DUMMY_EVENTS.map((currentEvent) => <Subcomponent
          event={currentEvent.event}
          time={currentEvent.time}
          date={currentEvent.date.toLocaleString('en-US', {month: 'long'}) + " " + currentEvent.date.toLocaleString('en-US', {day: '2-digit'}) + ", " + currentEvent.date.getFullYear()}
          attendees={currentEvent.attendees}
        />)
      }
    </div>
  </div>)
};

export default AllEvents;
