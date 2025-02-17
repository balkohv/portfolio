import React from 'react';
import './Item.css';
const Item = ({ title, imageUrl, redirectUrl }) => {
    const handleClick = () => {
        if (redirectUrl != "") {
            window.open(redirectUrl, '_blank');
        }
    };

    return (
        <div className="item" id={redirectUrl} onClick={handleClick}>
            <img src={imageUrl} alt={title} className="item-image" />
            <h2 className="item-title text-light">{title}</h2>
        </div>
    );
};

export default Item;