import React from 'react';
import Login from './components/Login';
import './App.css';
import { selectUser } from './features/userSlice';
import Logout from './components/Logout';
import {useSelector} from 'react-redux';


function App() {
const user = useSelector(selectUser);
  return (
    <div className='App'>
      {user ? <Logout/> : <Login/>}
    </div>

  );
}

export default App;
