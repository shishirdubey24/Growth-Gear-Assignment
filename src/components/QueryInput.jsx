import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery } from "../utils/sumitQuerySlice";
const QueryInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("🚀 Submit Button Clicked! Input:", input); // Log button click
    if (input.trim() === "") {
      console.log("⚠️ No input provided!");
      return;
    }

    dispatch(submitQuery(input)); // Dispatch action
    console.log("📤 Dispatched submitQuery action:", input);

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