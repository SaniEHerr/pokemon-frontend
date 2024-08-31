import React from 'react'
import Searchbar from '../Searchbar'
import Sidebar from './Sidebar'
import { useLocation } from 'react-router-dom';

const MobileNavbar = ({ isOpen, handleClick, searchTerm, handleSearch, setCurrentPage, sidebarRef }) => {

  const location = useLocation();
  
  return (
    <>
      <div className='bg-white bg-opacity-60 backdrop-filter lg:hidden lg:backdrop-blur-lg w-full sticky top-0 left-0 py-6 px-5 md:px-6 lg:py-8 lg:px-12'>

        <div className="flex flex-row items-center gap-5 justify-between">
          <div
            className={`flex items-center justify-center relative w-[30px] h-[24px] cursor-pointer lg:hidden ${isOpen ? "open opacity-0" : ""}`}
            onClick={handleClick}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          {!location.pathname.includes("/create") && (
            <Searchbar
              searchTerm={searchTerm}
              handleSearch={handleSearch}
            />
          )}
        </div>
        
      </div>

      <Sidebar 
        isOpen={isOpen}
        handleClick={handleClick}
        setCurrentPage={setCurrentPage}
        sidebarRef={sidebarRef}
      />
    </>
  )
}

export default MobileNavbar