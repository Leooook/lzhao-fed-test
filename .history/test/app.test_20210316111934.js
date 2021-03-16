import { unmountComponentAtNode } from 'react-dom';
import App from '../src/App'
import from '../src/components/'


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
