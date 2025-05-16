
import { SET_USER_DATA } from './constants'
const initialState = [];
export const useReducer = (state = initialState, action) => { // action is the return value of action.js file, state contains all data foe the applicatin
    switch (action.type) {
        case SET_USER_DATA:
            console.log('Reducer Received Data:', action.data);
            return{ 
                ...state,
                users: action.data.users
            }

        default:
            return state;
    }
}