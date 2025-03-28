import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery } from "../Store/sumitQuerySlice";
const QueryInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!query.trim()) return;
    dispatch(submitQuery(query));
    setQuery(""); // Clear input after submitting
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask a business question..."
        className="border p-2 rounded w-full"
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded mt-2  ">
        Submit Query
      </button>
    </div>
  );
};

export default QueryInput;
