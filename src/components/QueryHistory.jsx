import React from "react";
import { useSelector } from "react-redux";

const QueryHistory = () => {
  const queryHistory = useSelector((state) => state.query.history); // Ensure history exists in Redux
  console.log("📜 Current Query History:", queryHistory);
  if (!queryHistory) {
    return <p>No queries yet.</p>;
  }

  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">Query History</h2>

      <ul>
        {queryHistory.map((query, index) => (
          <li key={index} className="border-b py-1">
            {query}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryHistory;
