import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
    <div className={`h-screen flex justify-end items-center`}>

        <div
          className='transparent flex flex-col justify-center items-center  rounded-lg shadow-md py-4'
          >
          <div
            className='text-xl font-semibold w-[100%] text-center'
            >
              <img src={Logo} alt="logo" />
          </div>
          <div
            className=''
            >
            <input 
              type="text"
              value={inputUsername}
              onChange={(e) => {setInputUserName(e.target.value)}}
              placeholder='Username'
              className='border-2 border-blue-200 p-2 rounded-md hover:border-blue-400 hover:border-3 xs:w-[250px] sm:w-[350px] md:w-[350px] lg:w-[350px] xl:w-[350px]' 
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
              className='border-2 border-blue-200 p-2 mt-3 rounded-md hover:border-blue-400 hover:border-3 xs:w-[250px] sm:w-[350px] md:w-[350px] lg:w-[350px] xl:w-[350px]' 
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
              className='bg-blue-600 py-2 rounded text-white text-xl font-bold mt-5 hover:bg-blue-500 xs:w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[200px]'
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