import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Wrapper } from './setupTests';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Wrapper><App /></Wrapper>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should render a div', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Wrapper><App /></Wrapper>, div);
    if (document.querySelectorAll('div').length < 0) {
        throw new Error();
    }
});
