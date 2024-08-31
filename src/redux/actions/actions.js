import {
  GET_ALL_POKEMONS,
  GET_TYPES,
  ORDERED_POKEMONS,
  FILTERED_POKEMONS,
  GET_POKEMON_DETAIL,
  ADD_POKEMON,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SYNC_FAVORITES,
  FILTERED_FAVORITES,
  ORDERED_FAVORITES
} from "../actions-type/actions-types";

import axios from "axios";

export const getAllPokemons = () => {
  return async (dispatch) => {
    const apiResponse = await axios.get("http://localhost:3001/pokemon");
    const pokemonsData = apiResponse.data;

    dispatch({
      type: GET_ALL_POKEMONS,
      payload: pokemonsData,
    });
  };
};

export const getAllTypes = () => {
  return async (dispatch) => {
    const apiResponse = await axios.get("http://localhost:3001/types");
    const pokemonData = apiResponse.data;

    dispatch({
      type: GET_TYPES,
      payload: pokemonData,
    });
  };
};

export const filteredPokemons = (type = "ALL", origin = "ANY") => {
  return { type: FILTERED_POKEMONS, payload: { type, origin } };
};

export const orderedPokemons = (order = "NOORDER") => {
  return { type: ORDERED_POKEMONS, payload: order };
};  

export const getPokemonDetail = (pokemonId) => {
  return async (dispatch) => {
    const apiResponse = await axios.get(
      `http://localhost:3001/pokemon/${pokemonId}`
    );
    const pokemonDetail = apiResponse.data;

    dispatch({
      type: GET_POKEMON_DETAIL,
      payload: pokemonDetail,
    });
  };
};

export const addPokemon = (payload) => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:3001/pokemon", payload);
    dispatch({ type: ADD_POKEMON, payload: response.data });
  };
};

export const filteredFavorites = (type = "ALL", origin = "ANY") => {
  return {
    type: FILTERED_FAVORITES,
    payload: { type, origin }
  };
};

export const orderedFavorites = (order = "NOORDER") => {
  return {
    type: ORDERED_FAVORITES,
    payload: order
  };
};

export const addFavorite = (pokemon) => {
  return {
    type: ADD_FAVORITE,
    payload: pokemon,
  };
};

export const removeFavorite = (pokemonId) => {
  return {
    type: REMOVE_FAVORITE,
    payload: pokemonId,
  };
};

export const syncFavorites = () => {
  return {
    type: SYNC_FAVORITES,
  };
};