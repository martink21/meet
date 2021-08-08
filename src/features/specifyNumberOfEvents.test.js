import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    
    let AppWrapper;
    given('the events list has loaded and the user has not specified the number of events to load', () => {
      AppWrapper = mount(<App />);
    });

    when('the user opens the event list', () => {
    });
    // Default is 32 but mock data only has 2 events
    then('the default number of events should load on the screen', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.EventItem')).toHaveLength(2);
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
      AppWrapper.unmount();
    });
});

test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('the events have loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('a user has specified a number for the amount of events to view', () => {
      AppWrapper.find('.EventsNumber').simulate('change', { target: { value: '1' } });
    });

    then('only the specified number of events should load', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.EventItem')).toHaveLength(1);
    });
});

})