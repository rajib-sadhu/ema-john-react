import React, { useEffect } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {

    const cart = useLoaderData()
    const { products, savedCart } = cart;

    console.log(savedCart);



    return (
        <div>
            <div className='shop-container'>
                <div className='product-container'>
                <h2>Orders Page: {savedCart.length} </h2>

                </div>
                <div className='cart-container'>
                    <Cart cart={savedCart} />
                </div>
            </div>
        </div>
    );
};

export default Orders;