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
<<<<<<< HEAD
    <div style={backgroundStyle} className='container h-full'>
=======
    <div className='container h-[100%]' style={{ backgroundImage: `url('src/images/BackgroundImage/bg.PNG')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100%', margin: 'auto', width: '100%'}}>
>>>>>>> 416fa8c8d88321bf12c6065b88b70e42053d3434
      <Outlet />
    </div>
  );
};

<<<<<<< HEAD
export default RootLayout;
=======
export default Rootlayout
>>>>>>> 416fa8c8d88321bf12c6065b88b70e42053d3434
