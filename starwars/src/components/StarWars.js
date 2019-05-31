import React from 'react';
import CharacrterStat from './CharacterStat';
import './StarWars.css';

const StarWars = ({ starwarsChars }) => {
    // const { results } =props
    console.log(starwarsChars);

    const data = starwarsChars.map((entry, index) => {
        console.log(entry);
        return <CharacrterStat Characters={entry} />
    })
    return data;
}

export default StarWars;