import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

import Error404NotFountBg from '../assets/images/BackGroundPage/Error404NotFountBg.jpg';
import Error404NotFoundImage from '../assets/images/Error404NotFound/Error404NotFound.png'

const Error404NotFound  = () => {

  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    const backgroundImage = new Image();
    backgroundImage.src = Error404NotFountBg;
    backgroundImage.onload = () => {
      setBackgroundLoaded(true);
    };
  }, []);

  return (
    <div 
      className="min-h-screen relative flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed 3md:[background-size:100%_100%] p-6"
      style={{
        backgroundImage: `url(${Error404NotFountBg})`,
        opacity: backgroundLoaded ? 1 : 0, 
        transition: "opacity 0.5s ease", 
      }}
    >
      <div className="fixed inset-0 bg-black opacity-60" />
      <div className='flex flex-col gap-8 justify-center items-center font-bold text-center rounded-lg z-50'>
        <h1 className='text-white text-3xl'>
          ERROR 404 NOT FOUND
        </h1>
        <img src={Error404NotFoundImage} alt="" />
        <div className='flex flex-col gap-6 justify-center items-center text-center'>
          <p className='text-white text-xl'>Couldn't find this page</p>
          <NavLink
            className="px-4 py-3 text-xl bg-white transition-all duration-300 hover:bg-opacity-95 font-bold text-black bg-opacity-65 backdrop-filter backdrop-blur-md"
            to="/home"
          >
            BACK TO HOME
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Error404NotFound