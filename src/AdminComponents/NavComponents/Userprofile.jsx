import React from 'react'

// import Zustand
import useRegisterStore from '../../store/LoginRegisterStore'

const Userprofile = () => {

  const users = useRegisterStore((state) => state.users)
// try to json placeholder
console.log(users)
  return (
    <div className='bg-slate-200 rounded col-span-4 row-span-5'>
      <ul className='border'>
        {users.map(( user, index ) => (
          <li key={index}>
            {user.fullname} 
            {user.birthday} 
            {user.gender} 
            {user.address} 
            {user.contact} 
            {user.email} 
            {user.username} 
            {user.password} 
            {user.confirmPassword} 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Userprofile