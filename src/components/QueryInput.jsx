import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery,queryFailure,querySuccess } from "../utils/sumitQuerySlice";
import { fetchMockData } from "../utils/mockData";
const QueryInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async() => {
    console.log(" Submit Button Clicked! Input:", input); // Log button click
    if (input.trim() === "") {
      console.log(" No input provided!");
      return;
    }

    dispatch(submitQuery(input)); // Dispatch action
    console.log(" Dispatched submitQuery action:", input);
    try {
      const data = await fetchMockData(input);
      dispatch(querySuccess(data)); // Store result in Redux
      console.log(" Mock data returned:", data);
    } catch (error) {
      console.error(" Error fetching mock data:", error);
      dispatch(queryFailure("Failed to fetch data"));
    }
    setInput(""); // Clear input after submission
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Enter your query..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">
        Submit Query
      </button>
    </div>
  );
};

export default QueryInput;