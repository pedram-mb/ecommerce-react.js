import { ADD_TO_CART, CLEAR_FROM_CART, DECEREMENT_CART, INCEREMENT_CART, REMOVE_FROM_LIST } from "./CartActionType"

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

export const RemoveFromList = (productId)=>{
    return{
        type : REMOVE_FROM_LIST,
        payload : productId
    }
}

export const ClearFromCart = ()=>{
    return{
        type : CLEAR_FROM_CART
    }
}