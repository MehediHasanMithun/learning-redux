export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart =(name,id)=>{
  return {
    type: ADD_TO_CART,name,id
  } 
}

export const removeFormCart =(cartId)=>{
    return{
        type:REMOVE_FROM_CART,cartId
    }
}