import React from 'react';


const GifCard = (image) => {
    return (
        <li>
            <img src={image.gif.images.downsized.url}/>
        </li>
    )
 };
export default GifCard;