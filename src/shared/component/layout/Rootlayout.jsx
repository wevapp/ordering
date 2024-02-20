import React from 'react'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div className='container h-[100%]' style={{ backgroundImage: `url('src/images/BackgroundImage/bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100%', margin: 'auto', width: '100%'}}>
      <Outlet />
    </div>
  )
}

export default Rootlayout