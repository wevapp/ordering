import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StyleHeader from './Header.module.css'

// import Zustand
import useFoodStore from '../../../store/useFoodStore'

// import components
import Nav from '../../../components/Nav/Nav'

const Header = () => {

    const navigateToDisplayBill = useNavigate()

    // call countItems from zustand 
    const countItems = useFoodStore((state)=>state.countItems)

    // check if the click menu list is click
    const [isClick,  setClick] = useState(false)

    const resetClick = () => {
      setClick(false)
    }

    // check if click
    const handleMenuList = () => {
      setClick(!isClick)
    }

    // function to add Cart
    const handleCartItem = () => {
      navigateToDisplayBill('/cartitems')
    }

  return (
    <div className={`${StyleHeader['header']} bg-orange-400 container sticky top-0 z-10`}>
    {/* Header with menu bar, welcome tag and cart*/}
    <div
        className='flex justify-evenly items-center h-[100px] text-white px-3 py-6'
      >
        <i 
          onClick={handleMenuList}
          className="fa-sharp fa-solid fa-bars fa-beat-fade text-4xl cursor-pointer px-8"></i>

        <p
            className={`${StyleHeader['welcome']} text-3xl w-[100%] text-center`}
        ><strong>Welcome to Happy Restaurant</strong>
        </p>
       
        <i 
          onClick={handleCartItem}
          className="fa-sharp fa-regular fa-cart-shopping fa-beat-fade text-4xl  cursor-pointer relative pt-3 px-8">
            <small
              className='absolute top-0 font-semibold text-center h-[30px] w-[20px] rounded-[50%] text-sm'
            >{countItems}</small>
        </i>
    </div>
    {isClick && <Nav resetClick={resetClick}/>}
  </div>
  )
}

export default Header