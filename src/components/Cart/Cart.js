import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    // conditional rendering options
    // 1. Elememnt variable
    // 2. ternary operator condition ? true : false
    // 3. && operator (shorthand)
    // 4. || operator


    // 1. Element variable
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>Oi kipta khoroch kor..</h5>
            <p>Kinos na ken!?</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p>Please add more...</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }


    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }

            {/* || operator */}
            {cart.length === 0 || <p className='orange'>YAY! You are buying.</p>}

            {/* && operator */}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon ke gift diba.</p>
            </div>}

            {command}

            {/*  ternary operator condition ? true : false */}
            {cart.length !== 4 ? <p>Keep adding!</p> : <button>Remove all</button>}
            {cart.length === 4 ? <button className='orange'>Review Order</button> : ''}
        </div>
    );
};

export default Cart;