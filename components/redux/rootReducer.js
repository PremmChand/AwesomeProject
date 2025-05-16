
import { combineReducers } from "redux";
import { cartReducer  } from "./cartReducer";
import { useReducer } from "./userReducer";

export default combineReducers ({  // If we have multiple reducers then we need to combine them in one place using rootReducer.
    cart: cartReducer ,
    users: useReducer
})