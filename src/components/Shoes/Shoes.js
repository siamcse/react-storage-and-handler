import React from 'react';
import { add } from '../utilities/Utilities';

const Shoes = () => {
    const first = 45;
    const second = 56;
    const total = add(first,second);
    return (
        <div>
            <h2>Shoes Store</h2>
            <p>Shoes Item Total: {total}</p>
        </div>
    );
};

export default Shoes;