import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Tests for <Button /> Component', () => {
  describe('Initial rendering', () => {
    it('should render a proper component', () => {
      const wrapper = shallow(<Button>Hello Stranger</Button>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a <Button> with the default class', () => {
      const wrapper = shallow(<Button>Hello Stranger</Button>);
      expect(wrapper.hasClass('btn')).toBeTruthy();
    });

    it('should render a <Button> with a custom class', () => {
      const wrapper = shallow(
        <Button className="btn-test">Hello Stranger</Button>,
      );
      expect(wrapper.hasClass('btn-test')).toBeTruthy();
    });
  });
});
