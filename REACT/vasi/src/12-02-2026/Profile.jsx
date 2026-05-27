import React, { useState } from 'react';
import Login from '../16-02-2026/Login'
import Signup from './Signup';

function Profile()  {
    let [status,setstatus] = useState("new")
    let [loginIn,setlogin] = useState(false)
    let [exist,setexist] = useState(true)
    let changelogin = ()=>{
        setlogin(true)
    }
  return (
    <div>
    {loginIn ? <div><h3>profile</h3>
    </div>: exist ? <Login value={changelogin}/> : <Signup/>}
    {/* <div> */}
    {
        loginIn ? <button onClick={()=>setlogin(false)}>Logout</button>:
        exist ?
        <div>
        <p>if you are a newUser? click</p>  
    {/* </div> */}
    <button onClick={()=>setexist(false)}>Signup</button>
    </div> :

        <div>
        <p>if you are a existing user? click</p>  
    {/* </div> */}
    <button onClick={()=>setexist(true)}>Login</button>
    </div>

    }
    
    </div>
  );
};
export default Profile;