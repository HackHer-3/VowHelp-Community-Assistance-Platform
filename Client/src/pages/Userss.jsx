import React, { useState } from "react";

const Userss = () => {
  const [search, setSearch] = useState("");
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Helper" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Seeker" },
    { id: 3, name: "Alex Johnson", email: "alex@example.com", role: "Helper" },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Manage Users</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 w-full rounded-md text-black"
        />
      </div>
      <table className="table-auto w-full bg-gray-800 rounded-lg">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="hover:bg-gray-700">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3 text-center">
                <button className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-500">
                  View
                </button>
                <button className="bg-gray-600 px-4 py-2 ml-2 rounded-md hover:bg-gray-500">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userss;
