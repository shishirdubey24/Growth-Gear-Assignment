import React from "react";
import QueryInput from "./QueryInput";
//import QueryHistory from "./QueryHistory";
//import QueryHistory from "./Queryhistory";
//import QueryHistory from ",/QueryHistory";
import QueryHistory from "./QueryHistory";
const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <QueryInput />
       <QueryHistory/>
    </div>
  );
};

export default Dashboard;
