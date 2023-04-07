import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {

    const Scart = useLoaderData()
    const { products, savedCart } = Scart;

    const [cart, setCart] = useState(savedCart);


    const handleRemoveFromCart = id =>{
        const remainingCart = cart.filter(product=>product.id!==id);
        setCart(remainingCart);
        removeFromDb(id)
    }


    return (
        <div>
            <div className='shop-container'>
                <div className='review-container'>
                    <h2>Orders Page: {cart.length} </h2>
                    <div>
                        {
                            cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart} />)
                        }
                    </div>
                </div>
                <div className='cart-container'>
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Orders;