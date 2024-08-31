import React from 'react'

import NotFoundPokemon from "../assets/images/NotFoundPokemon/NotFoundPokemon.png"

const NotPokemonFound = () => {
  return (
    <div className="flex flex-col gap-10 max-w-[1100px] items-center p-5">
      <p className="text-lg md:text-xl font-bold">
        Oh! It seems your Pokedex is reporting a blank slate... No Pokemons were found matching with your search criteria. Try it again!
      </p>
      <img className="w-40" src={NotFoundPokemon} alt="" />
    </div>
  )
}

export default NotPokemonFound