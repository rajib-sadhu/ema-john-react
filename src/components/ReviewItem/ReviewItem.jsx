import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const ReviewItem = ({ product, handleRemoveFromCart}) => {
    // console.log(product);
    const { id, img, name, price, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-item'> {name} </p>
                <p>Price: <span className='orange-text'>${price}</span> </p>
                <p>Quantity: <span className='orange-text'>${quantity}</span>  </p>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'>
                <RiDeleteBin6Line />
            </button>


        </div>
    );
};

export default ReviewItem;