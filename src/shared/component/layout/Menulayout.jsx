import React from 'react'
import Header from '../partial/Header'
import { Outlet } from 'react-router-dom'

const Menulayout = () => {
  return (
    <div className='container'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Menulayout