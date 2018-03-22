import React from 'react';
import { shallow } from 'enzyme';
import Panel from './Panel';

define('Panel component', () => {
  const panel = shallow(<Panel />);

  it('renders properly', () => {
    expect(panel).toMatchSnapshot();
  });
});
