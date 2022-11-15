import { ADD_TO_CART, DECEREMENT_CART, INCEREMENT_CART } from './CartActionType';

const initialState = {
    cart : []
}

const CartReducer = (state = initialState , action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            let hasProduct = state.cart.find(p => p.id === action.payload.id) ? true : false;
            // false [...state.cart , {...action.payload , quantity : 1}]
            // true state.cart.map(p => p.id === action.payload.id ? {...p , quantity : p.quantity + 1 } : p)
            state.cart = hasProduct ? state.cart.map(p => p.id === action.payload.id ? {...p , quantity : p.quantity + 1 } : p) : [...state.cart , {...action.payload , quantity : 1}]
            return {...state , cart : state.cart}

        case INCEREMENT_CART:
            state.cart = state.cart.map(p => p.id === action.payload ? {...p , quantity : p.quantity + 1 } : p)
            return {...state , cart : state.cart}
                
        case DECEREMENT_CART:
            let product = state.cart.find(p => p.id === action.payload)
            state.cart = product.quantity > 1 ? state.cart.map(p => p.id === action.payload ? {...p , quantity : p.quantity - 1 } : p) : state.cart;
            return {...state , cart : state.cart}
        default:
            return state
    }
}

export default CartReducer;