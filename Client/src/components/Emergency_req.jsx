

// const Emergency_req = () => {
//   return (
//    <>
//    <div className=' absolute right-7 top-24'>
//     <div className='px-9 gap-4 flex flex-col justify-center shadow-lg drop-shadow-lg align items-center bg-white p-6 rounded-2xl'>
//     <h1 className='bg-red-600 font-bold p-3 rounded-md text-white text-lg'>Emergency Requests</h1>
//      <div className='  p-2 hover:border-b-2 hover:border-b-red-600'>I caught in an accident so i need...</div>
//      <div className=' p-2 hover:border-b-2 hover:border-b-red-600'>Nedeed AB-veBlood Grp Urgent ... </div>
//      <div className='p-2 hover:border-b-2 hover:border-b-red-600'>Flood in velachery,Rajiv Nagar..</div>
//      <div className='  p-2  hover:border-b-2 hover:border-b-red-600'>I caught in an accident so i need</div>
//      <div className=' p-2  hover:border-b-2 hover:border-b-red-600'>I caught in an accident so i need</div>
//      <div className='  p-2  hover:border-b-2 hover:border-b-red-600'>I caught in an accident so i need</div>
//     </div>
//     </div>
//    </>
//   )
// }

// export default Emergency_req

import React, { useEffect, useState } from 'react';
import axiosInstance from '../services/api';

const Emergency_req = () => {
  const [emergencyRequests, setEmergencyRequests] = useState([]);

  useEffect(() => {
    axiosInstance.get('/api/emergency-requests')
      .then((response) => setEmergencyRequests(response.data))
      .catch((error) => console.error("Error fetching emergency requests", error));
  }, []);

  return (
    <div className="absolute right-7 top-24">
      <div className="px-9 gap-4 flex flex-col justify-center shadow-lg drop-shadow-lg align items-center bg-white p-6 rounded-2xl">
        <h1 className="bg-red-600 font-bold p-3 rounded-md text-white text-lg">Emergency Requests</h1>
        {emergencyRequests.length > 0 ? (
          emergencyRequests.map((request) => (
            <div key={request.id} className="p-2 hover:border-b-2 hover:border-b-red-600">
              {request.description}
            </div>
          ))
        ) : (
          <p>No emergency requests.</p>
        )}
      </div>
    </div>
  );
};

export default Emergency_req;
