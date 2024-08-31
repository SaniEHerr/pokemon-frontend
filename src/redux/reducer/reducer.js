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
  ORDERED_FAVORITES,
} from "../actions-type/actions-types";

const initialState = {
  pokemons          : [],
  types             : [],
  filteredPokemons  : [],
  orderedPokemons   : [],
  pokemonDetail     : [],
  favorites         : [],
  filteredFavorites : [],
  orderedFavorites  : [],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(pokemon => pokemon.id !== action.payload),
      };

    case SYNC_FAVORITES:
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      return {
        ...state,
        favorites: storedFavorites,
      };

    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case GET_TYPES: {
      return {
        ...state,
        types: action.payload,
      };
    }

    case FILTERED_POKEMONS: {
      const { type, origin } = action.payload;

      let filteredPokemons = state.pokemons;

      if (origin === "API") {

        if (type !== "ALL") {
          filteredPokemons = state.pokemons.filter(
            (pokemon) =>
              pokemon.types.includes(type) && Number.isInteger(pokemon.id)
          );
        } else {
          filteredPokemons = state.pokemons.filter((pokemon) =>
            Number.isInteger(pokemon.id)
          );
        }
      } else if (origin === "DATABASE") {
        if (type !== "ALL") {
          filteredPokemons = state.pokemons.filter(
            (pokemon) =>
              pokemon.types.includes(type) && !Number.isInteger(pokemon.id)
          );
        } else {
          filteredPokemons = state.pokemons.filter(
            (pokemon) => !Number.isInteger(pokemon.id)
          );
        }
      } else if (origin === "ANY") {
        if (type !== "ALL") {
          filteredPokemons = state.pokemons.filter((pokemon) =>
            pokemon.types.includes(type)
          );
        }
      }

      return {
        ...state,
        filteredPokemons,
      };
    }

    case FILTERED_FAVORITES: {
      const { type, origin } = action.payload;

      let filteredFavorites = state.favorites;

      if (origin === "API") {

        if (type !== "ALL") {
          filteredFavorites = state.favorites.filter(
            (pokemon) =>
              pokemon.types.includes(type) && Number.isInteger(pokemon.id)
          );
        } else {
          filteredFavorites = state.favorites.filter((pokemon) =>
            Number.isInteger(pokemon.id)
          );
        }
      } else if (origin === "DATABASE") {
        if (type !== "ALL") {
          filteredFavorites = state.favorites.filter(
            (pokemon) =>
              pokemon.types.includes(type) && !Number.isInteger(pokemon.id)
          );
        } else {
          filteredFavorites = state.favorites.filter(
            (pokemon) => !Number.isInteger(pokemon.id)
          );
        }
      } else if (origin === "ANY") {
        if (type !== "ALL") {
          filteredFavorites = state.favorites.filter((pokemon) =>
            pokemon.types.includes(type)
          );
        }
      }

      return {
        ...state,
        filteredFavorites,
      };
    }

    case ORDERED_POKEMONS: {
      const { payload } = action;

      if (payload === "NOORDER") {
        return {
          ...state,
          orderedPokemons: [],
        };
      }

      let orderPokemons = [...state.filteredPokemons];

      switch (payload) {
        case "A-Z":
          orderPokemons.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "Z-A":
          orderPokemons.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "ASC":
          orderPokemons.sort((a, b) => a.attack - b.attack);
          break;
        case "DESC":
          orderPokemons.sort((a, b) => b.attack - a.attack);
          break;

        default:
          break;
      }

      return {
        ...state,
        orderedPokemons: orderPokemons,
      };
    }

    case ORDERED_FAVORITES: {
      const { payload } = action;

      if (payload === "NOORDER") {
        return {
          ...state,
          orderedFavorites: [],
        };
      }

      let orderFavorites  = [...state.filteredFavorites];

      switch (payload) {
        case "A-Z":
          orderFavorites.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "Z-A":
          orderFavorites.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "ASC":
          orderFavorites.sort((a, b) => a.attack - b.attack);
          break;
        case "DESC":
          orderFavorites.sort((a, b) => b.attack - a.attack);
          break;

        default:
          break;
      }

      return {
        ...state,
        orderedFavorites: orderFavorites,
      };
    }

    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };

    case ADD_POKEMON: {
      return {
        ...state,
        pokemons: action.payload,
        // pokemons: [...state.pokemons, action.payload],
      };
    }
    
    default:
      return { ...state };
  }
};

export default reducer;