/* eslint-disable prefer-const */
import React from 'react';
import { mount } from 'enzyme';
import ImageFollow from '../src';

describe('Hover', () => {
  const testSrc =
    'https://github.com/image-component/gallery/blob/main/girl/1.jpg?raw=true';

  beforeAll(() => {
    spyOn(HTMLElement.prototype, 'getBoundingClientRect').and.returnValue({
      left: 10,
      top: 10,
      width: 10,
      height: 10,
    });
  });

  it('mouse', () => {
    const wrapper = mount(<ImageFollow src={testSrc} />);
    const node = wrapper.find('.react-image-follow');

    node.simulate('mouseMove', {
      nativeEvent: {
        clientX: 100,
        clientY: 100,
      },
    });

    expect(
      wrapper.find('.react-image-follow-wrapper').prop('style').transform,
    ).toEqual(
      'scale(1.025) translate(calc(85 / 50 * 1px), calc(85 / 50 * 1px))',
    );

    expect(
      wrapper.find('.react-image-follow-img').prop('style').transform,
    ).toEqual('translate(calc(85 / 20 * 1px), calc(85 / 20 * 1px))');

    node.simulate('mouseLeave', {});

    expect(
      wrapper.find('.react-image-follow-wrapper').prop('style').transform,
    ).toEqual('none');
    expect(
      wrapper.find('.react-image-follow-img').prop('style').transform,
    ).toEqual('none');
  });
});
