import randomPokemon from "../../assets/images/RandomPokemon/RandomPokemon.png"

const RealtimeCard = ({input, types}) => {
  return (
    <div className='flex flex-col items-center gap-8 text-white text-xs xs:text-sm md:text-base xl:text-base font-bold bg-black bg-opacity-60 backdrop-filter p-4 md:p-8 rounded-xl'>
    {/* Title */}
      <h1 className='text-center text-sm xs:text-base md:text-lg lg:text-xl'>
        REAL TIME GENERATION
      </h1>

      {/* Card Generation */}
      <div className="bg-[#756d6d] bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 py-6 rounded-lg flex flex-col gap-2 items-center justify-around cursor-pointer text-white w-[222px] h-[286.8px] lg:h-auto">
        
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-sm font-bold md:text-base text-center">{input.name ? input.name.toUpperCase() : "???????"}</h3>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img
                className="w-[130px] lg:w-[190px] img transition duration-[0.4s]"
                src={input.image ? input.image : randomPokemon}
                onLoad={() => setIsImageLoaded(false)}
              />

              <div className="flex flex-row gap-5 justify-center items-center">
                {input.type.map((typeId) => {
                  const selectedType = types.find((type) => type.id === typeId);
                  return (
                    <div className="flex flex-col items-center justify-center gap-3" key={typeId}>
                      <img
                        src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${selectedType.name.toLowerCase()}.svg`}
                        className="w-[2rem] h-auto object-cover rounded-full transition-all duration-[0.5s]"
                        alt={selectedType.name}
                      />
                      <h4 className="font-bold text-xs">{selectedType.name.toUpperCase()}</h4>
                    </div>
                  );
                })}

                {!input.type.length && (
                  <div className="flex flex-col items-center justify-center gap-3">
                    <img
                      src="https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/normal.svg"
                      className="w-[2rem] h-auto object-cover rounded-full transition-all duration-[0.5s]"
                      alt="Normal Type"
                    />
                    <h4 className="font-bold text-xs">????</h4>
                  </div>
                )}

              </div>
            </div>
        </div>

      </div>

      {/* Stats */}
      <div className='flex flex-col 1/2xs:flex-row gap-6'>
        <div className='flex flex-col gap-2 items-center'>
          <span>HP: {input.hp ? input.hp : <span className='font-normal'>???</span>}</span>
          <span>ATTACK: {input.attack ? input.attack : <span className='font-normal'>???</span>}</span>
          <span>DEFENSE: {input.defense ? input.defense : <span className='font-normal'>???</span>}</span>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <span>SPEED: {input.speed ? input.speed : <span className='font-normal'>???</span>}</span>
          <span>HEIGHT: {input.height ? input.height : <span className='font-normal'>???</span>}</span>
          <span>WEIGHT: {input.weight ? input.weight : <span className='font-normal'>???</span>}</span>
        </div>
      </div>

      {/* Description */}
      <div className='max-w-[500px]'>
        {
          input.description ? input.description : <span className='font-normal'>
            ????? ????? ????? ??? ???? ??????????? ????? ?? ??? ???? ????.
          </span>
        }
      </div>
    </div>
  )
}

export default RealtimeCard