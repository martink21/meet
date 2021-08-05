import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged(event) {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
    this.props.updateNumberOfEvents(event.target.value);
  }

  render() {
    return (
      <div className="numberOfEvents">
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