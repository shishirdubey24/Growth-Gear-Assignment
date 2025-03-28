import { submitQuery, querySuccess, queryFailure } from "./sumitQuerySlice.js";
import store from "../utils/store.js"; // ✅ Ensure correct path to store

export const FetchMockData = async (query) => {
  try {
    store.dispatch(submitQuery(query)); // ✅ Dispatch loading state

    const response = await fetch("/mockData.json"); // ✅ Ensure correct path for Netlify
    const data = await response.json();

    const result = data.analytics[query] || { message: "No data found!" };

    store.dispatch(querySuccess(result)); // ✅ Dispatch fetched data to store
  } catch (error) {
    console.error("🚨 Error fetching data:", error);
    store.dispatch(queryFailure("Error fetching data!"));
  }
};
