import React from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  const backgroundStyle = {
    backgroundImage: "url('src/images/BackgroundImage/bg.PNG')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    margin: 'auto',
    width: '100%'
  };

  return (
    <div style={backgroundStyle} className='container h-full'>
      <Outlet />
    </div>
  );
};

export default RootLayout;
