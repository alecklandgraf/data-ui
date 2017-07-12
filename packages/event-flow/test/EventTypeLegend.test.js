import React from 'react';
import { shallow } from 'enzyme';
import { LegendOrdinal } from '@vx/legend';
import { scaleOrdinal } from '@vx/scale';

import EventTypeLegend from '../src/components/EventTypeLegend';

describe('<EventTypeLegend />', () => {
  const props = {
    scale: scaleOrdinal({ range: ['a', 'b'], domain: ['#fff', '#000'] }),
  };

  test('it should be defined', () => {
    expect(EventTypeLegend).toBeDefined();
  });

  test('it should render a <LegendOrdinal />', () => {
    const wrapper = shallow(<EventTypeLegend {...props} />);
    expect(wrapper.find(LegendOrdinal).length).toBe(1);
  });
});
