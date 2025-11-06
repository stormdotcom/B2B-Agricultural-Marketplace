import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFarmers } from "./farmersApi";

export const fetchFarmers = createAsyncThunk(
  "farmers/fetchFarmers",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getFarmers();
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch farmers"
      );
    }
  }
);

const farmersSlice = createSlice({
  name: "farmers",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFarmers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFarmers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFarmers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default farmersSlice.reducer;
