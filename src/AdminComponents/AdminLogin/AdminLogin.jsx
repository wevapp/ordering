import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import Zustand
import useAdminStore from '../../store/Admin'
import Logo from '../../images/BackgroundImage/Logo.png'

const AdminLogin = () => {
  // call from zustand
  const admin = useAdminStore((state) => state.admin)

  const navigate = useNavigate()

  const [showPassword, setShowPassword ]= useState(true)
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const [adminAccount, setAdminUsername] = useState({username: "",password: "",})
  const {username, password} = adminAccount

   const handleLogin = () => {
     const adm = admin.find((adm) => adm.username === username && adm.password === password);
    if (adm) {
      navigate('/user-profile')
    } else {
      alert('Invalid')
      setAdminUsername({
        username: "",
        password: "",
      })
    }
   }

  return (
    <div className='container' style={{ backgroundImage: `url('/src/images/BackgroundImage/bg-main.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100%', margin: 'auto', display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%'}}>
      <div className='w-[350px] h-[100vh] p-4 flex flex-col justify-center'>
        <header>
            <img src={Logo} alt="logo" />
        </header>
        <div className='border px-2 bg-white '>
          <i className="fa-light fa-user"></i>
          <input 
            type="text"
            value={username}
            placeholder='Admin-username'
            onChange={e => setAdminUsername({...adminAccount, username: e.target.value})}
            className='w-[250px] ml-1 pl-2 py-1'
          />
        </div>
        <div className='border px-2 mt-1 bg-white '>
          <i className="fa-light fa-lock"></i>
          <input 
            type={showPassword ?  'password' : 'text'}
            value={password}
            placeholder='Admin-password'
            onChange={e => setAdminUsername({...adminAccount, password: e.target.value})}
            className='w-[250px] ml-1 pl-2 py-1'
          />
            <span onClick={handleShowPassword}>
              {showPassword ? <i className="fa-light fa-eye"></i> : <i className="fa-light fa-eye-slash"></i>}
            </span>
        </div>
        <div className='flex justify-evenly mt-1'>
          <button onClick={handleLogin} className='bg-blue-500 text-white  w-[200px] rounded py-1'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin