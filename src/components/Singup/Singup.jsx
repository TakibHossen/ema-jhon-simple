import React, { useContext, useState } from 'react';
import './Singup.css';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../Providers/AuthProvider';

const Singup = () => {

    const [error, setError] = useState('');
    // const {createUser} = useContext(AuthContext);

    const handleSingup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm)

        setError('');
        if(password !== confirm){
            setError('Your password did not match')
            return
        }
        else if(password.length < 6){
            setError('Password must be six charecter or longer')
            return
        }
        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }
    return (
        <div className="login-form">
            <form onSubmit={handleSingup} method="post">
                <h2>Singup</h2>
                <label for="username">Email</label>
                <input type="email" id="username" name="email" required />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />

                <label for="password">Confirm Password</label>
                <input type="password" id="password" name="confirm" required />
                <button type="submit" value="sing up" >Singup</button>
            </form>
            <p><small>Allready have an account? <Link to="/login">Login</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default Singup;