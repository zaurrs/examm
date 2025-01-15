import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}


const basketSlice = createSlice({
    name:"basket",
    initialState,
    reducers:{
        addBasket :(state, action)=>{
            const existProduct = state.products.find((product)=>product._id===action.payload._id)
            
            if(!existProduct){
                state.products.push({...action.payload, quantity:1})
            } else{
                existProduct.quantity +=1
            }
        },
        deleteBasket: (state, action)=>{
            state.products = state.products.filter((item)=>item._id !== action.payload._id)
        }
    }
})

export const {addBasket,deleteBasket} = basketSlice.actions;
export default basketSlice.reducer