/* eslint-disable comma-dangle */
import React from 'react';
import { mount } from 'enzyme';
import ImageFollow from '../src';

describe('temp', () => {
  const testSrc =
    'https://github.com/image-component/gallery/blob/main/girl/1.jpg?raw=true';

  it('render', () => {
    const wrapper = mount(<ImageFollow src={testSrc} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render children', () => {
    const wrapper = mount(
      <ImageFollow src={testSrc}>
        <h2>test</h2>
      </ImageFollow>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('render classname', () => {
    const wrapper = mount(<ImageFollow src={testSrc} className="test33" />);
    expect(wrapper.find('.test33').length).toBeTruthy();
  });

  it('alt', () => {
    const wrapper = mount(<ImageFollow alt="alt" src={testSrc} />);
    const node = wrapper.find('.react-image-follow-img');
    expect(node.prop('alt')).toEqual('alt');
  });

  it('radius', () => {
    const wrapper = mount(<ImageFollow radius={20} src={testSrc} />);
    const node = wrapper.find('.react-image-follow-img');
    expect(node.prop('style')?.borderRadius).toEqual('20px');
  });

  it('style', () => {
    const wrapper = mount(
      <ImageFollow
        style={{
          color: 'red',
        }}
        src={testSrc}
      />,
    );
    const node = wrapper.find('.react-image-follow');
    expect(node.prop('style')?.color).toEqual('red');
  });
});
