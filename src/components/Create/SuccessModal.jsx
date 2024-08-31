import React from 'react'

const SuccessModal = ({closeSuccessModalAndRedirect, closeSuccessModal}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm bg-opacity-50 bg-gray-900 px-4">
      <div className="bg-white p-4 md:p-6 2xl:p-8 rounded-lg text-center border-[6px] border-[#67657A]">
        <h2 className="text-lg md:text-xl 2xl:text-2xl font-bold mb-4">POKEMON CREATED!</h2>
        <p className="text-base md:text-lg mb-4 max-w-[615px]">Your Pokemon has been created successfully!</p>
        <div className="flex flex-col xs:flex-row justify-center gap-4">
          <button 
            onClick={closeSuccessModalAndRedirect} 
            className="bg-[#20496a] lg:bg-[#4f7ea4] hover:bg-[#20496a] transition-all duration-300 text-white text-base 2xl:text-xl font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline"
          >
            GO HOME
          </button>
          <button 
            onClick={closeSuccessModal} 
            className="bg-[#67657A] lg:bg-[#9694a7] hover:bg-[#67657A] transition-all duration-300 text-white text-base 2xl:text-xl font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline"
          >
            CONTINUE CREATING
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal