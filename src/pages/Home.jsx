import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons, filteredPokemons } from "../redux/actions/actions";

import Navbar from "../components/Navbar";
import Cards from '../components/Cards';
import Pagination from "../components/Pagination";
import NotPokemonFound from "../components/NotPokemonFound";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";

import HomeFavBg from '../assets/images/BackGroundPage/HomeFavBg.png';

const Home = () => {
  const dispatch = useDispatch();

  const orderedPokemonsState  = useSelector((state) => state.orderedPokemons);
  const filteredPokemonsState = useSelector((state) => state.filteredPokemons);

  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize]                    = useState(12);

  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    dispatch(getAllPokemons()).then(() => {
      dispatch(filteredPokemons());
      setIsLoading(false);
    });
    setCurrentPage(1)
  }, [dispatch]);

  useEffect(() => {
    const backgroundImage = new Image();
    backgroundImage.src = HomeFavBg;
    backgroundImage.onload = () => {
      setBackgroundLoaded(true);
    };
  }, []);

  const combinedPokemons = orderedPokemonsState.length > 0 ? orderedPokemonsState : filteredPokemonsState;

  const searchFilteredAndOrderedPokemons = combinedPokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPokemonsByPage = (pokemons, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedPokemons = pokemons.slice(startIndex, endIndex);

    return paginatedPokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const pageCount = Math.ceil(searchFilteredAndOrderedPokemons.length / pageSize);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  return (
    <div 
      className="flex flex-col justify-center items-center min-h-screen bg-no-repeat bg-cover bg-center bg-fixed 3md:[background-size:100%_100%]" 
      style={{
        backgroundImage: `url(${HomeFavBg})`,
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
            {searchFilteredAndOrderedPokemons.length > 0 ? (
              <>
                <Cards 
                  pokemons={getPokemonsByPage(searchFilteredAndOrderedPokemons, currentPage, pageSize)} 
                />
                <Pagination 
                  currentPage={currentPage} 
                  pageCount={pageCount} 
                  handlePageChange={handlePageChange}
                />
              </>
            ) : (
              <NotPokemonFound />
            )}
          </main>

          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;