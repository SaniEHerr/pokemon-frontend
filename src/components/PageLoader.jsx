import React from 'react'

import pokeBall from "../assets/loaders/poke2.png"

const PageLoader = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <img className='w-[80px]' src={pokeBall} />
      <p className="text-white font-bold ml-3">
        Loading...
      </p>
    </div>
  )
}

export default PageLoader