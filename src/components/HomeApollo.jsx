import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { gql } from 'graphql.macro';

import Tweet from './Tweet';
import './Feed.css';

const ALL_TWEETS_QUERY = gql`
    query AllTweetsQuery($take: Int, $after: String) {
        allTweets(take: $take, after: $after) {
            cursor
            hasMore
            tweets {
                id
                timestamp
                content
                user {
                    name
                    picture
                    username
                }
            }
        }
    }
`;

const LOG_IN = gql`
    mutation LogIn($username: String!) {
        logIn(username: $username)
    }
`;

const AllTweets = () => {
    const { data, loading, error } = useQuery(ALL_TWEETS_QUERY, {
        fetchPolicy: 'network-only'
    });
    if (loading) return <div>Loading...</div>;
    if (error) {
        console.error(error);
        return <p>Error on getting all tweets</p>;
    }

    const {
        allTweets: { tweets }
    } = data;

    return (
        <div>
            {tweets.map(t => (
                <Tweet key={t.id} tweet={t} />
            ))}
        </div>
    );
};

const LoginForm = ({ login }) => {
    const [username, setUsername] = useState('');

    const onChange = ({ target: { value: newUsername } }) => {
        setUsername(newUsername);
    };

    const handleSubmit = e => {
        e.preventDefault();
        login({ variables: { username } });
    };

    return (
        <div>
            <input
                name="username"
                value={username}
                onChange={onChange}
                placeholder="username"
            />
            <button onClick={handleSubmit}>Log In</button>
        </div>
    );
};

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

const Pages = () => {
    return (
        <Switch>
            <Route path="/" exact component={AllTweets} />
        </Switch>
    );
};

export const AUTHENTICATED_QUERY = gql`
    query IsAuthenticated {
        authenticated @client
    }
`;

export default () => {
    const { data } = useQuery(AUTHENTICATED_QUERY);
    return <div>{data.authenticated ? <Pages /> : <Login />}</div>;
};
