import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteredFavorites, filteredPokemons, getAllTypes, orderedFavorites, orderedPokemons } from '../redux/actions/actions';

import Select from 'react-select'

const FilterAmdOrder = ({ setCurrentPage }) => {

  const dispatch = useDispatch();

  const types = useSelector((state) => state.types );

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  const [selectedType, setSelectedType]     = useState('ALL');
  const [selectedOrigin, setSelectedOrigin] = useState('ANY');
  const [orderName, setOrderName]           = useState('NOORDER');
  const [orderAttack, setOrderAttack]       = useState('NOORDER');

  const handleTypeChange = (selectedOption) => {
    const selectedValue = selectedOption.value;
    setSelectedType(selectedValue);
    dispatch(filteredPokemons(selectedValue, selectedOrigin)); // Para pokemons
    dispatch(filteredFavorites(selectedValue, selectedOrigin)); // Para favoritos
    dispatch(orderedPokemons(orderName)); // Para pokemons
    dispatch(orderedFavorites(orderName)); // Para favoritos
    setCurrentPage(1);
  };

  const handleOriginChange = (selectedOption) => {
    const selectedValue = selectedOption.value;
    setSelectedOrigin(selectedValue);
    dispatch(filteredPokemons(selectedType, selectedValue)); // Para pokemons
    dispatch(filteredFavorites(selectedType, selectedValue)); // Para favoritos
    dispatch(orderedPokemons(orderName)); // Para pokemons
    dispatch(orderedFavorites(orderName)); // Para favoritos
    setCurrentPage(1);
  };

  const handleNameChange = (selectedOption) => {
    const selectedValue = selectedOption.value;
    setOrderName(selectedValue);
    setOrderAttack("NOORDER");
    dispatch(orderedPokemons(selectedValue)); // Para pokemons
    dispatch(orderedFavorites(selectedValue)); // Para favoritos
    setCurrentPage(1);
  };

  const handleAttackChange = (selectedOption) => {
    const selectedValue = selectedOption.value;
    setOrderAttack(selectedValue);
    setOrderName("NOORDER");
    dispatch(orderedPokemons(selectedValue)); // Para pokemons
    dispatch(orderedFavorites(selectedValue)); // Para favoritos
    setCurrentPage(1);
  };

  return (
    <div className='flex flex-col lg:flex-row gap-5 lg:gap-8 text-nowrap z-[4000]'>

      <div className='text-black flex flex-col gap-4 lg:gap-2'>
        <label className="text-black font-bold text-xs xs:text-sm md:text-base lg:text-sm xl:text-lg" htmlFor="typeFilter">
          FILTER BY TYPE
        </label>
        <Select
          name="type"
          id="typeFilter"
          value={{ label: selectedType, value: selectedType }}
          onChange={(selectedOption) => handleTypeChange(selectedOption)}
          options={[
            { label: "ALL", value: "ALL" },
            ...types.map((type) => ({ label: type.name.toUpperCase(), value: type.name }))
          ]}
          formatOptionLabel={(option) => (
            <>{option.label.toUpperCase()}</>
          )}
          styles={{
            control: (provided, state) => ({
              ...provided,
              border: '1px solid #000',
              borderRadius: '4px',
              boxShadow: state.isFocused ? '0 0 0 1px #000' : 'none',
              cursor: 'pointer',
              fontSize: '12px',
              '@media (min-width: 360px)': {
                fontSize: '13px',
              },
              '@media (min-width: 768px)': {
                fontSize: '15px',
              },
              '@media (min-width: 1024px)': {
                fontSize: '13px',
              },
              '@media (min-width: 1280px)': {
                fontSize: '16px',
              },
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? '#084A8C' : 'white',
              color: state.isSelected ? 'white' : 'black',
              ':active': {
                backgroundColor: '#084A8C',
                color: 'white'
              },
              ':hover': {
                backgroundColor: '#709ac3',
                color: 'white'
              },
              fontSize: '12px',
              '@media (min-width: 360px)': {
                fontSize: '13px',
              },
              '@media (min-width: 768px)': {
                fontSize: '15px',
              },
              '@media (min-width: 1024px)': {
                fontSize: '13px',
              },
              '@media (min-width: 1280px)': {
                fontSize: '16px',
              },
            }),
            menuList: (provided, state) => ({
              ...provided,
              '::-webkit-scrollbar': {
                width: '6px',
              },
              '::-webkit-scrollbar-track': {
                backgroundColor: '#f1f1f1',
                borderRadius: '4px',
              },
              '::-webkit-scrollbar-thumb': {
                backgroundColor: '#084A8C',
                // 084A8C
                // 043362
                borderRadius: '4px',
              }
            }),
            indicatorsContainer: (prevStyle, state) =>  ({
              ...prevStyle,
              display: 'none',
              '@media (min-width: 1024px)': {
                display: 'flex',
              },
            }),
          }}
        />
      </div>

      <div className='text-black flex flex-col gap-4 lg:gap-2'>
        <label className="text-black font-bold text-xs xs:text-sm md:text-base lg:text-sm xl:text-lg" htmlFor="">
          FILTER BY ORIGIN
        </label>

        <Select
          name="origin"
          id="originFilter"
          value={{ label: selectedOrigin, value: selectedOrigin }}
          onChange={(selectedOption) => handleOriginChange(selectedOption)}
          options={[
            { label: "ANY", value: "ANY" },
            { label: "API", value: "API" },
            { label: "DATABASE", value: "DATABASE" }
          ]}
          styles={{
            control: (provided, state) => ({
              ...provided,
              border: '1px solid #000',
              borderRadius: '4px',
              boxShadow: state.isFocused ? '0 0 0 1px #000' : 'none',
              cursor: 'pointer',
              fontSize: '12px',
              '@media (min-width: 360px)': {
                fontSize: '13px',
              },
              '@media (min-width: 768px)': {
                fontSize: '15px',
              },
              '@media (min-width: 1024px)': {
                fontSize: '13px',
              },
              '@media (min-width: 1280px)': {
                fontSize: '16px',
              },
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? '#084A8C' : 'white',
              color: state.isSelected ? 'white' : 'black',
              ':active': {
                backgroundColor: '#084A8C',
                color: 'white'
              },
              ':hover': {
                backgroundColor: '#709ac3',
                color: 'white'
              },
              fontSize: '12px',
              '@media (min-width: 360px)': {
                fontSize: '13px',
              },
              '@media (min-width: 768px)': {
                fontSize: '15px',
              },
              '@media (min-width: 1024px)': {
                fontSize: '13px',
              },
              '@media (min-width: 1280px)': {
                fontSize: '16px',
              },
            }),
            indicatorsContainer: (prevStyle, state) =>  ({
              ...prevStyle,
              display: 'none',
              '@media (min-width: 1024px)': {
                display: 'flex',
              },
            }),
          }}
        />
      </div>

      <div className='text-black flex flex-col gap-4 lg:gap-2'>
        <label className="text-black font-bold text-xs xs:text-sm md:text-base lg:text-sm xl:text-lg" htmlFor="">
          SORT ALPHABETICALLY
        </label>

        <Select
          name="orderName"
          value={{ label: orderName === "NOORDER" ? "DON'T SORT" : orderName, value: orderName }}
          onChange={(selectedOption) => handleNameChange(selectedOption)}
          options={[
            { label: "DON'T SORT", value: "NOORDER" },
            { label: "A-Z", value: "A-Z" },
            { label: "Z-A", value: "Z-A" }
          ]}
          styles={{
            control: (provided, state) => ({
              ...provided,
              border: '1px solid #000',
              borderRadius: '4px',
              boxShadow: state.isFocused ? '0 0 0 1px #000' : 'none',
              cursor: 'pointer',
              fontSize: '12px',
              '@media (min-width: 360px)': {
                fontSize: '13px',
              },
              '@media (min-width: 768px)': {
                fontSize: '15px',
              },
              '@media (min-width: 1024px)': {
                fontSize: '13px',
              },
              '@media (min-width: 1280px)': {
                fontSize: '16px',
              },
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? '#084A8C' : 'white',
              color: state.isSelected ? 'white' : 'black',
              ':active': {
                backgroundColor: '#084A8C',
                color: 'white'
              },
              ':hover': {
                backgroundColor: '#709ac3',
                color: 'white'
              },
              zIndex: '400022',
              fontSize: '12px',
              '@media (min-width: 360px)': {
                fontSize: '13px',
              },
              '@media (min-width: 768px)': {
                fontSize: '15px',
              },
              '@media (min-width: 1024px)': {
                fontSize: '13px',
              },
              '@media (min-width: 1280px)': {
                fontSize: '16px',
              },
            }),
            indicatorsContainer: (prevStyle, state) =>  ({
              ...prevStyle,
              display: 'none',
              '@media (min-width: 1024px)': {
                display: 'flex',
              },
            }),
          }}
        />
      </div>

      <div className='text-black flex flex-col gap-4 lg:gap-2'>
        <label className="text-black font-bold text-xs xs:text-sm md:text-base lg:text-sm xl:text-lg" htmlFor="">
          SORT BY ATTACK
        </label>

        <Select
          name="orderAttack"
          value={{ label: orderAttack === "NOORDER" ? "DON'T SORT" : (orderAttack === "ASC" ? "LOW TO HIGHT" : "HIGHT TO LOW"), value: orderAttack }}
          onChange={(selectedOption) => handleAttackChange(selectedOption)}
          options={[
            { label: "DON'T SORT", value: "NOORDER" },
            { label: "LOW TO HIGHT", value: "ASC" },
            { label: "HIGHT TO LOW", value: "DESC" }
          ]}
          styles={{
            control: (provided, state) => ({
              ...provided,
              border: '1px solid #000',
              borderRadius: '4px',
              boxShadow: state.isFocused ? '0 0 0 1px #000' : 'none',
              cursor: 'pointer',
              fontSize: '12px',
              '@media (min-width: 360px)': {
                fontSize: '13px',
              },
              '@media (min-width: 768px)': {
                fontSize: '15px',
              },
              '@media (min-width: 1024px)': {
                fontSize: '13px',
              },
              '@media (min-width: 1280px)': {
                fontSize: '16px',
              },
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? '#084A8C' : 'white',
              color: state.isSelected ? 'white' : 'black',
              ':active': {
                backgroundColor: '#084A8C',
                color: 'white'
              },
              ':hover': {
                backgroundColor: '#709ac3',
                color: 'white'
              },
              fontSize: '12px',
              '@media (min-width: 360px)': {
                fontSize: '13px',
              },
              '@media (min-width: 768px)': {
                fontSize: '15px',
              },
              '@media (min-width: 1024px)': {
                fontSize: '13px',
              },
              '@media (min-width: 1280px)': {
                fontSize: '16px',
              },
            }),
            indicatorsContainer: (prevStyle, state) =>  ({
              ...prevStyle,
              display: 'none',
              '@media (min-width: 1024px)': {
                display: 'flex',
              },
            }),
          }}
        />
      </div>
    
    </div>
  )
}

export default FilterAmdOrder