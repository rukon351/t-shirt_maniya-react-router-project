import React from 'react';

const TShirt = (props) => {
    console.log(props);
    const { name, picture, price } = props.tShirt;
    return (
        <div>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
        </div>
    );
};

export default TShirt;