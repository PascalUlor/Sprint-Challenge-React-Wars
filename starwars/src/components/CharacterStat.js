import React from 'react';
import './StarWars.css';

const CharacterStat = ({ Characters }) => {
    const { name, birth_year, gender, films } = Characters;
    return(
    <div className="character__stat">
    
        <p>Name: {name}</p>
        <p>DOB: {birth_year}</p>
        <p>Gender: {gender}</p>
        <div className="movies">
        <h4>Movies</h4>
        <ol>
        {films.map((movie,index) =>{
            return <li key={index}>{movie}</li>
        })
        }
        </ol>
        </div>
    </div>
    );
}

export default CharacterStat;