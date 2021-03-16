import React from 'react';
import { shallow } from "enzyme";

import App from './App';

describe("<App />", () => {
  it("featureAmount increase", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("featureAmount")).toBe([ 1 ]);

    wrapper.instance().setFeature();
    expect(wrapper.state("featureAmount")).toBe([ 1 ]);

    wrapper.instance().decrement();
    expect(wrapper.state("featureAmount")).toBe([ 1 ]);
  });
});