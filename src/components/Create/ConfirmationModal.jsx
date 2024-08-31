
const ConfirmationModal = ({handleConfirmCreation, windowWidth, closeConfirmationModal}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm bg-opacity-50 bg-gray-900 px-4">
      <div className="bg-white p-4 md:p-6 2xl:p-8 rounded-lg text-center border-[6px] border-[#67657A]">
        <h2 className="text-lg md:text-xl 2xl:text-2xl font-bold mb-4">CONFIRMATION</h2>
        <p className="text-base md:text-lg mb-4 max-w-[515px]">Are you sure you want to create this Pokemon?</p>
        <div className="flex justify-center gap-4">
          {windowWidth < 1280 ? 
            (
              <button 
                onClick={handleConfirmCreation} 
                className="bg-white bg-opacity-65 text-[#52a5e4] border-2 border-transparent border-[#52a5e4] transition-all duration-[300] font-bold px-4 py-2 rounded outline-none shadow-outline text-base 2xl:text-xl"
              >
                YES
              </button>
            ) : (
              <button 
                onClick={handleConfirmCreation} 
                className="bg-white bg-opacity-65 text-black transition-all duration-[300] font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline border-2 border-transparent hover:border-[#52a5e4] hover:text-[#52a5e4] text-base 2xl:text-xl"
              >
                YES
              </button>
            )
          }
          <button 
            onClick={closeConfirmationModal} 
            className="bg-red-400 text-white hover:bg-red-600 transition duration-300 font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline text-base 2xl:text-xl"
          >
            NO
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal