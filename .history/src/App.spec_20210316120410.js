import React from 'react';
import { shallow } from "enzyme";

import App from './App';

describe("<App />", () => {
  it("properly increments and decrements the counter", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state("count")).toBe(0);

    wrapper.instance().increment();
    expect(wrapper.state("count")).toBe(1);

    wrapper.instance().decrement();
    expect(wrapper.state("count")).toBe(0);
  });
});