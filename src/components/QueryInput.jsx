import { useState } from "react";
import { FetchMockData } from "../utils/FetchMockdata"; // Import fetch function 
 import AiResponse from "./AiResponse";
const QueryInput = () => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    console.log(" Submit Button Clicked! Input:", input); // Log button click

    if (input.trim() === "") {
      console.log(" No input provided!");
      return;
    }

    FetchMockData(input); // Fetch and store data in Redux

    setInput(""); // Clear input after submission
  };


  return (
    <div className="space-y-4 mt-4">
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
      <AiResponse/>
    </div>
  );
};

export default QueryInput;