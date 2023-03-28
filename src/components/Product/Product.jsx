import React from 'react';
import './Product.css';
import { GrCart } from 'react-icons/gr';

const Product = ({product, handleCart}) => {

    const {id, name, img, seller, price, ratings  } = product;

   const handleAddToCart = handleCart;


    return (
        <div className='product'>
            <div className='produc-img'>
                <img src={img} alt="product image" />
            </div>
            <div className='product-info'>
                <h6 className='product-name' >{name}</h6>
                <p>Price: ₹{price}</p>
                <p>Manufecture: {seller} </p>
                <p>Rating: {ratings} </p>
            </div>
            <button onClick={()=>{handleAddToCart(product)}} className='btn-cart'>Add to Cart <GrCart/> </button>
        </div>
    );
};

export default Product;