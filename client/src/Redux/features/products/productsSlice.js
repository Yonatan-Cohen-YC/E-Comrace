import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "../../../Services/productsService";

const initialState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get products
export const getProducts = createAsyncThunk(
  "products/get",
  async (products, thunkAPI) => {
    try {
      const response = await productsService.getAllProducts();
      return response;
    } catch (error) {
      const message = (error.response && error.response.data) || error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.products = [];
      });
  },
});

export const { reset } = productsSlice.actions;
export default productsSlice.reducer;
