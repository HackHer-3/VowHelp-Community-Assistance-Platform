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
    <div className='w-screen h-screen bg-slate-200 fixed flex items-center justify-center'>
      <div className="bg-white shadow-2xl p-6 rounded-lg w-full sm:w-[80vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw]">
        <h2 className="text-xl text-red-600 font-bold mb-4">Add New Request</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              className="w-full p-3 border border-red-300 rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              className="w-full p-3 border border-red-300 rounded"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              className="w-full p-3 border border-red-300 rounded"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Urgency Level</label>
            <select
              className="w-full p-3 border border-red-300 rounded"
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
            <button type="submit" className="bg-red-600 text-white p-2 rounded">
              Add Request
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .bg-white {
            width: 90vw;
            padding: 1rem;
          }
          h2 {
            font-size: 1.25rem;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .bg-white {
            width: 75vw;
            padding: 1.5rem;
          }
          h2 {
            font-size: 1.5rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .bg-white {
            width: 50vw;
            padding: 2rem;
          }
          h2 {
            font-size: 1.75rem;
          }
        }

        @media (min-width: 1025px) {
          .bg-white {
            width: 30vw;
            padding: 2.5rem;
          }
          h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AddRequestForm;
