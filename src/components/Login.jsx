import React from 'react';
import { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import {login} from '../features/userSlice'

const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    

    const dispatch  = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name:name,
            password:password,
            loggedIn:true,
        }))
    }
    return (
        <div className='login'>
            <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
                <h1>Вход</h1>
                <input className='inputig' type='name'
                    placeholder='логин'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input className='inputig' type='password'
                    placeholder='пароль'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className='submit__btn'>
                    Войти
                </button>
            </form>

        </div>
    )
}

export default Login
