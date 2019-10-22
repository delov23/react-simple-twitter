import React from 'react';
import Tweet from './Tweet';
import { TweetsContext } from '../ctx/tweetsCtx';

import './Search.css';

class Search extends React.Component {
    state = {
        tweets: [],
        addTweet: () => {},
        query: '',
        queried: []
    };

    componentDidMount() {
        this.setState({
            tweets: this.getSortedTweets(this.context.tweets),
            queried: this.getSortedTweets(this.context.tweets),
            addTweet: this.context.addTweet
        });
    }

    getSortedTweets = tweets => {
        return tweets.sort((a, b) => {
            const diff = a.timestamp - b.timestamp;
            return diff === 0 ? 0 : diff > 0 ? -1 : 1;
        });
    };

    handleChange = ({ target: { value: search } }) => {
        this.setState({
            queried: this.getSortedTweets(this.state.tweets).filter(t => {
                return (
                    t.user.username
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    t.user.name.toLowerCase().includes(search.toLowerCase()) ||
                    t.content.toLowerCase().includes(search.toLowerCase())
                );
            }),
            query: search
        });
        console.log(this.state);
    };

    render() {
        return (
            <section className="content-wrapper">
                <div className="heading centered content-block">
                    <h1>Search</h1>
                </div>
                <div className="heading content-block">
                    <input
                        placeholder="🔍 Input some key words of your search"
                        className="search"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.query}
                    />
                </div>
                <main className="tweets">
                    {this.state.queried.map(({ id, ...rest }) => (
                        <Tweet key={id} {...rest} />
                    ))}
                </main>
            </section>
        );
    }
}

Search.contextType = TweetsContext;

export default Search;
