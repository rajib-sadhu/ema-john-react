import React, { useState } from 'react';
import './Cart.css';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Cart = ({cart, storedCart, handleClearCart, children}) => {

    let total=0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = (total + totalShipping) * .07;
    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h3>Order Carts</h3>
            <p>Selected Items: {quantity} </p>
            <p>Total Price: ₹{total} </p>
            <p>Total Shipping: ₹{totalShipping} </p>
            <p>Tax: ₹{tax.toFixed(2)} </p>

            <h4>Grand Total: ₹{grandTotal.toFixed(2)} </h4>

            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear cart</span> 
                <RiDeleteBin6Line/>
            </button>
            {children}
        </div>
    );
};

export default Cart;