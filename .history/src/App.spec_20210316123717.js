import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
	it('featureAmount increase', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.state('featureAmount')).toStrictEqual([1]);

		wrapper.instance().setFeature();
		expect(wrapper.state('featureAmount')).toStrictEqual([1, 2]);

		wrapper.instance().setFeature();
		expect(wrapper.state('featureAmount')).toStrictEqual([1, 2, 3]);
	});
	it('iconsDisplay switch', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.state('iconsDisplay')).toStrictEqual(false);

		wrapper.instance().setIcons();
		expect(wrapper.state('iconsDisplay')).toStrictEqual(true);

		wrapper.instance().setIcons();
		expect(wrapper.state('iconsDisplay')).toStrictEqual(false);
	});
  it('increments featureAmount ', () => {
    const { getByTestId } = render(<App />); 
    
    fireEvent.click(getByTestId('button-up'))

    expect(getByTestId('counter')).toHaveTextContent('1')
  });
});
