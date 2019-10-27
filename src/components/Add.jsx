import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { addTweet } from '../state/actions';
import { getUuid } from '../util/uuid';

import './Add.css';

class Add extends Component {
    state = {
        tweet: {
            id: getUuid(),
            user: {
                name: 'Tom Newman',
                username: 'tom_nm2',
                picture:
                    'https://www.pixelite.co.nz/content/images/2019/09/mateo-avila-chinchilla-x_8oJhYU31k-unsplash.jpg'
            },
            content: '',
            image: '',
            timestamp: Date.now()
        },
        redirect: false
    };

    handleChange = ev => {
        this.setState({
            tweet: { ...this.state.tweet, [ev.target.name]: ev.target.value }
        });
    };

    addTweet = () => {
        this.setState({
            tweet: { ...this.state.tweet, timestamp: Date.now() },
            redirect: true
        });
        this.props.addTweetToState(this.state.tweet);
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/'} />;
        }

        return (
            <form
                className="centered-form content-block"
                onSubmit={this.addTweet}
            >
                <h3>Say something to your followers!</h3>
                <textarea
                    rows="4"
                    minLength="10"
                    maxLength="120"
                    required
                    className="form-input lg"
                    type="text"
                    placeholder="Content"
                    name="content"
                    onChange={this.handleChange}
                    value={this.state.tweet.content}
                />
                <input
                    className="form-input"
                    type="text"
                    placeholder="Image"
                    name="image"
                    onChange={this.handleChange}
                    value={this.state.tweet.image}
                />
                <button type="submit" className="form-submit">
                    Add tweet
                </button>
            </form>
        );
    }
}

export default connect(
    null,
    { addTweetToState: addTweet }
)(Add);

/* 
const Add = () => {
    const ctx = useContext(TweetsContext);
    const [redirect, setRedirect] = useState(false);
    const [tweet, setTweet] = useState({
        id: getUuid(),
        user: {
            name: 'Tom Newman',
            username: 'tom_nm2',
            picture:
                'https://www.pixelite.co.nz/content/images/2019/09/mateo-avila-chinchilla-x_8oJhYU31k-unsplash.jpg'
        },
        content: '',
        image: '',
        timestamp: Date.now()
    });

    const addTweet = () => {
        tweet.timestamp = Date.now();
        ctx.addTweet(tweet);
        setRedirect(true);
    };

    const handleChange = ev => {
        setTweet({ ...tweet, [ev.target.name]: ev.target.value });
    };

    if (redirect) {
        return <Redirect to={'/'} />;
    }

    return (
        <form className="centered-form content-block" onSubmit={addTweet}>
            <h3>Say something to your followers!</h3>
            <textarea
                rows="4"
                minLength="10"
                maxLength="120"
                required
                className="form-input lg"
                type="text"
                placeholder="Content"
                name="content"
                onChange={handleChange}
                value={tweet.content}
            />
            <input
                className="form-input"
                type="text"
                placeholder="Image"
                name="image"
                onChange={handleChange}
                value={tweet.image}
            />
            <button type="submit" className="form-submit">Add tweet</button>
        </form>
    );
};

export default Add;

*/
