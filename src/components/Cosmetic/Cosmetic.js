import React from 'react';
import { addToDb, removeFromDb } from '../utilities/fakeDb';
import "./Cosmetic.css"

const Cosmetic = (props) => {
    const {id,name,price,email,phone} = props.cosmetic;
    const addToCart = (id) =>{
        addToDb(id);
    }
    const removeFromCart = (id) =>{
        removeFromDb(id);
    }
    return (
        <div className='product'>
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <p>Please call: {phone}</p>
            <p>Product Id: {id}</p>
            <button onClick={()=>addToCart(id)}>Add to Cart</button>
            <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;