import { useEffect, useRef, useState } from "react";

import DesktopNavbar from './Navbar/DesktopNavbar';
import MobileNavbar from './Navbar/MobileNavbar';
import MobileBackgroundPanel from './Navbar/MobileBackgroundPanel';

const Navbar = ({ handleSearch, searchTerm, setCurrentPage }) => {

  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
        document.body.classList.remove('overflow-hidden');
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove('overflow-hidden');
    };
  }, [sidebarRef]);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  return (
    <>
      <div className='relative w-full'>
        
        {isOpen && (
          <MobileBackgroundPanel
            onClick={handleClick}
          />
        )}

        <DesktopNavbar 
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          setCurrentPage={setCurrentPage}
        />

        <MobileNavbar
          isOpen={isOpen}
          handleClick={handleClick}
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          setCurrentPage={setCurrentPage}
          sidebarRef={sidebarRef}
        />

      </div>
    </>
  );
};

export default Navbar;