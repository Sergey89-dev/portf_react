import React from 'react';
import {  logout, selectUser } from '../features/userSlice';
import './Logout.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Logout = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogout = (e) =>{
        e.preventDefault();
        dispatch(logout());
    }
    return (
        <div  className ='logout'>
           <h1>Приветствуем ! <span className ='user__login'>{user.name}</span></h1> 
           <button className ='logout__button' onClick ={(e) => handleLogout(e)}>Выйти</button>
        </div>
    )
}

export default Logout
