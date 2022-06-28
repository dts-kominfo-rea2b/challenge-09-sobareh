// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = (props) => {
  return (
    <header className='header'>
      <h1 className='header__title'> Call a Friend</h1>
      <p className='header__subtitle'> your friendly contact app </p>
    </header>
  );
};

export default Header;
