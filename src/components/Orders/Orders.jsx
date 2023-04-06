import React, { useEffect } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {

    const cart = useLoaderData()
    const { products, savedCart } = cart;

    // console.log(savedCart);



    return (
        <div>
            <div className='shop-container'>
                <div className='review-container'>
                    <h2>Orders Page: {savedCart.length} </h2>
                    <div>
                        {
                            savedCart.map(product => <ReviewItem key={product.id} product={product} />)
                        }
                    </div>
                </div>
                <div className='cart-container'>
                    <Cart cart={savedCart} />
                </div>
            </div>
        </div>
    );
};

export default Orders;