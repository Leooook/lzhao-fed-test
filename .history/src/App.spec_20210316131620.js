import React from 'react';
import { shallow } from 'enzyme';
import { render, cleanup, fireEvent } from '@testing-library/react';

import App from './App';

global.fetch = require('node-fetch');

afterEach(cleanup);

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
		const { getByTestId, findByTestId } = render(<App />);
		new Promise(resolve => {
			setTimeout(function () {
				if (!findByTestId('load')) resolve(getByTestId('add-feature'));
			}, 3000);
		}).then(function (data) {
			fireEvent.click(getByTestId('add-feature'));
			expect(getByTestId.state('featureAmount')).toStrictEqual([1, 2]);
		});
	});
});
