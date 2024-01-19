import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import all_products from "../../Components/Assests/all_product"

export const fetchProduct = createAsyncThunk('products/fetch',async() =>{
    return all_products
})


const productSlice = createSlice({
    name:"ProductSlice",
    initialState:{
        products: [],
        status:'idle',
        error:null
    },
    reducers:{
        loadProducts : (state,action) =>{
            state.products = action.payload
        }
    },
    extraReducers : function(builder){
        builder
        .addCase(fetchProduct.pending, (state,action) =>{
            state.status = 'pending'
        })
        .addCase(fetchProduct.fulfilled,(state,action) =>{
            state.products = action.payload
        })
        .addCase(fetchProduct.rejected,(state,action) =>{
            state.error = action.error.message;
        })
    }
})

export default productSlice.reducer
export const {loadProducts} = productSlice.actions