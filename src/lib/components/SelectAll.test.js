import React from 'react';
import { shallow } from 'enzyme';
import { render } from 'enzyme';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectAll from './SelectAll';

Enzyme.configure({ adapter: new Adapter() });

it('SelectAll renders without crashing', () => {
  const wrapper = shallow(<SelectAll>Foo</SelectAll>);
  expect(wrapper.text()).toEqual('Foo');
});

it('SelectAll container gets passed CSS classes', () => {
  const wrapper = render(<SelectAll className="bar">Foo</SelectAll>);
  expect(wrapper.attr('class')).toBe('bar');
});

describe('Event interaction', () => {
  it('SelectAll subitems react to onclick events', () => {
    const onTextClick = sinon.spy();
    const wrapper = mount(
      <SelectAll onSelect={onTextClick}>
        <p>Foo bar baz</p>
      </SelectAll>
    );
    wrapper.find('p').simulate('click');
    expect(onTextClick.calledOnce).toBeFalsy();
    wrapper.find('p').simulate('doubleclick');
    expect(onTextClick.calledOnce).toBeTruthy();
  });
  it('We can change SelectAll activation event', () => {
    const onTextClick = sinon.spy();
    const wrapper = mount(
      <SelectAll onSelect={onTextClick} selectOn="onClick">
        <p>Foo bar baz</p>
      </SelectAll>
    );
    wrapper.find('p').simulate('click');
    expect(onTextClick.calledOnce).toBeTruthy();
  });
});
