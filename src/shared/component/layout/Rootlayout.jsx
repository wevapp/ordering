import React from 'react'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div className='container h-[100%] m-auto flex justify-center' style={{ backgroundImage: `url('/src/images/BackgroundImage/bg-main.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100%', margin: 'auto', display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%'}}>
      <Outlet />
    </div>
  )
}

export default Rootlayout