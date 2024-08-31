import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { NavLink } from "react-router-dom";

import { getPokemonDetail } from "../redux/actions/actions";

import DetailBg from "../assets/images/BackGroundPage/DetailBg.jpg"
import gameboyAd from "../assets/icons/gameboyAd.png"
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";


const Detail = () => {
  
  const dispatch = useDispatch();

  const { id } = useParams();

  const [isLoading, setIsLoading]               = useState(true);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  const pokemonDetail = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      dispatch(getPokemonDetail(id))
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false)); 
    }, 600); 

    return () => clearTimeout(loadingTimer);
  }, [dispatch, id]);

  useEffect(() => {
    const backgroundImage = new Image();
    backgroundImage.src = DetailBg;
    backgroundImage.onload = () => {
      setBackgroundLoaded(true);
    };
  }, []);
  
  const typeColors = {
    normal   : "rgba(110, 115, 117, 0.6)",
    fire     : "rgba(233, 126, 12, 0.6)",
    water    : "rgba(39, 138, 225, 0.6)",
    grass    : "rgba(81, 190, 59, 0.6)",
    bug      : "rgba(155, 200, 31, 0.6)",
    rock     : "rgba(152, 137, 106, 0.6)",
    ground   : "rgba(205, 102, 51, 0.6)",
    poison   : "rgba(144, 66, 192, 0.6)",
    electric : "rgba(224, 183, 44, 0.6)",
    fairy    : "rgba(178, 89, 175, 0.6)",
    fighting : "rgba(195, 50, 91, 0.6)",
    psychic  : "rgba(222, 78, 80, 0.6)",
    ghost    : "rgba(43, 91, 169, 0.6)",
    ice      : "rgba(93, 187, 171, 0.6)",
    dragon   : "rgba(0, 90, 170, 0.6)",
    dark     : "rgba(89, 87, 97, 0.6)",
    steel    : "rgba(86, 149, 163, 0.6)",
  };

  const getBackgroundColor = () => {
    if (pokemonDetail?.types && pokemonDetail.types.length > 0) {
      const primaryType = pokemonDetail.types[0].toLowerCase();
      return typeColors[primaryType] || "transparent";
    }
    return "transparent";
  };

  return (
    <div 
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat bg-fixed 3md:[background-size:100%_100%] " 
      style={{
        backgroundImage: `url(${DetailBg})`,
        opacity: backgroundLoaded ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <div className="flex flex-1 flex-col justify-center items-center gap-6 p-3">

            <div 
              className="flex flex-col items-center rounded-xl max-w-[840px] bg-opacity-65 backdrop-filter backdrop-blur-md border-[#67657A] border-2 md:border-4"
              style={{ backgroundColor: getBackgroundColor() }}
            >

              {/* Primer Columno / Call to action e Info */}
              <div className="flex flex-row w-full justify-between items-center border-b-2 md:border-b-4 border-[#67657A] md:gap-5">
                <h4 className="font-bold text-white text-xs xs:text-sm md:text-base text-left pl-3 lg:text-lg">POKEMON INFO</h4>
                <div className="hidden sm:block">
                  <img src={gameboyAd} className="w-[50px] h-[32px]" alt="" />
                </div>
                <NavLink className="font-bold text-xs xs:text-sm md:text-base lg:text-lg text-right p-3 bg-white bg-opacity-65 text-black transition-all duration-300 hover:bg-white hover:text-black hover:bg-opacity-95 rounded-tr-lg" to="/home">
                  BACK TO HOME
                </NavLink> 
              </div>

              {/* Segunda Columna / Pokemon INFO */}
              <div className="flex flex-col md:flex-row items-center md:items-start pb-2 md:p-0">

                {/* Level e Imagen */}
                <div className="relative flex flex-col md:gap-3 items-center border-[#67657A] pt-2 md:px-10 lg:px-20 md:pt-5">
                  <h1 className="text-white text-center text-xs xs:text-base font-bold p-2 pb-0 md:p-2">
                    Nv.100 {pokemonDetail.name.toUpperCase()}
                  </h1>
                  <img 
                    src={pokemonDetail.image} 
                    alt={pokemonDetail.name}
                    className="w-64 pt-0 transition-all duration-[0.4s] hover:scale-[1.3]"
                  />
                </div>

                {/* Stats */}
                <div className="md:border-s-[5px] md:border-[#67657A] md:p-6 md:pr-2 md:py-3">
                  
                  {/* Container */}
                  <div className="flex gap-4 flex-row md:gap-5 text-white">

                    {/* Titles */}
                    <div className="font-bold text-xs xs:text-sm md:text-base md:text-center flex flex-col gap-2">
                      <div className="py-1">
                        ID
                      </div>

                      <div className="py-1">
                        NAME
                      </div>

                      <div className="py-1">
                        TYPES
                      </div>

                      <div className="py-1">
                        HP
                      </div>

                      <div className="py-1">
                        ATTACK
                      </div>

                      <div className="py-1">
                        DEFENSE
                      </div>

                      <div className="py-1">
                        SPEED
                      </div>

                      <div className="py-1">
                        HEIGHT
                      </div>

                      <div className="py-1">
                        WEIGHT
                      </div>
                    </div>

                    {/* Real Stats */}
                    <div className="text-xs xs:text-sm md:text-base text-center md:text-left flex flex-col gap-2">
                      <div className=" text-white md:px-4 py-1 rounded-lg truncate text-nowrap max-w-[290px]">
                        {pokemonDetail.id}
                      </div>

                      <div className=" text-white md:px-4 py-1 rounded-lg">
                        {pokemonDetail.name.toUpperCase()}
                      </div>

                      <div className=" text-white md:px-4 py-1 rounded-lg text-nowrap">
                        {pokemonDetail?.types && pokemonDetail.types.length > 0 ? (
                          pokemonDetail.types.map(type => type.toUpperCase()).join("  &  ")
                        ) : (
                          null
                        )}
                      </div>

                      <div className=" text-white md:px-4 py-1 rounded-lg">
                        {pokemonDetail.hp}
                      </div>

                      <div className=" text-white md:px-4 py-1 rounded-lg">
                        {pokemonDetail.attack}
                      </div>

                      <div className=" text-white md:px-4 py-1 rounded-lg">
                        {pokemonDetail.defense}
                      </div>

                      <div className=" text-white md:px-4 py-1 rounded-lg">
                        {pokemonDetail.speed}
                      </div>

                      <div className=" text-white md:px-4 py-1 rounded-lg">
                        {pokemonDetail.height}
                      </div>

                      <div className=" text-white md:px-4 py-1 rounded-lg">
                        {pokemonDetail.weight}
                      </div>
                    </div>

                  </div>
                  
                </div>
              </div>

              {/* Tercea columna / Desciption */}
              <div className="relative flex flex-col gap-5 border-t-[5px] border-[#67657A] max-w-[fit] p-3">
                <div className="absolute inset-x-[0] bottom-0 h-2 "></div>

                <div className="flex flex-col gap-4 text-white">
                
                  <h4 className="ml-3 font-bold text-xs xs:text-sm md:text-base">
                    DESCRIPTION
                  </h4>

                  <p className="text-xs xs:text-sm md:text-base">
                    {pokemonDetail.description}
                  </p>
                  
                </div>
              </div>
              
            </div>

            <NavLink to='/home' className="p-4 bg-white transition-all duration-300 hover:bg-opacity-95 font-bold text-black border-4 border-[#67657A] bg-opacity-65 backdrop-filter backdrop-blur-md">
              BACK TO HOME
            </NavLink>
          </div>
          <Footer />                
        </>

      )}
    </div>
  )
}

export default Detail