import React, { useState } from "react";

const Settingss = () => {
  const [siteStatus, setSiteStatus] = useState(true);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Admin Settings</h2>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Site Status</h3>
        <button
          onClick={() => setSiteStatus(!siteStatus)}
          className={`px-4 py-2 rounded-md ${
            siteStatus ? "bg-red-600" : "bg-gray-600"
          } hover:bg-red-500`}
        >
          {siteStatus ? "Deactivate Site" : "Activate Site"}
        </button>
      </div>
      <div className="space-x-4">
        <h3 className="text-xl font-bold mb-2">Change Password</h3>
        <input
          type="password"
          placeholder="New Password"
          className="p-2 rounded-md w-80 text-black"
        />
        <button className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-500 mt-4">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default Settingss;
