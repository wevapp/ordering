import React from 'react'

// import Zustand
import useRegisterStore from '../../store/LoginRegisterStore'

const Userprofile = () => {

  const users = useRegisterStore((state) => state.users)
console.log(users)
  return (
    <div className='bg-slate-200 rounded col-span-4 row-span-5'>
      <ul>
        {users.map(( user, index ) => (
          <li key={index}>
            {user.fullname} <br />
            {user.birthday} <br />
            {user.gender} <br />
            {user.address} <br />
            {user.contact} <br />
            {user.email} <br />
            {user.username} <br />
            {user.password} <br />
            {user.confirmPassword} <br />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Userprofile