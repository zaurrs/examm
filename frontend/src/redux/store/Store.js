import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import productSlice  from '../features/ProductSlice'


const persistProductConfig = {
    key: 'product',
    storage,
  }
   
const persistedproductReducer = persistReducer(persistProductConfig, productSlice)

export const store = configureStore({
  reducer: {
    product:persistedproductReducer,

  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware(

{
    serializableCheck:false,

})
  
})

export const persistor = persistStore(store)    