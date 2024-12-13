import React, {useState} from 'react';
import { Link } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
    };
    return(
        <div className='container'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input 
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                />
                <br />
                <label>Password</label>
                <input 
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                />
                <br />
                <button type='submit'>Login</button>
            </form>
            <p>
				Don't have an account ? <Link to="/signup"> Sign In </Link>
			</p>
        </div>
    )
}