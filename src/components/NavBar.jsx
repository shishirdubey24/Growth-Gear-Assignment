const NavBar = () => {
    return (
      <nav className="bg-gradient-to-r from-gray-400 to-gray-900 text-white p-4 shadow-md ">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Analytics</a></li>
            <li><a href="#" className="hover:underline">Settings</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
  