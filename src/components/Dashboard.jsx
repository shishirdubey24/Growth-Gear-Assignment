import QueryInput from "./QueryInput";
import QueryHistory from "./QueryHistory";
import QueryResult from "./QueryResults";
import NavBar from "./NavBar";

const Dashboard = () => {
  return (
    <div >
        <NavBar/>
    
    <div className="p-6 space-y-6 max-w-6xl mx-auto ">
      {/* Input Section */}
      <QueryInput />

      {/* Full Width Sections on Large Screens */}
      <div className="space-y-6 lg:space-y-0 lg:flex lg:flex-col lg:gap-10">
        <div className="w-full">
          <QueryHistory />
        </div>
        <div className="w-full">
          <QueryResult />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
