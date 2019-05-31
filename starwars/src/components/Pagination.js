import React from 'react';
import './StarWars.css'

const Pagination = ({text, nextPage, prevPage}) =>{
    const trigger = text === 'next'? nextPage : prevPage;
return (
    <button onClick={trigger}>{text}</button>
)
}
export default Pagination;