import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// import zustand
import useFoodStore from '../../store/useFoodStore'

const Dessert = () => {
// Variable for input search
const [search, setSearch] = useState('');

// Call addcart
const addCartItem = useFoodStore((state) => state.addCartItem);

// get all items 
const getAllItems = useFoodStore((state) => state.foodItems.items);

// filtered all item with category meat
const filteredDessertItem = getAllItems.filter((item => item.category === 'dessert'));

// let search, if search box is empty, the value will be filtered meat item
const itemsAttempSearch = filteredDessertItem.filter((dessertItem) => dessertItem.name.includes(search.toLowerCase()));

// add to cart items
const handleAddCart = (item) => {
  addCartItem(item)
}

return (
  <div className=''>
    <search className='flex justify-end px-4 pt-2 sticky top-24'>
      <input 
        type="text" 
        value={search}
        placeholder='Find my Food'
        onChange={(e) => setSearch(e.target.value)}
        className='w-64 px-3 py-1 rounded'
      />
    </search>
    <ul className='p-4 grid gap-4 grid-cols-4 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {itemsAttempSearch.map((dessertItem) => (
        <li
          className='border p-2 rounded h-[250px] bg-slate-200' 
          key={dessertItem.id}>
            <Link to={`/main/${dessertItem.id}`}><img src={dessertItem.img} alt={dessertItem.name} className='rounded h-[180px] w-[100%] object-cover cursor-pointer' /></Link>
            <footer className='h-[60px] flex justify-between items-center px-4'>
              <div className='font-bold grid'>
                <small className='text-green-600'>{dessertItem.name}</small>
                <small className='text-rose-600'>$: {Number(dessertItem.price).toLocaleString(undefined, { minimumFractionDigits: 2 })}</small>
              </div>
              <div>
                <i 
                  onClick={() => handleAddCart(dessertItem)}
                  className="fa-solid fa-cart-shopping fa-beat text-orange-600 fa-lg hover:text-green-600 cursor-pointer"></i>
              </div>
            </footer>
          </li>
      ))}
    </ul>
  </div>
)
}

export default Dessert