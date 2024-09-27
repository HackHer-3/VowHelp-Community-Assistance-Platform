import React from 'react'
import Home_nav from '../components/Home_nav'
import Emergency_req from '../components/Emergency_req'


const Home = () => {
  return (
   <>
   <div className='bg-slate-100 w-screen h-screen'>
   <Home_nav/>
   <Emergency_req/>
   </div>

   </>
  )
}

export default Home