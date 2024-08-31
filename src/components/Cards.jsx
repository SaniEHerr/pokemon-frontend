import Card from "./Card";

const Cards = ({ pokemons }) => {

  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 sm:gap-4 lg:gap-5 px-5 lg:px-0">
      {
        pokemons?.map((pokemon) => 
          <Card
            key={pokemon.id} 
            pokemon={pokemon} 
          />
        )
      }
    </div>
  )
};

export default Cards;