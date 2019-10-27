import { ADD_TWEET, TOGGLE_THEME } from './actions';
import { combineReducers } from 'redux';

const tweetsReducer = (tweets = [], { type, ...action }) => {
    switch (type) {
        case ADD_TWEET:
            return [...tweets, action.tweet];
        default:
            return tweets;
    }
};

const themeReducer = (theme = 'light', { type }) => {
    switch (type) {
        case TOGGLE_THEME:
            return theme === 'light' ? 'dark' : 'light';
        default:
            return theme;
    }
};


export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    theme: themeReducer
})