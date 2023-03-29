import React from 'react';
import './Product.css';
import { GrCart } from 'react-icons/gr';
import { AiFillStar } from 'react-icons/ai';

const Product = ({ product, handleCart }) => {

    const { id, name, img, seller, price, ratings } = product;

    const handleAddToCart = handleCart;

    const ShowStar = ({ratings}) => {

        const star = [];

        let i=1;
        while(i<=ratings){
            
             star.push(<AiFillStar/>)
            i++;
        }
        
        return star;

    }

    return (
        <div className='product'>
            <div className='produc-img'>
                <img
                    src={img}
                    alt="product image"
                    onError={(e => {
                        e.preventDefault();
                        e.target.src = 'https://chadwikdavis.com/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png';
                    })} />
            </div>
            <div className='product-info'>
                <h6 className='product-name' >{name}</h6>
                <p>Price: ₹{price}</p>
                <p>Manufecture: {seller} </p>
                <p className='rating' >Rating: <span className='stars' ><ShowStar ratings={ratings} /></span> </p>
            </div>
            <button onClick={() => { handleAddToCart(product) }} className='btn-cart'>Add to Cart <GrCart /> </button>
        </div>
    );
};

export default Product;