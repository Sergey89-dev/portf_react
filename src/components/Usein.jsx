import React, { useEffect } from 'react';
import { useState } from 'react';


const Usein = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loginJus, setLoginJus] = useState(false);
    const [passwordJus, setPasswordJus] = useState(false);
    const [loginError, setLoginError] = useState('окно пустое');
    const [passwordError, setPasswordError] = useState('окно пустое');
    const [formValid, setformValid] = useState(false)

    useEffect(() => {
        if (loginError || passwordError) {
            setformValid(false);
        } else {
            setformValid(true);
        }

    }, [loginError, passwordError])
    const loginUse = (e) => {
        setLogin(e.target.value)
        const rel = 'developer21'
        if (!(rel).toLocaleLowerCase()) {
            setLoginError('Неккоректный логин')
        } else {
            setLoginError('')
        }
    }

    const passwordUse = (e) => {
        setPassword(e.target.value)
        const pd = '123456'
        if (!(pd).toLowerCase()) {
            setPasswordError('Неккоректный пароль')
        } else {
            setPasswordError('')
        }
    }
    const showCurs = (e) => {
        switch (e.target.name) {
            case 'login':
                setLoginJus(true)
                break
            case 'password':
                setPasswordJus(true)
                break
            default:

        }
    }
    return (
        <div className='useForm'>
            <form>
                <h1>Вход</h1>
                {(loginJus && loginError) && <div style={{ color: 'red' }}>{loginError}</div>}
                <input onChange={e => loginUse(e)} value={login} onBlur={e => showCurs(e)} name='login' type="text" placeholder='Введите логин' />
                {(passwordError && passwordJus) && <div style={{ color: 'red' }}>{passwordError}</div>}
                <input onChange={e => passwordUse(e)} value={password} onBlur={e => showCurs(e)} name='password' type="text" placeholder='Введите пароль' />
                <button disabled={!formValid} type='submit'>Войти</button>
            </form>
        </div>

    )
}
export default Usein;
