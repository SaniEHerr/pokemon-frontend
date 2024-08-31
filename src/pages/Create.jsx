import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addPokemon, getAllTypes } from "../redux/actions/actions";

import createValidate from "../helpers/createValidate"
import isValidInput from "../helpers/inputValidation"

import CreateBg from "../assets/images/BackGroundPage/CreateBg.png"
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import PageLoader from '../components/PageLoader';
import CreateForm from '../components/Create/CreateForm';
import RealtimeCard from '../components/Create/RealtimeCard';
import ConfirmationModal from '../components/Create/ConfirmationModal';
import SuccessModal from '../components/Create/SuccessModal';

const Create = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const types = useSelector((state) => state.types)

  const [isLoading, setIsLoading] = useState(true);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const [showSuccessModal , setShowSuccessModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [input, setInput] = useState({
    name        : "",
    hp          : "",
    attack      : "",
    defense     : "",
    speed       : "",
    height      : "",
    weight      : "",
    image       : "",
    type        : [],
    description : "",
  })

  const [error, setError] = useState({});

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      dispatch(getAllTypes())
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false)); 
    }, 600); 

    return () => clearTimeout(loadingTimer);
  }, [dispatch]);

  useEffect(() => {
    const backgroundImage = new Image();
    backgroundImage.src = CreateBg;
    backgroundImage.onload = () => {
      setBackgroundLoaded(true);
    };
  }, []);

  useEffect(() => {
    if (showSuccessModal  || showConfirmationModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };

  }, [showSuccessModal, showConfirmationModal]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const handleChange = (e) => {

    if (!isValidInput(e.target.name, e.target.value)) {
      return;
    }

    setInput({
      ...input,
      [e.target.name]: e.target.value
    })

    setError({
      ...error,
      [e.target.name]: createValidate({
        [e.target.name]: e.target.value,
      })[e.target.name] || "",
    });

    // console.log("Error state:", error)
  }

  const handleSelect = (selectedOption) => {
    const selectedTypeId = Number(selectedOption);
  
    if (!input.type.includes(selectedTypeId)) {
      if (input.type.length < 2 ) {
        setInput({
          ...input,
          type: [...input.type, selectedTypeId],
        });
      }
    }
  }

  const handleDelete = (e, selectedTypeId) => {
    setInput({
      ...input,
      type: input.type.filter(type => type !== selectedTypeId)
    });
  }

  const handleSubmit = (submit) => {
    submit.preventDefault();
    setShowConfirmationModal(true);
  }

  const openConfirmationModal = () => {
    setShowConfirmationModal(true)
  }

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false)
  }

  const closeSuccessModal = () => {
    setShowSuccessModal(false)
  }

  const closeSuccessModalAndRedirect = () => {
    setShowSuccessModal(false);
    setShowConfirmationModal(false);
    navigate("/home");
  }

  const handleConfirmCreation = () => {
    const newObj = {
      name        : input.name.trim(),
      hp          : Number(input.hp),
      attack      : Number(input.attack),
      defense     : Number(input.defense),
      speed       : Number(input.speed),
      height      : Number(input.height),
      weight      : Number(input.weight),
      types       : input.type,
      image       : input.image,
      description : input.description,
    }

    dispatch(addPokemon(newObj));
    
    setInput({
      name        : "",
      hp          : "",
      attack      : "",
      defense     : "",
      speed       : "",
      height      : "",
      weight      : "",
      image       : "",
      type        : [],
      description : "",
    })

    setShowSuccessModal(true);
    setShowConfirmationModal(false);
  }

  const isSubmitDisabled = 
    Object.values(error).length === 0  ||
    Object.values(error).some(value => value !== "") || 
    Object.values(input).some(value => value === "" || 
    input.type.length === 0);

  return (

    <div 
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat bg-fixed 3md:[background-size:100%_100%] " 
      style={{
        backgroundImage: `url(${CreateBg})`,
        opacity: backgroundLoaded ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <Navbar />
          
          <div className='flex flex-col flex-1 xl:flex-row gap-6 items-center justify-center p-3 pt-5 lg:p-10'>

            {/* Create Pokemon */}
            <CreateForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleSelect={handleSelect}
              handleDelete={handleDelete}
              openConfirmationModal={openConfirmationModal}
              isSubmitDisabled={isSubmitDisabled}
              input={input}
              error={error}
              types={types}
            />
            
            {/* Card Generation */}
            <RealtimeCard
              input={input}
              types={types}
            />
          </div>

          <Footer />
        </>
      )}

      {showConfirmationModal && (
        <ConfirmationModal 
          handleConfirmCreation={handleConfirmCreation}
          windowWidth={windowWidth}
          closeConfirmationModal={closeConfirmationModal}
        />
      )}
      
      {showSuccessModal && (
        <SuccessModal 
          closeSuccessModalAndRedirect={closeSuccessModalAndRedirect}
          closeSuccessModal={closeSuccessModal}
        />
      )}
    </div>
  )
}

export default Create