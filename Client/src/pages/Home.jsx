import React, { useState } from 'react';
import Home_nav from '../components/Home_nav';
import Emergency_req from '../components/Emergency_req';
import Posts from '../components/Posts';
import Filters from '../components/Filters';

const Home = () => {
  const [filters, setFilters] = useState({});

  return (
    <>
      <div className="bg-white h-screen flex flex-col">
        <Home_nav />
        <div className="flex h-full mt-6">
          <div className="flex-none w-full sm:w-1/4 px-4">
            <Filters onFilterApply={setFilters} />
          </div>
          <div className="flex-grow w-full sm:w-2/4 mx-auto overflow-y-auto px-4">
            <Posts filters={filters} />
          </div>
          <div className="flex-none w-full sm:w-1/4 px-4">
            <Emergency_req />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
