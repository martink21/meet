import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { WarningAlert } from './Alert';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      currentLocation: "all",
      networkStatus: navigator.onLine ? 'Online' : 'Offline'
    };
  }

  updateNumberOfEvents(eventNumber) {
    // const { locations, numberOfEvents } = this.state;
    this.setState({ numberOfEvents: eventNumber });
    this.updateEvents(this.state.currentLocation, eventNumber)
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, numberOfEvents),
          currentLocation: location,
        });
      }
    });
  };

  render() {
    const { networkStatus } = this.state;
      
    return (
      <div className="App">
        <WarningAlert
          text={networkStatus === 'Offline' ? 'App is running offline: data may not be updated' : ''}
        />
        <CitySearch 
        locations={this.state.locations} 
        updateEvents={this.updateEvents} 
        numberOfEvents={this.state.numberOfEvents} />

        <NumberOfEvents 
        updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)} 
        numberOfEvents={this.state.numberOfEvents}/>
        
        <EventList 
        events={this.state.events} />
        
      </div>
    );
  }
}

export default App;