import { ADD_TO_CART, DECEREMENT_CART, INCEREMENT_CART } from "./CartActionType"

export const AddToCart = (product)=>{
    return{
        type : ADD_TO_CART,
        payload : product
    }
}

export const Increment = (productId)=>{
    return{
        type : INCEREMENT_CART,
        payload : productId
    }
}

export const Decrement = (productId)=>{
    return{
        type : DECEREMENT_CART,
        payload : productId
    }
}