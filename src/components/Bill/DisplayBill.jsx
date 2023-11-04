import React from 'react'
import useFoodStore from '../../store/useFoodStore'

const DisplayBill = () => {
  
  // call the cart item to view all item purchase
  const cartItems = useFoodStore((state) => state.cartItems)
console.log(cartItems)
  return (
    <div className='container'>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.name} />
            {item.name}
            {item.quatity}
            {item.price}
            {item.totalPrice}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DisplayBill