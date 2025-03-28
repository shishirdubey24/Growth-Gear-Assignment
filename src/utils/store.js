import { configureStore } from "@reduxjs/toolkit";
//import { submitQuery } from "./sumitQuerySlice";
import submitQueryReducer from "./sumitQuerySlice"; // Import your slice

const store = configureStore({
  reducer: {
    // query: submitQueryReducer, // Add the reducer
    query: submitQueryReducer,
  },
});

export default store;
