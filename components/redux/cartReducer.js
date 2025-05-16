
import { ADD_TO_CART, REMOVE_FROM_CART } from './constants'
const initialState = [];
export const cartReducer  = (state = initialState, action) => { // action is the return value of action.js file, state contains all data foe the applicatin
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ]
        case REMOVE_FROM_CART:
            let result = state.filter(item => {
                return item.name != action.data
            })
            return [...result]

        // case SET_USER_DATA:
        //     console.log('Reducer Received Data:', action.data);
    
        //     return action.data.users;

        default:
            return state
    }
}