import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Nav = ({ resetClick }) => {

  return (
    <div 
        className='container bg-blue-100 transition delay-300 duration-300 ease-in-out z-10'
        >
        <ul
          className='px-16 pb-4'
          >
          <li
            className='border-b-4 border-slate-100 text-center font-bold py-2 flex'
            >
              <Link to='/login'><i className="fa-solid fa-square-arrow-left fa-2xl hover:text-orange-500"></i></Link>
              <p className='flex-initial w-[100%] mx-2'>CATEGORIES</p>
          </li>
          <li
            className='border-b-4 flex justify-evenly cursor-pointer font-semibold border-slate-100 text-orange-600 py-2'
            >
              <small className='hover:bg-orange-100 py-1 w-[400px] text-center transition delay-150 ease-in-out rounded'><Link onClick={resetClick} to='/main'>MEAT</Link></small>
              <small className='hover:bg-orange-100 py-1 w-[400px] text-center transition delay-150 ease-in-out rounded'><Link onClick={resetClick} to='/rice'>RICE</Link></small>
              <small className='hover:bg-orange-100 py-1 w-[400px] text-center transition delay-150 ease-in-out rounded'><Link onClick={resetClick} to='/main'>JUICES</Link></small>
              <small className='hover:bg-orange-100 py-1 w-[400px] text-center transition delay-150 ease-in-out rounded'><Link onClick={resetClick} to='/main'>SODA</Link></small>
              <small className='hover:bg-orange-100 py-1 w-[400px] text-center transition delay-150 ease-in-out rounded'><Link onClick={resetClick} to='/main'>DESSERT</Link></small>
          </li>
        </ul>
    </div>
  )
}

export default Nav