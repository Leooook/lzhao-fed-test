import { unmountComponentAtNode } from 'react-dom';
import App from '../src/App';
import Header from '../src/components/header';
import Feature from '../src/components/feature';
import Detail from '../src/components/detail';

let container = null;
beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('get name', () => {
	act(() => {
		render(<Header />, container);
	});
	expect(container.textContent).toBe('Member Card Information');
});
