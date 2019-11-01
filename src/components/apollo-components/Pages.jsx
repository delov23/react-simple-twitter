import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AllTweets from './AllTweets';

const Pages = () => {
    return (
        <Switch>
            <Route path="/" exact component={AllTweets} />
        </Switch>
    );
};

export default Pages;