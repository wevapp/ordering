import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/BackgroundImage/Logo.png'

import Userprofile from '../Userprofile/Userprofile'
const Dashboard = () => {

  return (
    <div className='container border-2 mx-auto grid grid-cols-5 grid-rows-6 gap-2 px-2'>
        <div className='bg-blue-300 rounded row-span-6'>
            <p className='h-[200px] flex justify-center items-center bg-blue-900'><img src={Logo} alt="" /></p>
            <ul className='font-semibold'>
                <li className='hover:text-white hover:bg-blue-800 transition delay-75 ease-in-out cursor-pointer mb-1 pl-4 py-2'><i className="fa-light fa-user-hair mx-3"></i><Link to='/user-profile'>User profile</Link></li>
                <li className='hover:text-white hover:bg-blue-800 transition delay-75 ease-in-out cursor-pointer my-1 pl-4 py-2'><i className="fa-light fa-pot-food mx-3"></i><Link>Product</Link></li>
                <li className='hover:text-white hover:bg-blue-800 transition delay-75 ease-in-out cursor-pointer my-1 pl-4 py-2'><i className="fa-sharp fa-regular fa-plus mx-3"></i><Link>Add Item</Link></li>
                <li className='hover:text-white hover:bg-blue-800 transition delay-75 ease-in-out cursor-pointer my-1 pl-4 py-2'><i className="fa-light fa-gear mx-3"></i><Link>Settings</Link></li>
                <li className='hover:text-white hover:bg-blue-800 transition delay-75 ease-in-out cursor-pointer my-1 pl-4 py-2'><i className="fa-light fa-brackets-curly mx-3"></i><Link>Developer</Link></li>
                <li className='hover:text-white hover:bg-blue-800 transition delay-75 ease-in-out cursor-pointer my-1 pl-4 py-2'><i className="fa-sharp fa-light fa-arrow-left mx-3"></i><Link to='/admin--'>Logout</Link></li>
            </ul>
        </div>
        <div className='bg-blue-900 rounded h-[100px] flex justify-start items-center col-span-4 relative overflow-hidden'>
            <p className='border-2 bg-blue-900 h-[90px] w-[99%] text-3xl flex justify-start items-center text-white font-bold pl-4 ml-1 rounded z-20'>Dashboard...</p>
        </div>
        <div className='bg-rose-500 rounded h-[100px]'></div>
        <div className='bg-blue-500 rounded h-[100px]'></div>
        <div className='bg-green-500 rounded h-[100px]'></div>
        <div className='bg-yellow-500 rounded h-[100px]'></div>
        <div className='bg-slate-200 rounded col-span-4 row-span-5'>
            
        </div>
    </div>
  )
}

export default Dashboard