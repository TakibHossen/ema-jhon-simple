import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-form">
            <form  method="post">
                <h2>Login</h2>
                <label for="username">Email</label>
                <input type="email" id="username" name="email" required />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Login</button>
            </form>
            <p><small>New to Ema-Jhon? <Link to="/singup">Create A account</Link></small></p>
        </div>
    );
};

export default Login;
{/* action="login.php" */ }