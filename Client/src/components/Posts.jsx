import React from 'react';
import Dp from '../assets/img/logo.png';
import Post1 from '../assets/img/post 1.jpg';
import { HeartHandshake } from "lucide-react";
import comment from '../assets/img/chat-heart-line.png';
import share from '../assets/img/share-forward-line.png';

const posts = [
    {
        id: 1,
        user: {
            name: 'Hafu Sudin',
            dpColor: 'red-600',
            phone: '+1234567890',
            email: 'hafusudin@example.com',
        },
        content: "Heyy Guyss!! I'm glad to inform that I visited an orphanage and provided them with food and clothing.",
        image: Post1,
        buttonColor: 'red-500',
        urgency: 'high', // High-level emergency
    },
    {
        id: 2,
        user: {
            name: 'Shyam Raj',
            dpColor: 'green-600',
            phone: '+9876543210',
            email: 'shyamraj@example.com',
        },
        content: "I'm looking for donations to help fund a local community center that will serve as a safe space for children.",
        image: Post1,
        buttonColor: 'green-500',
        urgency: 'medium', // Medium-level emergency
    },
    {
        id: 3,
        user: {
            name: 'Aisha Khan',
            dpColor: 'blue-600',
            phone: '+1122334455',
            email: 'aishakhan@example.com',
        },
        content: "Volunteers needed for a beach cleanup event this Saturday. Let's work together to keep our beaches clean!",
        image: Post1,
        buttonColor: 'blue-500',
        urgency: 'low', // Low-level emergency
    },
    {
        id: 4,
        user: {
            name: 'Ravi Patel',
            dpColor: 'purple-600',
            phone: '+5566778899',
            email: 'ravipatel@example.com',
        },
        content: "Our animal shelter is in need of blankets and food for the rescued animals. Any help would be appreciated.",
        image: Post1,
        buttonColor: 'purple-500',
        urgency: 'high', // High-level emergency
    },
    // Add more posts as needed
];

const Posts = ({ onRespond }) => {
  return (
    <div className="flex-grow overflow-y-auto h-[calc(100vh-4rem)] scrollbar-hidden">
      <div className="flex flex-col items-center p-5 justify-start gap-6">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="bg-white w-[40vw] rounded-xl shadow-lg p-3 flex flex-col justify-between mb-4 relative"
          >
            <div className="flex justify-start w-full py-2">
              <img 
                src={Dp} 
                alt="dp" 
                className="h-10 border-2 border-red-500 rounded-full" 
              />
              <h3 className='font-bold text-xl p-1 px-2'>{post.user.name}</h3>
            </div>
            <div className="pl-5 flex justify-start w-full p-2 pt-0">
              {post.content}
            </div>
            <div className='p-5 py-2 flex-grow'>
              <img 
                src={post.image} 
                alt={`Post ${post.id} in UI`} 
                className='border-black border-2 rounded-lg w-full h-auto' 
              />
            </div>
            <div className="pl-5 flex flex-row w-full justify-start gap-4 mt-2">
              <button 
                onClick={() => onRespond(post.user)} // Pass user contact info
                className="hover:bg-transparent bg-red-500 border-red-500 rounded-lg hover:text-black text-white font-bold border-2 p-3"
              >
                Respond 
              </button>
              <div className="flex justify-center mt-3">
                <HeartHandshake className="w-6 h-6"/>
              </div>
              <img src={comment} alt="Comment Icon" className='h-8 mt-2' />
              <img src={share} alt="Share Icon" className='h-8 mt-2' />
            </div>
            <div className="absolute right-7 top-6 flex gap-1">
    <div 
        className={`w-5 h-5 rounded-full ${post.urgency === 'high' ? 'bg-red-500' : 'bg-gray-300'}`}
        title="High urgency"
    ></div>
    <div 
        className={`w-5 h-5 rounded-full ${post.urgency === 'medium' ? 'bg-yellow-500' : 'bg-gray-300'}`}
        title="Medium urgency"
    ></div>
    <div 
        className={`w-5 h-5 rounded-full ${post.urgency === 'low' ? 'bg-green-500' : 'bg-gray-300'}`}
        title="Low urgency"
    ></div>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
