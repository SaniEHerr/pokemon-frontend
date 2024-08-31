import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { filteredFavorites, getAllPokemons } from "../redux/actions/actions";

import Navbar from "../components/Navbar"
import Cards from '../components/Cards';
import Pagination from "../components/Pagination";
import NotPokemonFound from "../components/NotPokemonFound";
import NotFavoritesPokemons from "../components/NotFavoritesPokemons";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";

import FavoritesBg from '../assets/images/BackGroundPage/FavoritesBg.jpg';



const Favorites = () => {

  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites);
  const filteredFavoritesState = useSelector((state) => state.filteredFavorites);
  const orderedFavoritesState  = useSelector((state) => state.orderedFavorites);

  const [isLoading, setIsLoading]     = useState(true);
  
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  const [searchTerm, setSearchTerm]   = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize]                    = useState(12);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 400); 

    dispatch(filteredFavorites("All", "Any"));
    setCurrentPage(1);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    const backgroundImage = new Image();
    backgroundImage.src = FavoritesBg;
    backgroundImage.onload = () => {
      setBackgroundLoaded(true);
    };
  }, []);

  const combinedFavorites = orderedFavoritesState.length > 0 ? orderedFavoritesState : filteredFavoritesState;

  const searchFilteredAndOrderedFavorites = combinedFavorites.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPokemonsByPage = (pokemons, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return pokemons.slice(startIndex, endIndex);
  };

  const pageCount = Math.ceil(searchFilteredAndOrderedFavorites.length / pageSize);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = term => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  return (
    <div 
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed 3md:[background-size:100%_100%]"
      style={{
        backgroundImage: `url(${FavoritesBg})`,
        opacity: backgroundLoaded ? 1 : 0, 
        transition: "opacity 0.5s ease", 
      }}
    >
      {isLoading ? (
        <PageLoader />
      ) : (

        <>
          <Navbar 
            handleSearch={handleSearch} 
            searchTerm={searchTerm} 
            setCurrentPage={setCurrentPage} 
          />

          <main className="max-w-[1630px] flex flex-col justify-start items-center gap-7 text-center flex-1 pt-10 xl:pt-9 text-white">
            {
              favorites.length === 0 ? (
                <NotFavoritesPokemons />
              ) : searchFilteredAndOrderedFavorites.length > 0 ? (
                <>
                  <Cards 
                    pokemons={getPokemonsByPage(searchFilteredAndOrderedFavorites, currentPage, pageSize)} 
                  />
                  <Pagination 
                    currentPage={currentPage} 
                    pageCount={pageCount} 
                    handlePageChange={handlePageChange} 
                  />
                </>
              ) : (
                <NotPokemonFound />
              )
            }
          </main>

          <Footer />
        </>
      )}
    </div>
  )
}

export default Favorites