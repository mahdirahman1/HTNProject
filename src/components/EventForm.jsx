import React, {useState} from 'react';

// const EventForm = (props) => (

//     const [state, setstate] = useState(initialState);

//     <div>
//     <p>EVENT FORM (type of event i.e. wedding or concert, name, date, time, location, private or public)</p>
//     </div>
// )

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
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Event name: </label>
                    <input type="text" value={this.state.eventName} onChange={this.handleEventNameChange}></input>
                </div>

                <div>
                    <label>Type of event: </label>
                    <select value={this.state.eventType} onChange={this.handleEventTypeChange}>
                        <option value="wedding">Wedding</option>
                        <option value="concert">Concert</option>
                        <option value="funeral">Funeral</option>
                    </select>
                </div>

                <div>
                    <label>Date of event: </label>
                    <input type="date" value={this.state.eventDate} onChange={this.handleEventDateChange}></input>
                </div>

                <div>
                      <input type="radio" id="public" name="access" value="public" onChange={this.handleEventAccessChange}/>
                      <label for="public">Public</label>

                      <input type="radio" id="private" name="access" value="private" onChange={this.handleEventAccessChange}/>
                      <label for="private">Private</label>
                </div>


                <button type="submit">Create Event</button>
            </form>
        )
    }

}
export default EventForm;
