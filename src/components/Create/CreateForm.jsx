import { NavLink } from 'react-router-dom';
import Select from 'react-select';

const CreateForm = ({handleSubmit, handleChange, handleSelect, handleDelete, openConfirmationModal, isSubmitDisabled, input, error, types}) => {
  return (
    <form 
      className='flex flex-col gap-10 text-white text-xs xs:text-sm md:text-base xl:text-base font-bold bg-black bg-opacity-60 backdrop-filter p-4 md:p-8 rounded-xl'
      onSubmit= {(e) => handleSubmit(e)}
    >
      {/* Title y Stats */}
      <div className='flex flex-col gap-8'>
        {/* Title */}
        <h1 className='text-center text-sm xs:text-base md:text-lg lg:text-xl'>
          CREATE YOUR POKEMON
        </h1>

        {/* Form */}
        <div 
          className='flex flex-col gap-5 sm:gap-4'
        >

          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-3'>
            <label>NAME: </label>
            <input
              type="text"
              value={input.name}
              name= "name"
              onChange={e=>{handleChange(e)}}
              className='text-white bg-transparent border-2 rounded-md p-1'
            />
          </div>
          {error.name && (<p className='text-red-400 text-base font-bold max-w-[607px]'>{error.name}</p>)}

          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-3'>
            <label>HP: </label>
            <input
              type="text"
              value={input.hp}
              name="hp"
              onChange={handleChange}
              className='text-white bg-transparent border-2 rounded-md p-1'
            />
          </div>
          {error.hp && (<p className='text-red-400 text-base font-bold max-w-[607px]'>{error.hp}</p>)}

          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-3'>
            <label>ATTACK: </label>
            <input
              type="text"
              value={input.attack}
              name="attack"
              onChange={handleChange}
              className='text-white bg-transparent border-2 rounded-md p-1'
            />
          </div>
          {error.attack && (<p className='text-red-400 text-base font-bold max-w-[607px]'>{error.attack}</p>)}

          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-3'>
            <label>DEFENSE: </label>
            <input
              type="text"
              value={input.defense}
              name="defense"
              onChange={handleChange}
              className='text-white bg-transparent border-2 rounded-md p-1'
            />
          </div>
          {error.defense && (<p className='text-red-400 text-base font-bold max-w-[607px]'>{error.defense}</p>)}

          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-3'>
            <label>SPEED: </label>
            <input
              type="text"
              value= {input.speed}
              name="speed"
              onChange={handleChange}
              className='text-white bg-transparent border-2 rounded-md p-1'
            />
          </div>
          {error.speed && (<p className='text-red-400 text-base font-bold max-w-[607px]'>{error.speed}</p>)}

          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-3'>
            <label>HEIGHT: </label>
            <input
              type="text"
              value={input.height}
              name="height"
              onChange={handleChange}
              className='text-white bg-transparent border-2 rounded-md p-1'
            />
          </div>
          {error.height && (<p className='text-red-400 text-base font-bold max-w-[607px]'>{error.height}</p>)}

          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-3'>
            <label>WEIGHT: </label>
            <input
              type="text"
              value={input.weight}
              name="weight"
              onChange={handleChange}
              className='text-white bg-transparent border-2 rounded-md p-1'
            />
          </div>
          {error.weight && (<p className='text-red-400 text-base font-bold max-w-[607px]'>{error.weight}</p>)}

          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-3'>
            <label>IMAGE: </label>
            <input
              type="text"
              value={input.image}
              name="image"
              onChange={e=>{handleChange(e)}}
              className='text-white bg-transparent border-2 rounded-md p-1'
            />
          </div>
          {error.image && (<p className='text-red-400 text-base font-bold max-w-[607px]'>{error.image}</p>)}

          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-3'>
            <label>DESCRIPTION: </label>
            <input
              type="text"
              value={input.description}
              name="description"
              onChange={handleChange}
              className='text-white bg-transparent border-2 rounded-md p-1'
            />
          </div>
          {error.description && (<p className='text-red-400 text-base font-bold max-w-[607px]'>{error.description}</p>)}

        </div>
      </div>

      {/* Select Types */}
      <div className='flex flex-col gap-5'>
        <div className='flex flex-row items-center justify-center gap-2 xs:gap-5'>
          <p className='text-center'>Select your TYPE/S</p>
          <Select
            onChange={(selectedOption) => handleSelect(selectedOption.value)}
            options={types.filter(type => type.name !== "All Types").map(type => ({
              value: type.id,
              label: type.name.toUpperCase()
            }))}
            formatOptionLabel={(option) => (
              <>{option.label.charAt(0).toUpperCase() + option.label.slice(1)}</>
            )}
            styles={{
              control: (provided, state) => ({
                ...provided,
                border: '1px solid #000',
                borderRadius: '4px',
                boxShadow: state.isFocused ? '0 0 0 1px #000' : 'none',
                cursor: 'pointer',
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected ? '#084A8C' : 'white',
                color: state.isSelected ? 'white' : 'black',
                ':active': {
                  backgroundColor: '#084A8C',
                  color: 'white'
                },
                ':hover': {
                  backgroundColor: '#709ac3',
                  color: 'white'
                }
              }),
              menuList: (provided, state) => ({
                ...provided,
                '::-webkit-scrollbar': {
                  width: '6px',
                },
                '::-webkit-scrollbar-track': {
                  backgroundColor: '#f1f1f1',
                  borderRadius: '4px',
                },
                '::-webkit-scrollbar-thumb': {
                  backgroundColor: '#084A8C',
                  borderRadius: '4px',
                }
              }),
              indicatorsContainer: (prevStyle, state) =>  ({
                ...prevStyle,
                display: 'none',
                '@media (min-width: 1024px)': {
                  display: 'flex',
                },
              }),
            }}
          />
        </div>

        <div className='flex flex-row justify-center items-center gap-5'>
          {
            input.type.map((typeId)=>{
              const selectedType = types.find((type) => type.id === typeId);
              return (
                <div className='flex items-center justify-center flex-row gap-2' key={typeId}>
                  <h5>{selectedType.name.toUpperCase()}</h5>
                  <button 
                    onClick={(e) => {handleDelete(e, typeId)}}
                    className="flex items-center justify-center text-[13px] p-2 w-6 h-6 rounded-full bg-red-400 text-white hover:bg-red-600 transition duration-300"
                  >
                    X
                  </button>
                </div>
              );
            })
          }
        </div>

        <div className='flex justify-center'>
          <p className='text-[9px] xs:text-[11px] md:text-[13px] xl:text-sm'>NOTE: You can only select 1 or 2 types!</p>
        </div>
      </div>
      
      {/* Call to Action Buttons */}
      <div className='flex flex-row gap-5 justify-center'>
        <button 
          type="submit" 
          onClick={openConfirmationModal}
          disabled={isSubmitDisabled}
          className='bg-white text-black text-center p-[6px] xs:p-2 2xs:py-3 md:px-4 md:py-4 border-[3px] sm:border-4 border-[#67657A] disabled:bg-red-400 disabled:text-white transition-all duration-300'
        >
          CREATE YOUR POKEMON
        </button>

        <NavLink
          to={"/home"} 
          className="bg-white text-black text-center p-[6px] xs:p-2 2xs:py-3 md:px-4 md:py-4 border-[3px] transition-all duration-300 sm:border-4 border-[#67657A] bg-opacity-65 backdrop-filter backdrop-blur-md hover:bg-opacity-95"
        >
          BACK TO HOME
        </NavLink>
      </div>
    </form>
  )
}

export default CreateForm