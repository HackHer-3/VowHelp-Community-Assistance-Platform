import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Sidebar */}
      <aside className="w-1/5 bg-red-600 p-6">
        <h1 className="text-2xl rounded-lg text-red-600 bg-white font-bold p-3 mb-8">
          Admin Panel
        </h1>
        <nav>
          <ul>
            <li className="mb-4">
              <a
                href="/admindashboard"
                className="block p-3 rounded-lg transition duration-300 hover:bg-red-500"
              >
                Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a
                href="/users"
                className="block p-3 rounded-lg transition duration-300 hover:bg-red-500"
              >
                Users
              </a>
            </li>
            <li className="mb-4">
              <a
                href="requests"
                className="block p-3 rounded-lg transition duration-300 hover:bg-red-500"
              >
                Requests
              </a>
            </li>
            <li className="mb-4">
              <a
                href="reports"
                className="block p-3 rounded-lg transition duration-300 hover:bg-red-500"
              >
                Reports
              </a>
            </li>
            <li className="mb-4">
              <a
                href="settings"
                className="block p-3 rounded-lg transition duration-300 hover:bg-red-500"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-4/5 p-8 bg-gray-900">
        {/* Header */}
        <header className="mb-6">
          <h2 className="text-3xl font-bold">Dashboard</h2>
        </header>

        {/* Stats Cards */}
        <section className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-red-600 p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:bg-red-500">
            <h3 className="text-lg font-bold">Total Users</h3>
            <p className="text-3xl font-semibold mt-2">450</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:bg-gray-200">
            <h3 className="text-lg font-bold">Active Requests</h3>
            <p className="text-3xl font-semibold mt-2">123</p>
          </div>
          <div className="bg-red-600 p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:bg-red-500">
            <h3 className="text-lg font-bold">Resolved Requests</h3>
            <p className="text-3xl font-semibold mt-2">320</p>
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Recent Activity</h3>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <ul>
              <li className="mb-3">
                <span className="font-semibold">User John</span> responded to a
                request for medical help.
              </li>
              <li className="mb-3">
                <span className="font-semibold">User Sarah</span> posted a new
                request for financial assistance.
              </li>
              <li className="mb-3">
                <span className="font-semibold">User Alex</span> flagged a post
                for inappropriate content.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
