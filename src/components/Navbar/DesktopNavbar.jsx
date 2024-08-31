import Searchbar from "../Searchbar"
import FilterAmdOrder from "../FilterAmdOrder"

import { NavLink, useLocation } from "react-router-dom"

import HomeIcon from "../../assets/icons/HomeIcon.png"
import FavoriteIcon from "../../assets/icons/FavoriteIcon.png"
import CreateIcon from "../../assets/icons/CreateIcon.png"

const DesktopNavbar = ({ handleSearch, searchTerm, setCurrentPage }) => {

  const location = useLocation();

  return (
    <div className="bg-white bg-opacity-60 backdrop-filter">
      <div className='hidden lg:flex lg:flex-col lg:gap-10 lg:max-w-[1920px] lg:mx-auto lg:backdrop-blur-lg w-full sticky top-0 left-0 py-6 px-6 lg:py-8 lg:px-12'>
        <div className={`${location.pathname.includes("/create") ? 'mx-auto' : ''} hidden lg:flex flex-row items-center justify-between`}>

          {!location.pathname.includes("/create") && (
            <div className="flex flex-row items-center justify-center gap-4">
              <Searchbar
                searchTerm={searchTerm}
                handleSearch={handleSearch}
              />
            </div>
          )}

          <div className="flex flex-row items-center justify-center gap-4">
            <NavLink 
              to="/home" 
              className='text-black bg-white p-3 border-[3px] border-black text-base font-bold flex flex-row items-center gap-2'
            >
              HOME <img src={HomeIcon} className="w-6" alt="" />
            </NavLink>

            <NavLink 
              to="/favorites" 
              className='text-black bg-white p-3 border-[3px] border-black text-base font-bold flex flex-row items-center gap-2'
            >
              FAVORITES <img src={FavoriteIcon} className="w-6" alt="" />
            </NavLink>
            
            <NavLink 
              to="/create" 
              className='text-black bg-white p-3 border-[3px] border-black text-base font-bold text-center flex flex-row items-center gap-2'
            >
              CREATE POKEMON <img src={CreateIcon} className="w-5" alt="" />
            </NavLink>
          </div>

        </div>

        {!location.pathname.includes("/create") && (
          <div className="flex items-center justify-center">
            <FilterAmdOrder setCurrentPage={setCurrentPage} />
          </div>
        )}
      </div>

    </div>
  )
}

export default DesktopNavbar