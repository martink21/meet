import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: ''
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
     if (number < 0 || number > 32) {
      return this.setState({
        infoText: 'Please enter a number between 1 and 32',
        numberOfEvents: '0'  
      })
    }
    else {
    this.setState({
      numberOfEvents: number,
      infoText: ''
    });
    this.props.updateNumberOfEvents(event.target.value);
    }
  }

  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.infoText} />
        <form>
          <label htmlFor="fname"> Number of Events:</label>
          <input
            type="text"
            className="EventsNumber"
            value={this.props.numberOfEvents}
            onChange={(e) => this.handleInputChanged(e)}
          />
        </form>
      </div>
    );
  }
}
export default NumberOfEvents;