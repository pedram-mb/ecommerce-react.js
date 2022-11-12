import {ADD_TO_CART} from './CartActionType';

const initialState = {
    cart : []
}

const CartReducer = (state = initialState , action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state , cart : [ ...state.cart , {...action.payload , quantity : 1} ]}
        default:
            return state
    }
}

export default CartReducer;