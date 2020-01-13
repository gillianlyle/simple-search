import React from 'react';
import Card from './Card';

const CardList = ({ data }) => {
    return (
        // loop through the data array and return a <Card> for each item
        data.map((user =>
            <Card {...user} />
        ))
    )
}

export default CardList;