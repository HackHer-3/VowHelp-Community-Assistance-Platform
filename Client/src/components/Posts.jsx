import React, { useEffect, useState } from 'react';
import axiosInstance from '../services/api';

const Posts = ({ filters }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the backend
    axiosInstance
      .get('/api/requests', { params: filters })
      .then((response) => {
        setPosts(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, [filters]);

  const handleRespond = (postIndex) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

    if (!currentUser) {
      alert('Please log in to respond to posts.');
      return;
    }

    // Match the post to a user based on the index
    const targetUser = users[postIndex];
    if (!targetUser) {
      alert('User not found for the selected post.');
      return;
    }

    // Add the response to the target user's profile
    const response = {
      responderId: currentUser.id,
      message: 'I am here to help!',
      respondeduser:currentUser.username,
      responderemail:currentUser.email,
      postDetails: posts[postIndex],
    };

    // Update the user's responses
    targetUser.responses = targetUser.responses || [];
    targetUser.responses.push(response);

    // Update localStorage
    users[postIndex] = targetUser;
    localStorage.setItem('users', JSON.stringify(users));

    alert(`Response submitted to ${targetUser.username}'s profile!`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Help Requests</h1>
      {posts.length > 0 ? (
        <ul className="space-y-6">
          {posts.map((post, index) => (
            <li key={post.id} className="p-6 border border-gray-300 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <h2 className="font-bold text-xl text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">{post.description}</p>
              <p className="text-sm text-gray-500 mb-2"><strong>Location:</strong> {post.location}</p>
              <p className="text-sm text-gray-500 mb-2"><strong>Urgency:</strong> {post.urgencyLevel}</p>
              <button
                onClick={() => handleRespond(index)}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300"
              >
                Respond
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No requests found.</p>
      )}
    </div>
  );
};

export default Posts;
