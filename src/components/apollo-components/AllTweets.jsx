import React from 'react';
import { gql } from 'graphql.macro';
import { useQuery } from '@apollo/react-hooks';

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
        <div className={`app-wrapper`}>
            <main className="router-content">
                <section className="content-wrapper">
                    <div className="tweets">
                        {tweets.map(t => (
                            <Tweet key={t.id} tweet={t} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AllTweets;