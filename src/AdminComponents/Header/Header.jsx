import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-cols-4 gap-2 col-span-4'>
        <div className='bg-blue-900 rounded h-[100px] flex justify-start items-center col-span-4'>
          <p className='border-2 bg-blue-900 h-[90px] w-[99%] text-3xl flex justify-start items-center text-white font-bold pl-4 ml-1 rounded z-20'>Dashboard...</p>
        </div>
        <div className='bg-rose-400 rounded h-[100px]'></div>
        <div className='bg-fuchsia-400 rounded h-[100px]'></div>
        <div className='bg-lime-400 rounded h-[100px]'></div>
        <div className='bg-yellow-400 rounded h-[100px]'></div>
    </div>
  )
}

export default Header