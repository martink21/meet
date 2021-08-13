import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: ''
  };

  handleInputChanged(event) {
    const value = event.target.value;
    this.props.updateNumberOfEvents(event.target.value);
    
    if (event.target.value > 32) {
      this.setState({
        infoText: 'Please enter a number between 1 and 32'
      })
    }
    else {
    return this.setState({
      numberOfEvents: value,
    });
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