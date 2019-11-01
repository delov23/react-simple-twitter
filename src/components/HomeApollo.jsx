import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'graphql.macro';

import Pages from './apollo-components/Pages';
import Login from './apollo-components/Login';

export const AUTHENTICATED_QUERY = gql`
    query IsAuthenticated {
        authenticated @client
    }
`;

export default () => {
    const { data } = useQuery(AUTHENTICATED_QUERY);
    return <>{data.authenticated ? <Pages /> : <Login />}</>;
};
