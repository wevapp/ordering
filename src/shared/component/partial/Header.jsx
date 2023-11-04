import React, { useState } from 'react'
import Style from './Header.module.css'

// import components
import Nav from '../../../components/Nav/Nav'

const Header = () => {

    // check if the click menu list is click
    const [isClick,  setClick] = useState(false)

    const resetClick = () => {
      setClick(false)
    }

    // check if click
    const handleMenuList = () => {
      setClick(!isClick)
    }

  return (
    <div className='container sticky top-0 z-10'>
    {/* Header with menu bar, welcome tag and cart*/}
    <div
        className='bg-orange-600 flex justify-evenly items-center h-[100px] text-white px-3'
      >
        <i 
          onClick={handleMenuList}
          className="fa-sharp fa-solid fa-bars text-2xl cursor-pointer px-8"></i>

        <p
            className={`${Style['welcome']} text-3xl w-[100%] text-center`}
        ><strong>Welcome to Happy Restaurant</strong>
        </p>
       
        <i 
          // onClick={handleCartItem}
          className="fa-sharp fa-regular fa-cart-shopping text-2xl cursor-pointer relative pt-3 px-8">
            <small
              className='absolute top-0 font-semibold text-center h-[30px] w-[20px] rounded-[50%] text-sm'
            >{/*countItems*/}</small>
        </i>
    </div>
    {isClick && <Nav resetClick={resetClick}/>}
  </div>
  )
}

export default Header