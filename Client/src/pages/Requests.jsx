import React, { useState } from "react";

const Requests = () => {
  const [filter, setFilter] = useState("all");
  const requests = [
    { id: 1, name: "John Doe", type: "Medical", status: "Pending" },
    { id: 2, name: "Jane Smith", type: "Financial", status: "Resolved" },
    { id: 3, name: "Alex Johnson", type: "Food", status: "Pending" },
  ];

  const filteredRequests =
    filter === "all"
      ? requests
      : requests.filter((request) => request.status === filter);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Manage Requests</h2>
      <div className="flex items-center mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 mr-4 rounded-md ${
            filter === "all" ? "bg-red-600" : "bg-gray-700"
          } hover:bg-red-500`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Pending")}
          className={`px-4 py-2 mr-4 rounded-md ${
            filter === "Pending" ? "bg-red-600" : "bg-gray-700"
          } hover:bg-red-500`}
        >
          Pending
        </button>
        <button
          onClick={() => setFilter("Resolved")}
          className={`px-4 py-2 rounded-md ${
            filter === "Resolved" ? "bg-red-600" : "bg-gray-700"
          } hover:bg-red-500`}
        >
          Resolved
        </button>
      </div>
      <ul>
        {filteredRequests.map((request) => (
          <li
            key={request.id}
            className="mb-4 bg-gray-800 p-4 rounded-lg hover:bg-gray-700"
          >
            <div className="flex justify-between">
              <span>
                <strong>{request.name}</strong> requested for{" "}
                <strong>{request.type}</strong>
              </span>
              <span
                className={`text-sm ${
                  request.status === "Pending"
                    ? "text-yellow-400"
                    : "text-green-400"
                }`}
              >
                {request.status}
              </span>
            </div>
            {request.status === "Pending" && (
              <div className="mt-4 flex justify-end">
                <button className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-500 mr-2">
                  Approve
                </button>
                <button className="bg-gray-600 px-4 py-2 rounded-md hover:bg-gray-500">
                  Reject
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Requests;
