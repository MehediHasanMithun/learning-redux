import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/CartAction";

const initialState = {
    cart: [],
    products: [{ name: 'Asus', id: 1 },
    { name: 'HP', id: 2 },
    { name: 'Dell', id: 3 },
    { name: 'Mac', id: 4 },
    { name: 'Walton', id: 5 }]
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                name: action.name,
                productId: action.id,
                cartId: state.cart.length + 1
            }
            return { ...state, cart: [...state.cart, newItem] }

        case REMOVE_FROM_CART:
            const cartId = action.cartId;
            const newCart = state.cart.filter(pd=>pd.cartId !== cartId);
            return{...state,cart:newCart};
        default:
            return state;
    }
}
export default cartReducer;
