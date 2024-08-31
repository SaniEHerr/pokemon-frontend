import { useState } from 'react'

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/actions/actions';

import { Icon } from '@iconify/react';
import pokeBall from "../assets/loaders/poke.png"

const Card = ({ pokemon }) => {

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const types = pokemon ? pokemon.types : [];

  const navigate = useNavigate();

  const isFavorite = favorites.some(p => p.id === pokemon.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(pokemon.id));
      // Actualizar localStorage
      localStorage.setItem('favorites', JSON.stringify(favorites.filter(p => p.id !== pokemon.id)));
    } else {
      dispatch(addFavorite(pokemon));
      // Actualizar localStorage
      localStorage.setItem('favorites', JSON.stringify([...favorites, pokemon]));
    }
  };

  const handleImageLoad = () => {
    setTimeout(() => {
      setIsImageLoaded(true); 
    }, 150);
  };

  const handleDetailClick = (pokemonId) => {
    navigate(`/detail/${pokemonId}`);
  };

  const typeMapping = {
    normal: {
      color: isHovered ? "rgba(110, 115, 117, 0.6)" : null,
      image: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/normal.svg",
      boxShadow: "0px 15px 15px #A0A29F",
    },

    fire: {
      color: isHovered ? "rgba(233, 126, 12, 0.6)" : null,
      image: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/fire.svg",
      boxShadow: "0 15px 15px #FBA54C",
    },

    water: {
      color: isHovered ? "rgba(39, 138, 225, 0.6)" : null,
      image: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/water.svg",
      boxShadow: "0px 15px 15px #539DDF",
    },

    grass: {
      color: isHovered ? "rgba(81, 190, 59, 0.6)" : null,
      image: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/grass.svg",
      boxShadow: "0px 15px 15px #5FBD58",
    },

    bug: {
      color: isHovered ? "rgba(155, 200, 31, 0.6)" : null,
      image: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/bug.svg",
      boxShadow: "0px 15px 15px #92BC2C",
    },

    rock: {
      color: isHovered ? "rgba(152, 137, 106, 0.6)" : null,
      image: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/rock.svg",
      boxShadow: "0px 15px 15px #C9BB8A",
    },

    ground: {
      color: isHovered ? "rgba(205, 102, 51, 0.6)" : null,
      image: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/ground.svg",
      boxShadow: "0px 15px 15px #DA7C4D",
    },

    poison: {
      color: isHovered ? "rgba(144, 66, 192, 0.6)" : null,
      image: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/poison.svg",
      boxShadow: "0px 15px 15px #B763CF",
    },

    electric: {
      color: isHovered ? "rgba(224, 183, 44, 0.6)" : null,
      image: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/electric.svg",
      boxShadow: "0px 15px 15px #F2D94E",
    },

    fairy: {
      color: isHovered ? "rgba(178, 89, 175, 0.6)" : null,
      image: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/fairy.svg",
      boxShadow: "0px 15px 15px #EE90E6",
    },

    fighting: {
      color: isHovered ? "rgba(195, 50, 91, 0.6)" : null,
      image: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/fighting.svg",
      boxShadow: "0px 15px 15px #D3425F",
    },

    psychic: {
      color: isHovered ? "rgba(222, 78, 80, 0.6)" : null,
      image: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/psychic.svg",
      boxShadow: "0px 15px 15px #FA8581",
    },

    ghost: {
      color: isHovered ? "rgba(43, 91, 169, 0.6)" : null,
      image: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/ghost.svg",
      boxShadow: "0px 15px 15px #5F6DBC",
    },

    ice: {
      color: isHovered ? "rgba(93, 187, 171, 0.6)" : null,
      image: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/ice.svg",
      boxShadow: "0px 15px 15px #75D0C1",
    },

    dragon: {
      color: isHovered ? "rgba(0, 90, 170, 0.6)" : null,
      image: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/dragon.svg",
      boxShadow: "0px 15px 15px #0C69C8",
    },

    dark: {
      color     : isHovered ? "rgba(89, 87, 97, 0.6)"                                                                                          : null,
      image     : "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/dark.svg",
      boxShadow : "0px 15px 15px #595761",
    },

    steel: {
      color     : isHovered ? "rgba(86, 149, 163, 0.6)"                                                                                         : null,
      image     : "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/steel.svg",
      boxShadow : "0px 15px 15px #5695A3",
    },

    flying: {
      image     : "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/flying.svg",
      boxShadow : "0px 15px 15px #A1BBEC",
    }
  };

  const getTypeColorAndImage = (type) => {
    if (typeMapping[type]) {
      return {
        color: typeMapping[type].color,
        image: typeMapping[type].image,
        boxShadow: typeMapping[type].boxShadow,
      };
    } else {
      return {
        color: "rgba(0, 0, 0, 0.5)",
        image: "",
        boxShadow: "",
      };
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      key={pokemon.id}
      className="bg-black bg-opacity-50 backdrop-filter px-4 py-6 rounded-lg flex flex-col gap-2 items-center justify-around text-white w-[252px] h-[286.8px] md:w-[230px] 3xl:w-[252px] lg:h-auto hover:scale-105 transition duration-[0.4s]"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: getTypeColorAndImage(types[0]).color,
      }}
    >
      {!isImageLoaded && (
        <div className="flex items-center justify-center w-[190px] h-[306px] p-0">
          <img className='w-[50%] lg:w-[60%]' src={pokeBall} alt="" />
        </div>
      )}

      <div className={`${isImageLoaded ? "block" : "hidden"} relative left-[90px] -top-3 md:left-[83px] lg:-top-4 3xl:-top-3 3xl:left-[90px] lg:left-[83px] transition-all duration-500 ${isFavorite ? 'heart-active' : 'inactive-active'}`}>
        <button 
          onClick={handleFavoriteToggle}
          className='fixed'
        >
          {isFavorite ? <Icon icon="fa6-solid:heart" width="24" height="24" /> : <Icon icon="fa6-regular:heart" width="24" height="24" /> }
        </button>
      </div>

      <div 
        className={`${isImageLoaded ? "block" : "hidden"}`}
      >
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-sm font-bold md:text-base">{pokemon.name.toUpperCase()}</h3>

          <div className='flex flex-col items-center justify-center gap-3' >
            <img
              className={`w-[130px] lg:w-[190px] img transition duration-[0.4s] ${isHovered ? 'scale-[1.3]' : ''} cursor-pointer`}
              src={pokemon.image}
              alt={pokemon.name}
              onLoad={handleImageLoad}
              onClick={() => handleDetailClick(pokemon.id)}
            />

            <div className="flex flex-row gap-5 justify-center items-center">
              {pokemon.types.map((type) => (
                <div key={type} className="flex flex-col items-center justify-center gap-3">
                  <img
                    src={getTypeColorAndImage(type).image} 
                    alt={type} 
                    className="w-[2rem] h-auto object-cover rounded-full transition-all duration-[0.5s]" 
                    style={{
                      boxShadow: isHovered ? "none" : getTypeColorAndImage(type).boxShadow,
                      color: getTypeColorAndImage(type).color,
                    }}
                  />
                  <h4 className="font-bold text-xs">{type.toUpperCase()}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Card