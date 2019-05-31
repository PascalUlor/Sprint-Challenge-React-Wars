import React from 'react';
import './StarWars.css'

const Pagination = ({text, nextPage, prevPage, next, prev, btnDisplay}) =>{
    const trigger = text === 'next'? nextPage : prevPage;
    if(!prev && text === 'previous' ) {
        btnDisplay = 'none'
    } else if(!next && text === 'next') {
        btnDisplay = 'none'
    } else {
        btnDisplay = 'inline-block'
    }
return (
    <button style={{display:btnDisplay}} onClick={trigger}>{text}</button>
)
}
export default Pagination;