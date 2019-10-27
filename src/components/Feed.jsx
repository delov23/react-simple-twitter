import React from 'react';
import { Link } from 'react-router-dom';
import Tweet from './Tweet';
import { connect } from 'react-redux';

import './Feed.css';

class Feed extends React.Component {
    getSortedTweets() {
        return this.props.tweets.sort((a, b) => {
            const diff = a.timestamp - b.timestamp;
            return diff === 0 ? 0 : diff > 0 ? -1 : 1;
        });
    }

    render() {
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
                    {this.getSortedTweets().map(({ id, ...rest }) => (
                        <Tweet key={id} {...rest} />
                    ))}
                </main>
            </section>
        );
    }
}

export default connect(({ tweets, theme }) => ({ tweets, theme }))(Feed);
