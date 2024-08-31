import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 px-5 py-4 mt-7 text-center bg-black w-full bg-opacity-60 backdrop-filter text-white font-bold text-sm lg:text-base'>
      <p>Made with love 💕 by Sani</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
        Check out my social media
        <div className='flex flex-row gap-1'>
          <a href="https://www.linkedin.com/in/santiago-herrera-501293239/"> <Icon icon="mdi:linkedin" width="45" height="45" /> </a>
          <a href="https://github.com/SaniEHerr"> <Icon icon="mdi:github" width="45" height="45" /> </a>
        </div>
      </div>
    </div>
  )
}

export default Footer