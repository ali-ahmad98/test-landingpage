import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCaseStudies as fetchApi } from "./caseStudiesApi";

// Async thunk
export const fetchCaseStudies = createAsyncThunk(
  "caseStudies/fetchCaseStudies",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Network failed");
    }
  },
);

// Initial state
const initialState = {
  items: [],
  status: "idle",
  error: null,
  filters: {
    category: "All",
    query: "",
  },
};

// Slice
const caseStudiesSlice = createSlice({
  name: "caseStudies",
  initialState,

  reducers: {
    setCategory: (state, action) => {
      state.filters.category = action.payload;
    },

    setQuery: (state, action) => {
      state.filters.query = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // Request started
      .addCase(fetchCaseStudies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      // Request successful
      .addCase(fetchCaseStudies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })

      // Request failed
      .addCase(fetchCaseStudies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

// Export actions
export const { setCategory, setQuery } = caseStudiesSlice.actions;

// Export reducer
export default caseStudiesSlice.reducer;
