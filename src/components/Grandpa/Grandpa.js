import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

/**
 * context api
 * 1. call creactContext with a default value
 * 2. set a variable of the context with uppercase
 * 3. make sure you export the context to use it in other places
 * 4. wrap you child context using RingContext.Provider
 * 5. provide a value
 * 6. to consume the context from child component
 * 7. useContext hook and you will need to pass the contextName
 * 8. make sure you takes notes....
 **/

export const RingContext = createContext('Ring');


const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Kada Matir Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    };

    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h4>Grandpaa</h4>
                <p>House: {house} <button onClick={handleBuyAHouse}>Buy a House</button></p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;