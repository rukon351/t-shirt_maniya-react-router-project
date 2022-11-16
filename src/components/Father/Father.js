import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ house, ornament }) => (
    <div>
        <h5>Father!</h5>
        <p>House: {house}</p>
        <div style={{ display: 'flex' }}>
            <MySelf house={house} ornament={ornament}></MySelf>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
        </div>
    </div>
);

export default Father;