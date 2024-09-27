import React from 'react'
import icon from '../assets/img/my-icon.jpeg';
import profileimg from '../assets/img/download.jfif';
import {Search} from "lucide-react"
const Home_nav = () => {
    return (
        <>
            <div className='flex flex-row w-ful h-16 bg-slate-100 shadow-lg'>
                <div className='p-3'>
                    <img src={icon} alt="icon" className='w-10 h-10 rounded-full border-2 border-red-600' />
                </div>
                <h1 className='text-red-600 text-xl py-4 font-bold'>VowHelp</h1>
                <div className='flex flex-grow justify-center pt-2'>
                    <input type="Search" placeholder='Search by issue' className='p-5 flex items-center  border-b-2 border-red-400 rounded-sm bg-slate-100 h-12 w-200 focus:outline-none' />
                    <button type="submit" className='border-none'><Search/></button>
                </div>
                <div className='px-3 py-2 '>
                    <button className='rounded-md bg-red-600 text-white font-serif p-3 hover:bg-red-700'>Add Request +</button>
                </div>
                <div className='py-2 px-4'>
                    <img src={profileimg} alt="User Profile" className='border-red-400 border-2 rounded-full w-12 h-12' />
                </div>
            </div>
        </>
    )
}

export default Home_nav