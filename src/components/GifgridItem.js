import React from 'react';
import PropTypes from 'prop-types';
import { prototype } from '@wojtekmaj/enzyme-adapter-react-17';

export const GifGridItem = ({title, url}) => {


    console.log(title, url);
    
    return (
        <div className="card animate__animated animate__fadeInUp">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
