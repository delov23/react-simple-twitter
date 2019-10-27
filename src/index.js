import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import { rootReducer } from './state/reducers';

import './index.css';

const initialState = {
    theme: 'light',
    tweets: [
        {
            id: '29dhh2ida-9d',
            user: {
                name: 'Tom Newman',
                username: 'tom_nm2',
                picture:
                    'https://www.pixelite.co.nz/content/images/2019/09/mateo-avila-chinchilla-x_8oJhYU31k-unsplash.jpg'
            },
            content: 'Trying out the new product from riot games. Excited!',
            image:
                'https://www.riotgames.com/darkroom/1120/05c55b321db28a205bd473733f059da2:b9259253a6e91d8a4163c21231d1d346/02-logo.png',
            timestamp: 1571581591383
        },
        {
            id: '29dhh3da-9d',
            user: {
                name: 'Nia Brown',
                username: 'niabrown1',
                picture:
                    'https://i.pinimg.com/736x/73/b1/ac/73b1acc4c8da50848288dffe8a48af4a.jpg'
            },
            content: "I just want a burger y'all 🤠🤠",
            timestamp: 1571582700145
        },
        {
            id: '29dhh2ida-2d',
            user: {
                name: '🎉Alex',
                username: 'alex_sweetie',
                picture:
                    'https://i.pinimg.com/originals/43/ef/18/43ef182ac321c4f757ecfde338eea736.jpg'
            },
            content: "It's my birthday, finally 🎉🎉🎉!",
            image:
                'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/835767',
            timestamp: 1571582800145
        }
    ]
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
