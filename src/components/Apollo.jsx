import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';

import client from '../client';
import HomeApollo from './HomeApollo';

export default () => (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <HomeApollo />
        </BrowserRouter>
    </ApolloProvider>
);
