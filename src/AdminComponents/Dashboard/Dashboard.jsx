import React from 'react'

import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {

  return (
  <div className='container h-[60%] border-2 mx-auto grid grid-cols-5 grid-rows-4 gap-2 px-2'>
    <Navbar/>
    <Header />
    <Outlet />
  </div>
  )
}

export default Dashboard