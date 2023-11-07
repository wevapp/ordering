import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LoginStyle from './Login.module.css'

// import Zustand
import useRegisterStore from '../../store/LoginRegisterStore'

// import logo
import Logo from '../../images/BackgroundImage/Logo.png'

const Login = () => {
  
  // import from zustand
  const users = useRegisterStore((state) => state.users)

  // Direct Navigation
  const directToMain = useNavigate()

  // Pseudo Variable for result
  const [loginResult, setLoginResult] = useState('')

  // Get the value of text field
  const [inputUsername, setInputUserName] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const handleLogin = () => {
    const user = users.find((user) => user.username === inputUsername && user.password === inputPassword);
    if (user) {
      directToMain('/main')
    } else {
      setLoginResult('Invalid credentials');
    }
  };
  

  
  // console.log(users)
  return (
    <div className={`${LoginStyle['login']} h-screen ml-[40%] flex justify-center items-center`}>
        
        <div
          className='transparent min-w-[400px] max-w-[400px] min-h-[400px] max-h-[400px] flex flex-col justify-center items-center m-auto rounded-lg shadow-md'
          >
          <div
            className='text-xl font-semibold w-[100%] text-center'
            >
              <img src={Logo} alt="" />
          </div>
          <div
            className=''
            >
            <input 
              type="text"
              value={inputUsername}
              onChange={(e) => {setInputUserName(e.target.value)}}
              placeholder='Username'
              className='border-2 border-blue-200 w-[350px] p-2 rounded-md hover:border-blue-400 hover:border-3' 
            />
          </div>
          <div
            className='grid'
            >
            <input 
              type="password"
              value={inputPassword}
              onChange={(e) => {setInputPassword(e.target.value)}}
              placeholder='Password'
              className='border-2 border-blue-200 w-[350px] p-2 mt-3 rounded-md hover:border-blue-400 hover:border-3' 
            />
            <small
              className='mt-1 ml-3 font-semibold text-rose-500'
            >{loginResult}</small>
          </div>
          <div
            className=''
            >
            <button
              onClick={handleLogin}
              className='bg-blue-600 w-[200px] py-2 rounded text-white text-xl font-bold mt-5 hover:bg-blue-500'
            >Login</button>
          </div>
          <p
            className='mt-3 text-white'
          >
            No account? 
            <Link
              to='/register'
              className='font-bold hover:text-green-400'
            > {"  "}Sign-in</Link>
          </p>
          <ul>
            {users.username}
          </ul>
        </div>
    </div>
  )
}

export default Login