import React from 'react';
import './StarWars.css';

const CharacterStat = ({ Characters }) => {
    const { name, birth_year, gender } = Characters;
    return(
    <div className="character__stat">
    {/* <div><img src={}/></div> */}
        <p>{name}</p>
        <p>{birth_year}</p>
        <p>{gender}</p>
    </div>
    );
}

export default CharacterStat;