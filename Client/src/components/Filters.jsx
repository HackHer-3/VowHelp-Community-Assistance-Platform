import React, { useState } from 'react';
import axiosInstance from '../services/api';

const FilterOptions = ({ onFilterChange }) => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [issueType, setIssueType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [gender, setGender] = useState('');
  const [requestStatus, setRequestStatus] = useState('');

  const handleFilterChange = () => {
    onFilterChange({
      location, date, issueType, urgency, ageGroup, gender, requestStatus,
    });
  };

  return (
    <div className="w-full sm:w-80 p-6 border-r border-gray-300 h-screen overflow-y-auto scrollbar-hidden bg-gray-50 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-6 text-gray-800">Filters</h3>
      <div className="space-y-4">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => { setLocation(e.target.value); handleFilterChange(); }}
            placeholder="Enter location"
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => { setDate(e.target.value); handleFilterChange(); }}
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Kind of Issue:</label>
          <select
            value={issueType}
            onChange={(e) => { setIssueType(e.target.value); handleFilterChange(); }}
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select issue</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Shelter">Shelter</option>
            <option value="Food">Food</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Urgency Level:</label>
          <select
            value={urgency}
            onChange={(e) => { setUrgency(e.target.value); handleFilterChange(); }}
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select urgency</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Age Group:</label>
          <select
            value={ageGroup}
            onChange={(e) => { setAgeGroup(e.target.value); handleFilterChange(); }}
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select age group</option>
            <option value="Children">Children</option>
            <option value="Adults">Adults</option>
            <option value="Elderly">Elderly</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Request Status:</label>
          <select
            value={requestStatus}
            onChange={(e) => { setRequestStatus(e.target.value); handleFilterChange(); }}
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select status</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
            <option value="Ongoing">Ongoing</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Gender:</label>
          <select
            value={gender}
            onChange={(e) => { setGender(e.target.value); handleFilterChange(); }}
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const Filters = ({ onFilterApply }) => {
  const handleFilterChange = (filters) => {
    onFilterApply(filters);
  };

  return <FilterOptions onFilterChange={handleFilterChange} />;
};

export default Filters;
