# Meet App

A serverless PWA built using React and a test-driven development technique.


### Used technologies

- React 
- Google Calendar API


## Screenshots

![Screenshot1](https://snipboard.io/1uIUhZ.jpg)

## Project Brief

User Stories for each feature and sceneries for each feature.

1. Filter events by city
As a user I should be able to filter events by city So that I can see the list of events that take place in that city

SCENARIO 1: When user hasn't searched for a city, show upcoming events from all cities.

Given user hasn’t searched for any city When the user opens the app Then the user should see a list of all upcoming events

SCENARIO 2: User should see a list of suggestions when they seach for a city.

Given the main page is open When user starts typing in the city textbox Then the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: User can select a city from the suggested list.

Given the user was typing “Berlin” in the city textbox And the list of suggested cities is showing When the user selects a city (e.g., “Berlin, Germany”) from the list Then their city should be changed to that city (i.e., “Berlin, Germany”) And the user should receive a list of upcoming events in that city

2. Show / Hide event details
As a user I should be able to expand event details So that I can view more information about a specific event

SCENARIO 1: An event element is collapsed by default

Given that an event is present When the user selects "view details" or "view more" Then the element will expand and display the event details

SCENARIO 2: User can expand an event to see its details

Given the event list has loaded When a user selects the event, either link or "view event details" Then the event page will load, displaying all the event details

SCENARIO 3: User can collapse an event to hide its details

Given the user has expanded an events details When the user selects "collaps" or "close" The expanded element will collapse, hiding the details of the element

3. Specify Number of Events
As a user I should be able to view a specific number of events per page So that I can adjust my page for screen size and load time

SCENARIO 1: When user hasn’t specified a number, 32 is the default number

Given the events list has loaded and the user has not specified the number of events to load When the user opens the event list Then 32 events should load on the screen (assuming there is at least 32 events)

SCENARIO 2: User can change the number of events they want to see

Given the events have loaded When a user has specified a number (i.e. 5) for the amount of events to view Then only the specified number (5) of events should load

4. Use the App Offline
As a user I should be able to use the app offline So that I can view event information without having to connect to the internet/use data

SCENARIO 1: Show cached data when there’s no internet connection

Given the app has been openned previously with an internet connection When a user opens the app Then the previously cached data should be persistent within the app

SCENARIO 2: Show error when user changes the settings (city, time range)

Given the app has cached data When a user changes settings Then an error should inform them that it requires an internet connection to load new data

5. Data Visualization
As a user I should be able to view the number of events by city So that I can visualize data about where events are taking place

SCENARIO 1: Show a chart with the number of upcoming events in each city

Given that there are events loaded When a user goes to the data page Then a chart with visualized data showing how many events per city should load.


