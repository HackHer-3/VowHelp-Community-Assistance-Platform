import Dp from '../assets/img/logo.png'
import Post1 from '../assets/img/post 1.jpg'
import { HeartHandshake } from "lucide-react"
import comment from '../assets/img/chat-heart-line.png'
import handrise from '../assets/img/hand.png'
import share from '../assets/img/share-forward-line.png'
import resolved from '../assets/img/thumb-up-line.png'

const Posts = () => {
    return (
        <>
            <div className="flex flex-col h-[85vh] items-center p-5 justify-start">

                <div className="bg-white w-[40vw] h-[150vh] rounded-xl shadow-lg">

                    <div className="flex justify-start w-full p-3 py-2">
                        <img src={Dp} alt="dp" className=' h-10 border-2 border-red-600 rounded-full' />
                        <h3 className='font-bold text-xl p-1 px-2'>Hafu sudin</h3>

                    </div>
                    <div className="pl-5 flex justify-center w-full p-2 pt-0">
                        Heyy Guyss!!I'm glad to inform that i visited a Orphanage and provided them food and clothings
                    </div>
                    <div className='p-5 py-2'>
                        <img src={Post1} alt="Post 1 in UI" className=' border-black border-2 rounded-lg' />
                    </div>
                    <div className="pl-6 flex flex-row  w-[25vw] gap-4">
                        <button className=' bg-red-500 hover:bg-transparent rounded-lg hover:text-black text-white font-bold border-2 border-red-500 p-3 py-2 '>Respond</button>
                        <div className="flex justify-center mt-3">
                            <HeartHandshake className=" size-xl text-red-500 w-6 h-6 " />
                        </div>
                        <img src={comment} alt="Comment Icon" className='mt-2 h-8'/>
                            <img src={share} alt="Share Icon" className='mt-2 h-8'/>
                            
                    </div>

                </div>
            </div>
        </>
    )
}

export default Posts
