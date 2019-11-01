import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import { typeDefs } from './local';
import authLink from './auth';

const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql'
});

const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    link: authLink.concat(httpLink),
    typeDefs,
    resolvers: {}
    // resolvers: {
    //     Query: {
    //         authenticated: !!localStorage.getItem('token')
    //     }
    // }
});

cache.writeData({
    data: {
        authenticated: !!localStorage.getItem('token')
    }
});

export default client;
