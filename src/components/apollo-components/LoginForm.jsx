import React, { useState } from 'react';

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

export default LoginForm;