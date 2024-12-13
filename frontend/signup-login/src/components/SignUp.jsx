import React, { useState } from 'react';
import { Link } from "react-router-dom";


export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignup = async(e) => {
        e.preventDefault();
        // try{
        //     setLoading(true);
        //     const {data} = await axios.post('http://localhost:5000/api/signup', {
        //         name, 
        //         email,
        //         password,
        //     });
        //     setLoading(false);
        // }catch(err){
        //     setLoading(false);
        // }
        console.log("Name:", name,"SignUp email:", email, "password:", password);
    };

    return(
        <div className='container'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <label>Name</label>
                <input 
                type="text" 
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
                <br />
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
                <label>Confirm Password</label>
                <input
                type="password"
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
                <br />
                <button type='submit'>Sign Up</button>
            </form>
            <p>Already have an account? <a href='/'>Log in</a></p> 
        </div>
    )
}