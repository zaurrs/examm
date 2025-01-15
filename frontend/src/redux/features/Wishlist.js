import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      console.log(action.payload);
      const existProduct = state.wishlist.find(
        (product) => product._id === action.payload._id
      );
      if (!existProduct) {
        state.wishlist.push({ ...action.payload });
      }
    },
    deleteWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addWishlist, deleteWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
