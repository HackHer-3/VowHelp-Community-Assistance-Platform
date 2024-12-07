import React from "react";

const Reports = () => {
  const reports = [
    { id: 1, post: "Financial Help Request", reason: "Spam" },
    { id: 2, post: "Medical Assistance Needed", reason: "Inappropriate" },
  ];

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Manage Reports</h2>
      <ul>
        {reports.map((report) => (
          <li
            key={report.id}
            className="mb-4 bg-gray-800 p-4 rounded-lg hover:bg-gray-700"
          >
            <div>
              <strong>Post:</strong> {report.post}
            </div>
            <div>
              <strong>Reason:</strong> {report.reason}
            </div>
            <div className="mt-4 flex justify-end">
              <button className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-500 mr-2">
                Take Action
              </button>
              <button className="bg-gray-600 px-4 py-2 rounded-md hover:bg-gray-500">
                Dismiss
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
