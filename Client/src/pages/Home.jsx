import React from 'react';
import Home_nav from '../components/Home_nav';
import Emergency_req from '../components/Emergency_req';
import Posts from '../components/Posts';
import Filters from '../components/Filters';

const Home = () => {
  return (
    <>
      <div className='bg-slate-100 w-screen h-screen'>
        <Home_nav />
        <div className='flex'>
          <div className='flex-none w-1/4'>
            <Filters />
          </div>
          <div className='flex-grow w-2/4 mx-auto top-30 overflow-y-auto'>
            <Posts/>
          </div>
          <div className='flex-none w-1/4'>
            <Emergency_req />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
