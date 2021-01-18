import React from 'react';
import GifCard from './GifCard';

const GifList = (props) => {
    const gifCards = props.gifs.map((image) => {
        return <GifCard key={image.id} gif={image} />
    });

    return (
        <ul>{gifCards}</ul>
    );
};

export default GifList;