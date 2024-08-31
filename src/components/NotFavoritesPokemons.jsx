import React from 'react'
import NotFoundPokemon from "../assets/images/NotFoundPokemon/NotFoundPokemon.png"

const NotFavoritesPokemons = () => {
  return (
    <div className="flex flex-col gap-10 max-w-[1100px] items-center p-5">
      <p className="text-lg md:text-xl font-bold">
        Looks like your Poké Ball is feeling a bit light, Trainer! Your Pokédex is still empty with no Pokemon added to your favorites yet. Let's start catching them to fill up your favorites roster and complete your collection!
      </p>
      <img className="w-40" src={NotFoundPokemon} alt="" />
    </div>
  )
}

export default NotFavoritesPokemons