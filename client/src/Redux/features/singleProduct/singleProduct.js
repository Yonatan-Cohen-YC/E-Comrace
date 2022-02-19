import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "../../../Services/productsService";

const initialState = {
  product: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getProductById = createAsyncThunk(
  "/products/getone",
  async (product, thunkAPI) => {
    try {
      const response = await productsService.getElementById(product);
      return response;
    } catch (error) {
      const message = (error.response && error.response.data) || error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const singleProductSlice = createSlice({
  name: "singleProduct",
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
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.product = {};
      });
  },
});

export const { reset } = singleProductSlice.actions;
export default singleProductSlice.reducer;
