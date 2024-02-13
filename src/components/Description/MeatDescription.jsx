import React from 'react'
import { useParams } from 'react-router-dom'

// import zustand
import useFoodStore from '../../store/useFoodStore'

const MeatDescription = () => {
  const { id } = useParams()

  // get all items 
  const getAllItems = useFoodStore((state) => state.foodItems.items)

  // display selected item using find
  const selectedItem = getAllItems.find((item => item.id === parseInt(id, 10)))

  return (
    <div className='container h-full p-20 flex flex-col justify-center items-center'>
      <ul className='bg-slate-200 mt-4 p-2 rounded xs:w-[200px] sm:w-[400px] md:w-[400px] lg:w-[400px] xl:w-[400px]'>
        <li>
          <img src={selectedItem.img} alt={selectedItem.name} className='w-full rounded' />
        </li>
        <li>
          <strong className='text-green-600'>{selectedItem.name}</strong>
        </li>
        <li>
          <small className='text-orange-500 font-semibold'>{selectedItem.description}</small>
        </li>
      </ul>
    </div>
  )
}

export default MeatDescription