import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavStyle from './Navbar.module.css'
import Logo from '../../images/BackgroundImage/Logo.png'

const Navbar = () => {

  const [showNav, setShowNav] = useState(true)

  const handleList = () => {
    setShowNav(!showNav)
  }

  return (
    <div className='bg-blue-300 rounded row-span-6'>
          <p className={`${NavStyle['logo']} h-[200px] flex justify-center items-center bg-blue-900 rounded-t`}><img src={Logo} alt="" className='h-[180px]'/></p>

          {/* Menu button */}
            <div className={`${NavStyle['menu-btn']} bg-blue-900 transition delay-75 ease-in-out mb-1 pl-4 py-2`}>
                  <i onClick={handleList} className="fa-solid fa-bars fa-lg text-white hover:text-lime-400 text-3xl cursor-pointer"></i>
            </div>
          { showNav &&
            <ul className={`${NavStyle['nav-list']} font-semibold`}>
              <li className='hover:text-white hover:bg-blue-800 transition delay-75 ease-in-out cursor-pointer mb-1 pl-4 py-2'><i className="fa-light fa-user-hair mx-3"></i><Link to='/user-profile-'>User profile</Link></li>
              <li className='hover:text-white hover:bg-blue-800 transition delay-75 ease-in-out cursor-pointer my-1 pl-4 py-2'><i className="fa-light fa-pot-food mx-3"></i><Link to='/products-'>Product</Link></li>
              <li className='hover:text-white hover:bg-blue-800 transition delay-75 ease-in-out cursor-pointer my-1 pl-4 py-2'><i className="fa-sharp fa-regular fa-plus mx-3"></i><Link>Add Item</Link></li>
              <li className='hover:text-white hover:bg-blue-800 transition delay-75 ease-in-out cursor-pointer my-1 pl-4 py-2'><i className="fa-light fa-gear mx-3"></i><Link>Settings</Link></li>
              <li className='hover:text-white hover:bg-blue-800 transition delay-75 ease-in-out cursor-pointer my-1 pl-4 py-2'><i className="fa-light fa-brackets-curly mx-3"></i><Link>Developer</Link></li>
              <li className='hover:text-white hover:bg-blue-800 transition delay-75 ease-in-out cursor-pointer my-1 pl-4 py-2'><i className="fa-sharp fa-light fa-arrow-left mx-3"></i><Link to='/admin--'>Logout</Link></li>
          </ul>
          }
    </div>
  )
}

export default Navbar