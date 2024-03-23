/* eslint-disable react-hooks/rules-of-hooks */
import './signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const signup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jarvis-a-ai-clone.vercel.app/signup', { name, email, password }).then(res => {
            console.log(res)
            navigate('/')
        })
    }

    return (
        <div className="signup">
            <div className="signup_container">
                <h2>Sign Up for Jarvis</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='input'>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder='Enter your username'
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='input'>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder='Enter your email adress'
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='input'>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Enter your Password'
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default signup
