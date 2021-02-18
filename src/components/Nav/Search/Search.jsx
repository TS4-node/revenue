import React from 'react';


const Search = () => {
  return (
    <>
      <form >
        <input class='' type='text' placeholder='Busca aquí'/>
        <input type='submit' class='submit-buscador' />
      </form>
      <img src="images/header/Desc.png" alt="Desc icon" className='image-search'/>
    </>
  );
};

export default Search;
