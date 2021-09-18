import React, {useState} from "react";
import Subcomponent from "../Subcomponent";
import { Route, Switch } from "react-router-dom";


const DUMMY_EVENTS = [
  {id: 'e1', event: "event420dynamic", time: "5 AM", date: new Date(2021, 1, 29), attendees: 1203},
  {id: 'e2', event: "event69dynamic", time: "12 PM", date: new Date(3002, 8, 2), attendees: 456},
  {id: 'e3', event: "loltestdynamic", time: "3 PM", date: new Date(1834, 6, 18), attendees: 10293},
];

const AllEvents = (props) => {
  return(
  <div className="" style={{ color: "white" }}>
    <h1>Current events</h1>
    <h2>This is a simple list of items</h2>
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
