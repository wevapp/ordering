import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = ({ resetClick }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleSetActiveLink = (path) => {
    setActiveLink(path);
    resetClick(); // Call resetClick if needed when a link is clicked
  };

  return (
    <div className='container bg-blue-100 transition delay-300 duration-300 ease-in-out z-10'>
      <ul className='px-16 pb-4'>
        <li className='border-b-4 border-slate-100 text-center font-bold py-2 flex'>
          <Link to='/login'>
            <i className="fa-solid fa-square-arrow-left fa-2xl hover:text-orange-500"></i>
          </Link>
          <p className='flex-initial w-[100%] mx-2'>CATEGORIES</p>
        </li>
        <li className='border-b-4 justify-evenly cursor-pointer font-semibold border-slate-100 py-2 xs:grid sm:flex md:flex lg:flex xl:flex'>
          <small
            className={`hover:bg-orange-100 py-1 w-[400px] text-center transition delay-150 ease-in-out rounded ${
              activeLink === '/main' ? 'text-green-500' : ''
            }`}
          >
            <Link onClick={() => handleSetActiveLink('/main')} to='/main'>Meat</Link>
          </small>
          <small
            className={`hover:bg-orange-100 py-1 w-[400px] text-center transition delay-150 ease-in-out rounded ${
              activeLink === '/rice' ? 'text-green-500' : ''
            }`}
          >
            <Link onClick={() => handleSetActiveLink('/rice')} to='/rice'>Rice</Link>
          </small>
          <small
            className={`hover:bg-orange-100 py-1 w-[400px] text-center transition delay-150 ease-in-out rounded ${
              activeLink === '/juice' ? 'text-green-500' : ''
            }`}
          >
            <Link onClick={() => handleSetActiveLink('/juice')} to='/juice'>Juices</Link>
          </small>
          <small
            className={`hover:bg-orange-100 py-1 w-[400px] text-center transition delay-150 ease-in-out rounded ${
              activeLink === '/soda' ? 'text-green-500' : ''
            }`}
          >
            <Link onClick={() => handleSetActiveLink('/soda')} to='/soda'>Soda</Link>
          </small>
          <small
            className={`hover:bg-orange-100 py-1 w-[400px] text-center transition delay-150 ease-in-out rounded ${
              activeLink === '/dessert' ? 'text-green-500' : ''
            }`}
          >
            <Link onClick={() => handleSetActiveLink('/dessert')} to='/dessert'>Dessert</Link>
          </small>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
