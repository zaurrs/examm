import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import productSlice  from '../features/ProductSlice'
import basketSlice from '../features/basketSlice'


const persistProductConfig = {
    key: 'products',
    storage,
  }
  const persistBasketConfig = {
    key: 'basket',
    storage,
  }
   
const persistedproductReducer = persistReducer(persistProductConfig, productSlice)
const persistedBasketReducer = persistReducer(persistBasketConfig, basketSlice)

export const store = configureStore({
  reducer: {
    products:persistedproductReducer,
    basket:persistedBasketReducer,

  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware(

{
    serializableCheck:false,

})
  
})

export const persistor = persistStore(store)    