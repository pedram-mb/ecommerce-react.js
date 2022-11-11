import { SET_PRODUCTS } from "./ProductsActionType";

const initialState = {
    products : []
}

const ProductsReducer = (state = initialState , action)=>{
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state , products : action.paylaod}    
        default:
            return state
    }
}

export default ProductsReducer;