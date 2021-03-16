import { unmountComponentAtNode } from 'react-dom';
import App from '../src/App'
import Header from '../src/components/header'


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
