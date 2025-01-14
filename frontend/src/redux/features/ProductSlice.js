import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
}

export const getProduct =createAsyncThunk ("products", async()=>{
    const {data} = await axios("http://localhost:5000/product")
    return data.products
})

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{ 
        builder.addCase(getProduct.fulfilled, (state, action)=>{
            state.products = action.payload
        })
    }
})

export const { extraReducers} = productSlice.actions

export default productSlice.reducer