import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const QueryResult = () => {
  const { result, query, loading, error } = useSelector((state) => state.query);
  console.log("🧐 Query State in QueryResult:", { query, result, loading, error });

  // 🛠 Convert result object into chart data
  const chartData = result
    ? Object.entries(result).map(([key, value]) => ({ name: key, value }))
    : [];

  return (
    <div className="p-4 border rounded-md bg-white shadow">
      <h2 className="text-xl font-semibold mb-3">Query Result</h2>

      {/* Loading and Error Handling */}
      {loading && <p>⏳ Loading...</p>}
      {error && <p className="text-red-500">❌ Error: {error}</p>}
      {!loading && !error && query && (
        <>
          <p className="mb-2">Showing results for: <strong>{query}</strong></p>

          {/* 🛠 Debugging: Show raw data before rendering the chart */}
          <pre className="bg-gray-100 p-2 rounded text-sm mb-8">{JSON.stringify(chartData, null, 2)}</pre>
          <div className="w-full h-[900px]">
          <ResponsiveContainer width="80%" height={500}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4F46E5"  />
            </BarChart>
          </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default QueryResult;
