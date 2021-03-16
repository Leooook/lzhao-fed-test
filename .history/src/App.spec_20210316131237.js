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
    var p = new Promise(function(resolve, reject){        //做一些异步操作
      setTimeout(function(){
          console.log('吃饭完毕!');
          resolve('一块碗和一双筷子');
      }, 2000);

————————————————
版权声明：本文为CSDN博主「森林屿麓」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/u013967628/article/details/86569262
		if (getByTestId('add-feature')) {
			fireEvent.click(getByTestId('add-feature'));
			expect(getByTestId.state('featureAmount')).toStrictEqual([1, 2]);
		}
	});
});
