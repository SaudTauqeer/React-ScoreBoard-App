import React from 'react';
import Stats from './Stats';

const Header = (props) => {
    return (
      <header>
        <h1>{ props.title }</h1>
        <span className="stats">Players: {props.totalPlayers}</span>
        <Stats
        players={ props.players }
         /> 
      </header>
    );
  }








  export default Header;