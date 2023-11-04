import React from 'react'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div className='container bg-orange-100 h-[100%] m-auto flex justify-center'>
      <Outlet />
    </div>
  )
}

export default Rootlayout