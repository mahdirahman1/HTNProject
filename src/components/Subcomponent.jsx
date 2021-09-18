import React from 'react';

const Subcomponent = (props) => (
  <div className='subcomponent'>
    <p><strong>{props.event}</strong></p>
    <p>{props.date} at {props.time}</p>
    <p>{props.attendees} people attending</p>
  </div>
)

export default Subcomponent;
