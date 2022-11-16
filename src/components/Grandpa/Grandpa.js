import React from 'react';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';


const Grandpa = () => {
    const house = 7;
    return (
        <div className='grandpa' style={{ display: 'flex' }}>
            <Father house={house}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
        </div>
    );
};

export default Grandpa;