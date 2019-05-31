import React from 'react';
import CharacrterStat from './CharacterStat';
import './StarWars.css';

const StarWars = ({ starwarsChars }) => {
    console.log(starwarsChars);

    const data = starwarsChars.map((entry) => {
        console.log(entry);
        return <CharacrterStat key={entry.created} Characters={entry} />
    })
    return data;
}

export default StarWars;