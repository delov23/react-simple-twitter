import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import 'jest-enzyme';

configure({ adapter: new Adapter() });

const mockStore = configureStore([]);

const store = mockStore({
    tweets: [],
    theme: 'dark'
});

export const Wrapper = () => <Provider store={store} />;

afterEach(() => {
    cleanup();
});
