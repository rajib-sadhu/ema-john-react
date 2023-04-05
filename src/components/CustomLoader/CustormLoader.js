import { getShoppingCart } from "../../utilities/fakedb";

const cartProductLoader = async()=>{

    const loadedProducts = await fetch('fakeData/products.json');
    const products = await loadedProducts.json();
    // console.log(products)

    // if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];

    // console.log(storedCart)

    for(const id in storedCart ){
        console.log(id)
        const addedProduct = products.find(pd=>pd.id===id)
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    // if you need to send two things
    // with Array
    // return [products, savedCart];

    // With Object
    return { products, savedCart }
}



export {
    cartProductLoader
};