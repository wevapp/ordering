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
    <div className='container'>
      <ul className='w-[400px] h-[450px]'>
        <li>
          <img src={selectedItem.img} alt={selectedItem.name} />
        </li>
        <li>
          {selectedItem.name}
        </li>
        <li>
          {selectedItem.description}
        </li>
      </ul>
    </div>
  )
}

export default MeatDescription