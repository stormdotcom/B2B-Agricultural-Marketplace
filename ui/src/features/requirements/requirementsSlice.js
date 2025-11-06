import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postRequirement } from './requirementsAPI';

export const submitRequirement = createAsyncThunk(
  'requirements/submitRequirement',
  async (requirementData, { rejectWithValue }) => {
    try {
      const response = await postRequirement(requirementData);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to submit requirement'
      );
    }
  }
);

const requirementsSlice = createSlice({
  name: 'requirements',
  initialState: {
    loading: false,
    success: false,
    error: null,
    message: null,
  },
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitRequirement.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
        state.message = null;
      })
      .addCase(submitRequirement.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message || 'Requirement submitted successfully';
      })
      .addCase(submitRequirement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred';
      });
  },
});

export const { resetState } = requirementsSlice.actions;
export default requirementsSlice.reducer;
