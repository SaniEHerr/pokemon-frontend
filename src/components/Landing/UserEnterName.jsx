
const UserEnterName = ({ userName, setUserName, handleContinue }) => {
  return (
    <div className="bg-white text-black text-center p-8 px-4 md:text-xl md:p-8 border-[3px] transition-all duration-300 sm:border-4 border-[#67657A] bg-opacity-65 backdrop-filter backdrop-blur-md flex flex-col gap-8 max-w-[1280px] font-bold">
      <input 
        type="text" 
        aria-label="Enter your name"
        placeholder="Enter your name" 
        value={userName.toUpperCase()} 
        onChange={(e) => setUserName(e.target.value)} 
        className="font-bold bg-transparent border-2 border-[#67657A] p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#67657A] focus:bg-white text-[#52a5e4] w-full max-w-xs md:max-w-lg mx-auto"
      />
      
      <div className='hover:scale-105 transition-all duration-300'>
        <button 
          onClick={handleContinue} 
          className="bg-white text-[#52a5e4] border-2 border-[#67657A] px-4 py-2 rounded-md transition-all duration-300 lg:text-black lg:bg-opacity-20 lg:hover:bg-opacity-100 lg:hover:text-[#52a5e4]"
        >
          CONTINUE
        </button>
      </div>
    </div>
  )
}

export default UserEnterName