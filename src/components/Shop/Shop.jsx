import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {

        fetch('fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the addedproduct;
        for (const id in storedCart) {
            //step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log(addedProduct)
        }

        setCart(savedCart);

    }, [products]);

    const handleAddToCart = product => {
        let newCart = [];

        const exists = cart.find(pd => pd.id === product.id);

        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remainingCart = cart.filter(pd => pd.id !== product.id);
            newCart = [...remainingCart, product]
        }

        setCart(newCart);
        addToDb(product.id);
    }

    const handleClearCart = ()=>{
        setCart([]);
        deleteShoppingCart()
    }



    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product key={product.id} product={product} handleCart={handleAddToCart} />)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    
                    <Link to='orders' className='btn-proceed' >Review Order</Link>
                    
                </Cart>
            </div>
        </div>
    );
};

export default Shop;