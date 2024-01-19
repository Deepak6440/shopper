import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slice/ProductSlice";
import cartReducer from "./Slice/CartSlice";


export default configureStore({
   reducer:{
    productReducer,
    cartReducer
   }
})