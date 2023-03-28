import React, { useState } from 'react';
import './Cart.css';

const Cart = ({cart, storedCart}) => {

    let total=0;
    let totalShipping = 0;
    // let total
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = (total + totalShipping) * .07;
    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h3>Order Carts</h3>
            <p>Selected Items: {cart.length} </p>
            <p>Total Price: ₹{total} </p>
            <p>Total Shipping: ₹{totalShipping} </p>
            <p>Tax: ₹{tax.toFixed(2)} </p>

            <p>Grand Total: ₹{grandTotal.toFixed(2)} </p>
        </div>
    );
};

export default Cart;