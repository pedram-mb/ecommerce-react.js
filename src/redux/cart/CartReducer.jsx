import {ADD_TO_CART} from './CartActionType';

const initialState = {
    cart : []
}

const CartReducer = (state = initialState , action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const hasItem = state.cart.find(p => p.id === action.payload.id) ? true : false;
            state.cart = hasItem ? state.cart.map(p => p.id === action.payload.id ? {...p , quantity : p.quantity + 1} : p) : [...state.cart , {...action.payload , quantity : 1}]
            return { ...state , cart : state.cart}
        default:
            return state
    }
}

export default CartReducer;