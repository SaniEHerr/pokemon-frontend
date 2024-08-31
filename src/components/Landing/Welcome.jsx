import { NavLink } from 'react-router-dom'

const Welcome = ({ isFirstVisit, userName, windowWidth }) => {
  return (
    <div className='bg-white text-black text-center py-4 px-4 border-[3px] transition-all duration-300 sm:border-4 border-[#67657A] font-bold bg-opacity-65 backdrop-filter backdrop-blur-md hover:bg-opacity-95 md:text-xl flex flex-col gap-6 md:gap-8 max-w-[1280px]'>
      <div>
        {isFirstVisit ? (
          <p>
            Welcome <span className='font-bold text-[#52a5e4]'>'{userName.toUpperCase()}'</span>, it's great to see you here. This Pokedex was developed by <span className='text-[#A177DB]'>'<a className='underline hover:scale-110 font-bold text-[#A177DB] cursor-pointer' href="https://www.linkedin.com/in/santiago-herrera-501293239/" target="_blank">SANI</a>'</span> in order to put into practice their knowledge in React, Redux, Tailwind, Node, PostgreSQL. I hope you can learn about Pokemons, enjoy it!
          </p>
        ) : (
          <p>
            Welcome back <span className='font-bold text-[#52a5e4]'>'{userName.toUpperCase()}'</span>! It's great to see you here again. Feel free to keep learning about Pokemons. If you have any questions, i'm here to help you!.
          </p>
        )}
      </div>
    
      {windowWidth < 1280 ? 
        (
          <div className='flex justify-center'>
            <NavLink
              className='font-bold bg-white text-[#52a5e4] border-2 border-[#67657A] px-4 py-2 rounded-md transition-all duration-300'
              to="/home"
            >
              TAP OR CLICK HERE TO START
            </NavLink>
          </div>
        ) : (
          <p className='font-bold'>PRESS ENTER TO START</p>
        )
      }
    </div>
  )
}

export default Welcome