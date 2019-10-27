import React from 'react';
import Tweet from './Tweet';
import { connect } from 'react-redux';

import './Search.css';

class Search extends React.Component {
    state = {
        query: '',
        queried: []
    };

    componentDidMount() {
        const sorted = this.getSortedTweets(this.props.tweets);
        this.setState({
            queried: sorted,
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
        const lowerSearch = search.toLowerCase();
        this.setState({
            queried: this.getSortedTweets(this.props.tweets).filter(t => {
                return (
                    t.user.username
                        .toLowerCase()
                        .includes(lowerSearch) ||
                    t.user.name
                        .toLowerCase()
                        .includes(lowerSearch) ||
                    t.content
                        .toLowerCase()
                        .includes(lowerSearch)
                );
            }),
            query: search
        });
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

export default connect(({ tweets, theme }) => ({ tweets, theme }))(Search);