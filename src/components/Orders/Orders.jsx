import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {

    const Scart = useLoaderData()
    const { products, savedCart } = Scart;

    const [cart, setCart] = useState(savedCart);


    const handleRemoveFromCart = id =>{
        const remainingCart = cart.filter(product=>product.id!==id);
        setCart(remainingCart);
        removeFromDb(id)
    }

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
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
                    <Cart cart={cart} handleClearCart={handleClearCart}>
                        <Link className='btn-proceed' to='/checkout' >Proceed Checkout</Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;