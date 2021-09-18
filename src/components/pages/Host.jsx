import React from 'react';
// import Subcomponent from './Subcomponent';

const Host = (props) => (
  <div className='' style={{ color: 'white' }}>
      <h1>HOST AN EVENT LOL (type of event i.e. wedding or concert, name, date, time, location, private or public)</h1>
      <form>
            <label>Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
       </form>
  </div>
)

export default Host;
