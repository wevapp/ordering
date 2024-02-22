import React from 'react';
import { Outlet } from 'react-router-dom';
import useFoodStore from '../../../store/useFoodStore';

const RootLayout = () => {
  const bgImg = useFoodStore((state) => state.background)
  

  return (
    <div style={{backgroundImage: `url(${bgImg.img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100%', margin: 'auto', width: '100%'}} className='container h-full'>
      <Outlet />
    </div>
  );
};

export default RootLayout;
