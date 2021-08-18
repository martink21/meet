import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      currentLocation: "all",
      networkStatus: navigator.onLine ? 'Online' : 'Offline',
      showWelcomeScreen: undefined
    };
  }

  updateNumberOfEvents(eventNumber) {
    // const { locations, numberOfEvents } = this.state;
    this.setState({ numberOfEvents: eventNumber });
    this.updateEvents(this.state.currentLocation, eventNumber)
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
      true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }

  componentWillUnmount() {
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
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
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
          numberOfEvents={this.state.numberOfEvents} />

        <EventList
          events={this.state.events} />

        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />

      </div>
    );
  }
}

export default App;