import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import "./Admin.css"
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Hardcoded credentials
    const HARD_CODED_USERNAME = 'toni';
    const HARD_CODED_PASSWORD = '123';

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if entered username and password match the hardcoded values
        if (username === HARD_CODED_USERNAME && password === HARD_CODED_PASSWORD) {
            // Store authentication status in localStorage
            localStorage.setItem('isAuthenticated', 'true');
            setIsAuthenticated(true);
        } else {
            setError('Invalid username or password');
        }
    };

    // Redirect to admin if authenticated
    if (isAuthenticated) {
        return <Redirect to="/login/admin" />;
    }

    return (
        <div className='box'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                {error && <p style={{ color: 'blue' }}>{error}</p>}
                <button className="log__in__btn" type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
