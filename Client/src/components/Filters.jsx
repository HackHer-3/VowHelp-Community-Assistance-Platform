import React, { useState } from 'react';

const FilterOptions = ({ onFilterChange }) => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [issueType, setIssueType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [gender, setGender] = useState('');
  const [requiredSkills, setRequiredSkills] = useState('');
  const [requestStatus, setRequestStatus] = useState('');
  const [organization, setOrganization] = useState('');

  const handleFilterChange = () => {
    onFilterChange({
      location, date, issueType, urgency, ageGroup, gender,
      requiredSkills, requestStatus, organization
    });
  };

  return (
    <div className="w-80 p-4 border-r  border-gray-300 h-screen overflow-y-auto scrollbar-hidden"> {/* Hide scrollbar */}
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => { setLocation(e.target.value); handleFilterChange(); }}
          placeholder="Enter location"
          className="w-full p-2 border rounded  border-red-300 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => { setDate(e.target.value); handleFilterChange(); }}
          className="w-full p-2 border rounded border-red-300 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Kind of Issue:</label>
        <select
          value={issueType}
          onChange={(e) => { setIssueType(e.target.value); handleFilterChange(); }}
          className="w-full p-2 border rounded border-red-300 focus:outline-none"
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
        <label className="block text-sm font-medium mb-1">Urgency Level:</label>
        <select
          value={urgency}
          onChange={(e) => { setUrgency(e.target.value); handleFilterChange(); }}
          className="w-full p-2 border rounded border-red-300 focus:outline-none"
        >
          <option value="">Select urgency</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Critical">Critical</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Age Group:</label>
        <select
          value={ageGroup}
          onChange={(e) => { setAgeGroup(e.target.value); handleFilterChange(); }}
          className="w-full p-2 border rounded border-red-300 focus:outline-none"
        >
          <option value="">Select age group</option>
          <option value="Children">Children</option>
          <option value="Adults">Adults</option>
          <option value="Elderly">Elderly</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Request Status:</label>
        <select
          value={requestStatus}
          onChange={(e) => { setRequestStatus(e.target.value); handleFilterChange(); }}
          className="w-full p-2 border rounded border-red-300 focus:outline-none"
        >
          <option value="">Select status</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
          <option value="Ongoing">Ongoing</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Gender:</label>
        <select
          value={gender}
          onChange={(e) => { setGender(e.target.value); handleFilterChange(); }}
          className="w-full p-2 border rounded border-red-300 focus:outline-none"
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      {/* Uncomment if needed */}
      {/* <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Required Skills:</label>
        <input
          type="text"
          value={requiredSkills}
          onChange={(e) => { setRequiredSkills(e.target.value); handleFilterChange(); }}
          placeholder="Enter skills"
          className="w-full p-2 border rounded"
        />
      </div> */}
      
      {/* <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Organization:</label>
        <input
          type="text"
          value={organization}
          onChange={(e) => { setOrganization(e.target.value); handleFilterChange(); }}
          placeholder="Enter organization name"
          className="w-full p-2 border rounded"
        />
      </div> */}
    </div>
  );
};

const Filters = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Code to filter the posts based on the newFilters
  };

  return (
    <div className="flex ">
      <div className="flex-none">
        <FilterOptions onFilterChange={handleFilterChange} />
      </div>
      {/* <div className="flex-grow p-4">
        <div className="text-center">Posts will appear here based on the selected filters.</div>
      </div> */}
    </div>
  );
};

export default Filters;
