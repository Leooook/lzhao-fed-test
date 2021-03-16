import React from 'react';
import { shallow, full } from 'enzyme';
import { render, cleanup, fireEvent } from '@testing-library/react';

import App from './App';
import Feature from './components/feature';

global.fetch = require('node-fetch');

afterEach(cleanup);

describe('<App />', () => {
	it('featureAmount increasment', () => {
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
	it('featureAmount trigger', () => {
		const { getByTestId, findByTestId } = render(<App />);
		new Promise(resolve => {
			setTimeout(() => {
				if (!findByTestId('load')) resolve(getByTestId('add-feature'));
			}, 3000);
		}).then(data => {
			fireEvent.click(data);
			expect(getByTestId.state('featureAmount')).toStrictEqual([1, 2]);
		});
	});
});

describe('<Feature />', () => {
	it('dataSet increasment', () => {
		const wrapper = full(<Feature />);
		expect(wrapper.state('dataSet')).toStrictEqual([]);
		const { findByTestId } = render(<App />);
		new Promise(resolve => {
			setTimeout(() => {
				if (!findByTestId('load')) resolve();
			}, 3000);
		}).then(() => {
			expect(wrapper.state('dataSet').length).toStrictEqual(6);
		});
	});
});
