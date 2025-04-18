import { combineReducers } from "@reduxjs/toolkit";
import { useReducer } from "./userReducer";
import { wishlistReducer } from "./wishlistReducer";
import { cartReducer } from "./cartReducer";
import  currentProductReducer  from "./currentProductReducer";


const rootReducer = combineReducers({
user:useReducer,
wishlist:wishlistReducer,
cart:cartReducer,
currentProduct:currentProductReducer


})
export default rootReducer;