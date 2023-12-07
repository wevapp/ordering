import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'

const Dashboard = () => {

  return (
  <div className='container h-[60%] border-2 mx-auto grid grid-cols-5 grid-rows-4 gap-2 px-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 lg:grid-rows-4'>
    <Navbar/>
    <Header />
    <Outlet />
  </div>
  )
}

export default Dashboard