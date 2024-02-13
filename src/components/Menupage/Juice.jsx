import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// import zustand
import useFoodStore from '../../store/useFoodStore'

const Juice = () => {
  
  // Variable for input search
  const [search, setSearch] = useState('');

  // Call addcart
  const addCartItem = useFoodStore((state) => state.addCartItem);

  // get all items 
  const getAllItems = useFoodStore((state) => state.foodItems.items);

  // filtered all item with category meat
  const filteredJuiceItem = getAllItems.filter((item => item.category === 'juice'));

  // let search, if search box is empty, the value will be filtered meat item
  const itemsAttempSearch = filteredJuiceItem.filter((juiceItem) => juiceItem.name.includes(search.toLowerCase()));

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
      <ul className='p-4 grid gap-4 grid-cols-4 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {itemsAttempSearch.map((juiceItem) => (
          <li
            className='p-2 rounded bg-slate-100 xs:h-[150px] sm:h-[200px] md:h-[230px] lg:h-[230px] xl:h-[230px]' 
            key={juiceItem.id}>
              <Link to={`/desc/${juiceItem.id}`}><img src={juiceItem.img} alt={juiceItem.name} className='rounded w-[100%] object-cover cursor-pointer xs:h-[100px] sm:h-[150px] md:h-[180px] lg:h-[180px] xl:h-[180px]' /></Link>
              <footer className='flex justify-between items-center p-4 xs:h-[20px] sm:h-[10px] md:h-[40px] lg:h-[40px] xl:h-[40px]'>
                <div className='font-bold grid'>
                  <small className='text-green-600'>{juiceItem.name}</small>
                  <small className='text-rose-600'>$: {Number(juiceItem.price).toLocaleString(undefined, { minimumFractionDigits: 2 })}</small>
                </div>
                <div>
                  <i 
                    onClick={() => handleAddCart(juiceItem)}
                    className="fa-solid fa-cart-shopping fa-beat text-orange-600 fa-lg hover:text-green-600 cursor-pointer"></i>
                </div>
              </footer>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Juice