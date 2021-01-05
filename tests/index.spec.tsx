/* eslint-disable comma-dangle */
import React from 'react';
import { mount } from 'enzyme';
import ImageFollow from '../src';

describe('temp', () => {
  it('render', () => {
    const wrapper = mount(<ImageFollow />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render classname', () => {
    const wrapper = mount(<ImageFollow className="test33" />);
    expect(wrapper.find('.test33').length).toBeTruthy();
  });
});
