import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { gql } from 'graphql.macro';

import LoginForm from './LoginForm';

const LOG_IN = gql`
    mutation LogIn($username: String!) {
        logIn(username: $username)
    }
`;

const Login = () => {
    const client = useApolloClient();

    const [login, { loading, error }] = useMutation(LOG_IN, {
        onCompleted: ({ logIn: loginData }) => {
            localStorage.setItem('token', loginData);
            client.writeData({ data: { authenticated: true } });
        }
    });

    if (loading) return <div>Loading... </div>;
    if (error) return <p>An error occurred</p>;

    return <LoginForm login={login} />;
};

export default Login;