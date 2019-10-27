export const ADD_TWEET = 'ADD_TWEET';
export const TOGGLE_THEME = 'TOGGLE_TODO';

export const addTweet = tweet => ({ type: ADD_TWEET, tweet });
export const toggleTheme = () => ({ type: TOGGLE_THEME });