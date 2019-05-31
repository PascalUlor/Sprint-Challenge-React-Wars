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
        <h4>Movies</h4>
        {/* {films.map(movie =>{
            return <ol><li>{movie}</li></ol>
        })
        return <ol>{movie}</ol>
        } */}
    </div>
    );
}

export default CharacterStat;