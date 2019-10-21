import React from 'react';
import { Link } from 'react-router-dom';
import Tweet from './Tweet';
import { TweetsContext } from '../ctx/tweetsCtx';

import './Feed.css';

class Feed extends React.Component {
    state = {
        tweets: [],
        addTweet: () => {}
    };

    componentDidMount() {
        this.setState(this.context);
    }

    getSortedTweets() {
        console.log(
            this.state.tweets.sort((a, b) => {
                const diff = a.timestamp - b.timestamp;
                return diff === 0 ? 0 : diff > 0 ? -1 : 1;
            })
        );
    }

    render() {
        this.getSortedTweets();
        return (
            <section className="content-wrapper">
                <div className="heading content-block">
                    <h1>Home</h1>
                    <Link to={'/refresh'}>
                        <span role="img" aria-label="style">
                            ✨
                        </span>
                    </Link>
                </div>
                <main className="tweets">
                    {this.state.tweets.map(({ id, ...rest }) => (
                        <Tweet key={id} {...rest} />
                    ))}
                </main>
            </section>
        );
    }
}

Feed.contextType = TweetsContext;

export default Feed;
