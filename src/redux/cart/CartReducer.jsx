import { ADD_TO_CART, CLEAR_FROM_CART, DECEREMENT_CART, INCEREMENT_CART, REMOVE_FROM_LIST } from './CartActionType';

const initialState = {
    cart : localStorage.getItem('shoping-cart') ? JSON.parse(localStorage.getItem('shoping-cart')) : []
}

const HandleSaveLocalStorage = (cart)=>{
    localStorage.setItem('shoping-cart' , JSON.stringify(cart))
}

const CartReducer = (state = initialState , action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            let hasProduct = state.cart.find(p => p.id === action.payload.id) ? true : false;
            // false [...state.cart , {...action.payload , quantity : 1}]
            // true state.cart.map(p => p.id === action.payload.id ? {...p , quantity : p.quantity + 1 } : p)
            state.cart = hasProduct ? state.cart.map(p => p.id === action.payload.id ? {...p , quantity : p.quantity + 1 } : p) : [...state.cart , {...action.payload , quantity : 1}]
            HandleSaveLocalStorage(state.cart)
            return {...state , cart : state.cart}

        case INCEREMENT_CART:
            state.cart = state.cart.map(p => p.id === action.payload ? {...p , quantity : p.quantity + 1 } : p)
            HandleSaveLocalStorage(state.cart)
            return {...state , cart : state.cart}
                
        case DECEREMENT_CART:
            let product = state.cart.find(p => p.id === action.payload)
            state.cart = product.quantity > 1 ? state.cart.map(p => p.id === action.payload ? {...p , quantity : p.quantity - 1 } : p) : state.cart;
            HandleSaveLocalStorage(state.cart)
            return {...state , cart : state.cart}

        case REMOVE_FROM_LIST:
            state.cart = state.cart.filter(p => p.id !== action.payload)
            HandleSaveLocalStorage(state.cart)
            return {...state , cart : state.cart}

        case CLEAR_FROM_CART:
            HandleSaveLocalStorage([])
            return{
                ...state , cart : []
            }

        default:
            return state
    }
}

export default CartReducer;