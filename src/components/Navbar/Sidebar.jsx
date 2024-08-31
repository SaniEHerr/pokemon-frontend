import FilterAmdOrder from "../FilterAmdOrder";

import HomeIcon from "../../assets/icons/HomeIcon.png"
import FavoriteIcon from "../../assets/icons/FavoriteIcon.png"
import CreateIcon from "../../assets/icons/CreateIcon.png"

import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, handleClick, setCurrentPage }) => {

  const location = useLocation();
  
  return (
    <div className={`fixed top-0 left-0 min-h-full w-0 overflow-hidden rounded-tr-[.7rem] rounded-br-[.7rem] transition-[width] duration-[0.3s] z-[1000] bg-white bg-opacity-70 backdrop-filter flex flex-col ${isOpen ? 'open flex flex-col w-[270px] xs:w-[315px] md:w-[350px]' : ''}`}>
      
      <div className="flex flex-col gap-10">
        {/* <div className="flex flex-col gap-7 px-5 pt-9"> */}
        <div className={`${location.pathname.includes("/create") ? 'pt-6' : 'pt-9'} flex flex-col gap-7 px-5 pt-9" `}>
          <div className="flex items-end justify-end">
            <div
              className={`flex items-center justify-center relative w-[30px] h-[24px] cursor-pointer lg:hidden ${isOpen ? '' : 'opacity-0'}`}
              onClick={handleClick}
            >
              <div className="line-close"></div>
              <div className="line-close"></div>
              <div className="line-close"></div>
            </div>
          </div>
          
          {!location.pathname.includes("/create") && (
            <FilterAmdOrder setCurrentPage={setCurrentPage} />
          )}
        </div>

        <div className="flex flex-col gap-3 px-5 pb-9">
          <div className="flex flex-col text-center justify-center items-center ">
            <NavLink to="/home" className='text-black text-nowrap bg-white p-3 border-[3px] border-black text-sm xs:text-base font-bold flex flex-row gap-2'>
              HOME <img src={HomeIcon} className="w-6" alt="" />
            </NavLink>
          </div>

          <div className="flex flex-col  text-center justify-center items-center ">
            <NavLink to="/favorites" className='text-black text-nowrap bg-white p-3 border-[3px] border-black text-sm xs:text-base font-bold flex flex-row gap-2'>
              FAVORITES <img src={FavoriteIcon} className="w-6" alt="" />
            </NavLink>
          </div>

          <div className="flex flex-col  text-center justify-center items-center ">
            <NavLink to="/create" className='text-black text-nowrap bg-white p-3 border-[3px] border-black text-sm xs:text-base font-bold flex flex-row gap-2 items-center justify-center'>
              <div className="flex flex-col items-center justify-center">
                <span>CREATE</span>  
                <span>POKEMON</span> 
              </div>

              <img src={CreateIcon} className="w-7" alt="" />

            </NavLink>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;