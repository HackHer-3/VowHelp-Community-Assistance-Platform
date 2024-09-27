import React from 'react'
import icon from '../assets/img/logo.png';
import profileimg from '../assets/img/download.jfif';

const Home_nav = () => {
    return (
        <>
            <div className='flex flex-row w-ful h-16 bg-white shadow-md'>
                
                    <img src={icon} alt="icon" className='h-[70px]  border-red-600' />
              
                <h1 className='text-red-600 text-xl mt-5 font-bold'>VowHelp</h1>
                <div className='flex flex-grow justify-center pt-2'>
                    {/* <input type="Search" placeholder='Search by issue' className='p-5 flex items-center  border-b-2 border-red-400 rounded-sm bg-slate-100 h-12 w-200 focus:outline-none' />
                    <button type="submit" className='border-none'><Search/></button> */}
                    <form class="form relative">
                        <button class="absolute left-2 -translate-y-1/2 top-[45%] p-1">
                            <svg
                                width="17"
                                height="16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-labelledby="search"
                                class="w-5 h-5 text-gray-700"
                            >
                                <path
                                    d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                                    stroke="currentColor"
                                    stroke-width="1.333"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                        </button>
                        <input
                            class="input rounded-full px-8 py-2 border-2 w-[20vw] border-red-500 focus:outline-none placeholder-gray-400 transition-all duration-300 shadow-md"
                            placeholder="Search..."
                            required=""
                            type="text"
                        />
                        <button type="reset" class="absolute right-4 -translate-y-1/2 top-[40%] p-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </form>


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