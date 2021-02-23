import React from 'react';
import fallingImage from '../../../assets/images/nav/Desc.png'

const Search = () => {
  return (
    <>
      <form >
        <input type='text' className='buscador' placeholder='Busca aquí'/>
        <input type='submit' className='lupa' />
      </form>
      <img src={fallingImage} alt="Desc icon" className='pt-2 float-right'/>
    </>
  );
};

export default Search;
