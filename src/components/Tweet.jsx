import React from 'react';

import './Tweet.css';

const Tweet = ({
    user: { name, picture, username },
    content,
    timestamp,
    ...rest
}) => {
    const elapsedTime = new Date(new Date() - new Date(timestamp));
    let before = elapsedTime.getMinutes()
        ? elapsedTime.getMinutes() + ' min'
        : elapsedTime.getSeconds() + ' sec';
    if (elapsedTime.getUTCHours() > 0) {
        before = '1h+';
    }

    return (
        <article className="tweet content-block">
            <div className="profile-picture">
                <img src={picture} alt={name + "'s profile picture"} />
            </div>
            <div className="tweet-content">
                <h3>
                    {name + ' '}
                    <span className="username">
                        @{username} · {before}
                    </span>
                </h3>
                <p>{content}</p>
                {rest.image && (
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={rest.image}
                    >
                        <img src={rest.image} alt="img to the tweet" />
                    </a>
                )}
            </div>
        </article>
    );
};

export default Tweet;
