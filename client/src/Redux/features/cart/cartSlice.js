import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "../../../Services/cartService";

const initialState = {
  cart: [],
  totalPrice: 0,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getUserCart = createAsyncThunk(
  "cart/get",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await cartService.getUserCart(token);
    } catch (error) {
      const message = (error.response && error.response.data) || error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addItemToCart = createAsyncThunk(
  "cart/add",
  async (productId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await cartService.addItemToCart(productId, token);
    } catch (error) {
      const message = (error.response && error.response.data) || error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteItemFromCart = createAsyncThunk(
  "cart/delete",
  async (productId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await cartService.deleteItemFromCart(productId, token);
    } catch (error) {
      const message = (error.response && error.response.data) || error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cart = action.payload.items;
        state.totalPrice = action.payload.totalPrice;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.cart = [];
        state.totalPrice = 0;
      })
      .addCase(addItemToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addItemToCart.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteItemFromCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteItemFromCart.fulfilled, (state, action) => {
        console.log("from slice ", action.payload);
        state.isLoading = false;
        state.isSuccess = true;
        state.cart = action.payload.items;
        state.totalPrice = action.payload.totalPrice;
      })
      .addCase(deleteItemFromCart.rejected, (state) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        // state.message = action.payload;
      });
  },
});

export const { reset } = cartSlice.actions;

export default cartSlice.reducer;
