/* eslint-disable react-hooks/rules-of-hooks */
import './login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const login = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { name, password }).then(res => {
            console.log(res)
            if (res.data === "success") {
                navigate('/home')
            }
        })
    }

    return (
        <div className="signup">
            <div className="signup_container">
                <h2>Get Started With Jarvis</h2>
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
                    <button type='submit'>Dive In</button>
                </form>
            </div>
        </div>
    )
}

export default login
