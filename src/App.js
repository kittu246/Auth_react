import React,{useState} from 'react';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Zuku from './Components/Zuku';
import LogOut from './Components/LogOut';

const App = () => {

  const [token,SetToken] = useState('');



  return (
    <div>
        <SignUp SetToken={SetToken}/>
        <Login SetToken={SetToken}/>
        <Zuku token={token}/>
        <LogOut token={token}/>
        </div>
  )
}

export default App