import {ADD_TO_CART} from './CartActionType';

export const AddToCart = (product)=>{
    return{
        type : ADD_TO_CART,
        payload : product
    }
}