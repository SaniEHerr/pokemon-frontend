import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import LandingBg from '../assets/images/BackGroundPage/LandingBg.jpg';
import UserEnterName from '../components/Landing/UserEnterName';
import Welcome from '../components/Landing/Welcome';

const Landing = () => {

  const navigate = useNavigate();

  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [isFirstVisit, setIsFirstVisit] = useState(!localStorage.getItem('visitedBefore'));
  const [showWelcome, setShowWelcome] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const landingRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (!isFirstVisit) {
      setShowWelcome(true);
      landingRef.current.focus();
    }
  }, [isFirstVisit]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (showWelcome) {
      landingRef.current.focus();
    }
  }, [showWelcome]);

  useEffect(() => {
    const backgroundImage = new Image();
    backgroundImage.src = LandingBg;
    backgroundImage.onload = () => {
      setBackgroundLoaded(true);
    };
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && showWelcome) {
      navigate('/home');
    }
  };

  const handleContinue = () => {
    if (userName.trim() !== '') {
      localStorage.setItem('userName', userName);
      localStorage.setItem('visitedBefore', true);
      setShowWelcome(true);
    }
  };

  return (
    <div 
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat bg-fixed 3md:[background-size:100%_100%] p-3 bgLanding" 
      style={{
        backgroundImage: `url(${LandingBg})`,
        opacity: backgroundLoaded ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      ref={landingRef}
    >
      {!showWelcome ? (
        <UserEnterName
          userName={userName}
          setUserName={setUserName}
          handleContinue={handleContinue}
        />
      ) : (
        <Welcome 
          isFirstVisit={isFirstVisit} 
          userName={userName} 
          windowWidth={windowWidth} 
        />
      )}
    </div>
  );
};

export default Landing;