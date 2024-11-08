// AddRequestForm.jsx
import React, { useState } from 'react';

const AddRequestForm = ({ onClose }) => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [urgencyLevel, setUrgencyLevel] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    onClose(); // Close the form on submit
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-[40vw] mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Add New Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Urgency Level</label>
          <select
            className="w-full p-3 border border-gray-300 rounded"
            value={urgencyLevel}
            onChange={(e) => setUrgencyLevel(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button type="button" onClick={onClose} className="mr-2 bg-gray-200 p-2 rounded">
            Cancel
          </button>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded">
            Add Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRequestForm;
