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
            dpColor: 'red-600'
        },
        content: "Heyy Guyss!! I'm glad to inform that I visited an orphanage and provided them with food and clothing.",
        image: Post1,
        buttonColor: 'red-500',
        urgency: 'high', // High-level emergency
    },
    {
        id: 2,
        user: {
            name: 'Alex Turner',
            dpColor: 'blue-600'
        },
        content: "Last weekend, I had a wonderful time volunteering at a local animal shelter. I helped care for the animals and made some new furry friends.",
        image: Post1,
        buttonColor: 'blue-500',
        urgency: 'medium', // Medium-level emergency
    },
    {
        id: 3,
        user: {
            name: 'Sofia Lee',
            dpColor: 'green-600'
        },
        content: "I recently organized a community clean-up event in our neighborhood park. It was amazing to see so many people come together to keep our environment clean!",
        image: Post1,
        buttonColor: 'green-500',
        urgency: 'low', // Low-level emergency
    },
];

const Posts = () => {
    return (
        <div className="flex-grow overflow-y-auto h-[calc(100vh-4rem)] scrollbar-hidden"> {/* Adjust height based on your layout */}
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
                            <button className="hover:bg-transparent bg-red-500 border-red-500 rounded-lg hover:text-black text-white font-bold border-2 p-3">
                                Respond 
                            </button>
                            <div className="flex justify-center mt-3">
                                <HeartHandshake className="w-6 h-6"/>
                            </div>
                            <img src={comment} alt="Comment Icon" className='h-8 mt-2' />
                            <img src={share} alt="Share Icon" className='h-8 mt-2' />
                        </div>
                        {/* Circles for urgency indicator */}
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
}

export default Posts;
