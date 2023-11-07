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
      <ul className='p-4 grid gap-2 grid-cols-4 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {cartItems.map((item) => (
          <li 
            className='border p-2 rounded bg-rose-200'
            key={item.id}>
            <img src={item.img} alt={item.name} className='rounded h-[180px] w-[100%] object-cover'/>
           <div className='flex justify-between items-center px-2'>
            <div className='font-bold grid p-2'>
                <small className='text-green-600'>{item.name}</small>
                <small className='text-green-600'>Price: {item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</small>
                <small className='text-rose-600'>Qty: {item.quantity}</small>
                <small className='text-rose-600'>$: {item.totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</small>
            </div>
            <div>
                <button onClick={() => {editQuantity(item.id, prompt('Enter new quantity:', item.quantity))}} className='px-3 mr-1 py-1 bg-green-500 text-white font-semibold rounded'>Edit</button>
                <button onClick={() => {removeItem(item.id)}}className='px-3 py-1 bg-rose-500 text-white font-semibold rounded'>Remove</button>
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