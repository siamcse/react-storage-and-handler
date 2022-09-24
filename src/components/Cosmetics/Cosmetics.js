import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { removeAllFromDb } from '../utilities/fakeDb';
import { getTotal } from '../utilities/Utilities';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])
    const total = getTotal(cosmetics);
    return (
        <div>
            <h2>Welcome to My Store</h2>
            <p>Total price: {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
            <button onClick={() => removeAllFromDb()}>Remove All Item From Cart</button>
        </div>
    );
};

export default Cosmetics;