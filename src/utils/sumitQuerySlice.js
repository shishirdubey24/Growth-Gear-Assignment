import { createSlice } from "@reduxjs/toolkit";

const submitQuerySlice = createSlice({
  name: "query",
  initialState: {
    query: "",
    result: null,
    loading: false,
    error: null,
  },
  reducers: {
    submitQuery: (state, action) => {
      state.query = action.payload;
      state.loading = true;
      state.error = null;
    },
    querySuccess: (state, action) => {
      state.result = action.payload;
      state.loading = false;
    },
    queryFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { submitQuery, querySuccess, queryFailure } =
  submitQuerySlice.actions;
export default submitQuerySlice.reducer;
