import { createSlice } from "@reduxjs/toolkit";

const submitQuerySlice = createSlice({
  name: "query",
  initialState: {
    query: "",
    result: null,
    history: [],
    loading: false,
    error: null,
  },
  reducers: {
    submitQuery: (state, action) => {
      console.log("Submit is called", action);
      state.query = action.payload;
      state.loading = true;
      state.error = null;
      state.history.unshift(action.payload); // ✅ Store past queries in history
      if (state.history.length > 5) state.history.pop(); // Limit to last 5 queries
      console.log("📌 submitQuery action triggered:", action.payload);
      console.log("✅ Updated State:", state);
    },
    querySuccess: (state, action) => {
      state.result = action.payload;
      state.loading = false;
      console.log("✔️ Query Success:", action.payload);
    },
    queryFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      console.log("❌ Query Failed:", action.payload);
    },
  },
});

export const { submitQuery, querySuccess, queryFailure } =
  submitQuerySlice.actions;
export default submitQuerySlice.reducer;
