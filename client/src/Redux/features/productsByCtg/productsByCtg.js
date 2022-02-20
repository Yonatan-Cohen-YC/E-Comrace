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
export const getProductsByCtg = createAsyncThunk(
  "productsBtCtg/get",
  async (ctg, thunkAPI) => {
    try {
      const response = await productsService.getProductsByCtg(ctg);
      return response;
    } catch (error) {
      const message = (error.response && error.response.data) || error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const productsByCtg = createSlice({
  name: "productsByCtg",
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
      .addCase(getProductsByCtg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsByCtg.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProductsByCtg.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.products = [];
      });
  },
});

export const { reset } = productsByCtg.actions;
export default productsByCtg.reducer;
