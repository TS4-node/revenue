import React from 'react';


const Search = () => {
  return (
    <>
      <form >
        <input type='text' placeholder='Busca aquí'/>
        <input type='submit' className='submit-buscador' />
      </form>
      <img src="images/header/Desc.png" alt="Desc icon" className='pt-2 float-right'/>
    </>
  );
};

export default Search;
