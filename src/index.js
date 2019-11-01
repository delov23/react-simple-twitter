import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Apollo from './components/Apollo';

ReactDOM.render(<Apollo />, document.getElementById('root'))

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// import App from './App';
// import { rootReducer } from './state/reducers';

// const initialState = {
//     theme: localStorage.getItem('theme') || 'light',
// };

// const store = createStore(rootReducer, initialState);

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );