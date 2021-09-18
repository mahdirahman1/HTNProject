import React from 'react';
import Subcomponent from './Subcomponent';

const Join = (props) => (
  <div className=''>
    <h1>Current events</h1>  
    <Subcomponent event={'event420'} time={"5 AM"} date={'Sep 18 2021'} attendees={123}></Subcomponent>
    <Subcomponent event={'event69'} time={"12 PM"}date={'Dec 25 3012'} attendees={456} ></Subcomponent>
    <Subcomponent event={'loltest'} time={"8 PM"}date={'Jan 10 1765'} attendees={456}></Subcomponent>
  </div>
)

export default Join;
