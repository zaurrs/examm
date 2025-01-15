import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import productSlice  from '../features/ProductSlice'
import basketSlice from '../features/basketSlice'
import wishlistSlice from '../features/Wishlist'

const persistProductConfig = {
    key: 'products',
    storage,
  }
  const persistBasketConfig = {
    key: 'basket',
    storage,
  }
  const persistwishConfig = {
    key: 'wishlist',
    storage,
  }
   
const persistedproductReducer = persistReducer(persistProductConfig, productSlice)
const persistedBasketReducer = persistReducer(persistBasketConfig, basketSlice)
const persistedwishReducer = persistReducer(persistwishConfig, wishlistSlice)

export const store = configureStore({
  reducer: {
    products:persistedproductReducer,
    basket:persistedBasketReducer,
    wishlist:persistedwishReducer,

  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware(

{
    serializableCheck:false,

})
  
})

export const persistor = persistStore(store)    