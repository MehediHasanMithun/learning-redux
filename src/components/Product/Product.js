import React from 'react';

const Product = (props) => {
    const {product,addToCart} = props;
    return (
        <div>
            <h1>{product.id}.{product.name}</h1>
            <button onClick={()=>addToCart(product.name,product.id)}>Add to Cart</button>

        </div>
    );
};

export default Product;