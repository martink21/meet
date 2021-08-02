import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

  let numberFilter;

  beforeAll(() => {
    numberFilter = shallow(<NumberOfEvents />);
  });

  test('render the number of events menu', () => {
    expect(numberFilter.find('.numberOfEvents')).toHaveLength(1);
  });
});