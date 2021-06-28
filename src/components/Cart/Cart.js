import React from 'react';
import { connect } from 'react-redux';
import { removeFormCart } from '../../Redux/Actions/CartAction';

const Cart = (props) => {
    //console.log(props);
    const {cart,removeFromCart} = props;
    return (
        <div>
            <h1>This is cart</h1>
            <ul>
                {
                  cart.map(pd=><p key={pd.cartId}>{pd.cartId}. {pd.name} <button onClick={()=>removeFromCart(pd.cartId)}>X</button></p>)
                }
            </ul>

        </div>
    );
};

const mapStateToProps = state =>{
    return{
        cart: state.cart,
        products: state.products
    }
}
const mapDispatchToProps = {
    removeFromCart: removeFormCart
}

export default connect (mapStateToProps,mapDispatchToProps)(Cart);