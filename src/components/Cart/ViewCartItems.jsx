import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFoodStore from '../../store/useFoodStore'

const ViewCartItems = () => {
  // call the cart item to view all item purchase
  const {cartItems, totalCost, removeItem, editQuantity} = useFoodStore((state) => state)

  // Navigate to display bill component
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/print-bill')
  }

  return (
    <div className='container'>
      <ul className='p-4 grid gap-2 grid-cols-4 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {cartItems.map((item) => (
          <li 
            className=' p-2 rounded bg-rose-200'
            key={item.id}>
            <img src={item.img} alt={item.name} className='rounded w-[100%] object-cover xs:h-[100px] sm:h-[150px] md:h-[180px] lg:h-[180px] xl:h-[180px]'/>
           <div className='flex justify-around items-center px-2 xs:h-[70px] sm:h-[90px] md:h-[90px] lg:h-[90px] xl:h-[90px]'>
            <div className='font-bold grid p-2 '>
                <small className='text-green-600 xs:text-[8px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[12px]'>{item.name}</small>
                <small className='text-green-600 xs:text-[8px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[12px]'>Price: {item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</small>
                <small className='text-rose-600 xs:text-[8px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[12px]'>Qty: {item.quantity}</small>
                <small className='text-rose-600 xs:text-[8px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[12px]'>$: {item.totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</small>
            </div>
            <div className=' grid grid-cols-2 gap-1'>
                <button onClick={() => {editQuantity(item.id, prompt('Enter new quantity:', item.quantity))}} className='p-1 bg-green-500 text-white font-semibold rounded xs:h-7 sm:h-8 md:h-8 lg:h-8 xl:h-8 xs:w-6 sm:w-10 md:w-10 lg:w-10 xl:w-10'><i className="fa-regular fa-pen-to-square"></i></button>
                <button onClick={() => {removeItem(item.id)}}className='p-1 bg-rose-500 text-white font-semibold rounded xs:h-7 sm:h-8 md:h-8 lg:h-8 xl:h-8 xs:w-6 sm:w-10 md:w-10 lg:w-10 xl:w-10'><i className="fa-regular fa-trash"></i></button>
            </div>
           </div>
          </li>
        ))}
      </ul>
      <footer className='bg-orange-400 py-5 flex justify-evenly sticky bottom-0'>
        <div className='font-bold text-green-700'>Total Cost: {totalCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
        <div className='cursor-pointer'><i className="fa-sharp fa-solid fa-print fa-beat-fade fa-xl text-green-700" onClick={handleNavigate}></i></div>
      </footer>
    </div>
  )
}
export default ViewCartItems