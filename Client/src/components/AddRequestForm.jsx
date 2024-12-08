import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axiosInstance from '../services/api';

const AddRequestForm = () => {
  const [formData, setFormData] = useState({
    description: '',
    location: '',
    date: '',
    urgencyLevel: 'low',
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/api/requests', formData);
      alert('Request added successfully!');
      navigate('/home'); // Redirect to home page
    } catch (error) {
      console.error('Error adding request:', error);
      alert('Failed to add request. Please try again.');
    }
  };

  const handleCancel = () => {
    navigate('/home'); // Redirect to home page
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white shadow-2xl p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-red-600 mb-4">Add New Request</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              className="w-full p-3 border border-gray-300 rounded"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              className="w-full p-3 border border-gray-300 rounded"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              className="w-full p-3 border border-gray-300 rounded"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Urgency Level</label>
            <select
              name="urgencyLevel"
              className="w-full p-3 border border-gray-300 rounded"
              value={formData.urgencyLevel}
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="mr-2 bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
            >
              Add Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRequestForm;
