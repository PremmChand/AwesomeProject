import { ADD_TO_CART, REMOVE_FROM_CART, USER_LIST } from "./constants";


export function  addToCart(item){ // whenever this function is called it tells addtocart to store, then reducer add to store.Action always tells what to do
        return {
            type:ADD_TO_CART,
            data:item
        }
}

export function  removeFromCart(item){ 
    return {
        type:REMOVE_FROM_CART,
        data:item
    }
}

export function  getUserList(){ 
    return {
        type:USER_LIST
    }
}