import Dp from '../assets/img/logo.png'
import Post1 from '../assets/img/post 1.jpg'
import resolved from "../assets/img/resolved.png"
import unresolved from "../assets/img/Unresolved.png"
const Posts = () => {
    return (
        <>
            <div className="flex flex-col h-[85vh] items-center p-5 justify-start">

                <div className="bg-white w-[40vw] h-[100vh] rounded-xl">

                    <div className="flex justify-start w-full p-3">
                        <img src={Dp} alt="dp" className='h-10 border-2 border-red-600 rounded-full' />
                        <h3 className='font-bold p-2'>Hafu sudin</h3>

                    </div>
                    <div className="flex w-full p-3">
                        Heyy Guyss!!I'm glad to inform that i visited a Orphanage and provided them food and clothings
                    </div>
                    <div className='p-5'>
                        <img src={Post1} alt="Post 1 in UI" className=' border-black border-2 rounded-lg' />
                    </div>
                    <div className="pl-7 flex flex-row w-[10vw] justify-center gap-8">

                        {/* <div className="w-[20vw] flex  flex-row gap-3 bg-slate-400"> */}
                        <button className=' bg-red-500 hover:bg-transparent rounded-lg hover:text-black text-white font-bold border-2 border-red-500 p-3 '>Respond</button>
                       
                        <img src={resolved} alt="resolved" className='w-32 h-14 ' />
                        <img src={unresolved} alt="unresolved" className='w-32 h-14'/>
                        {/* </div> */}
                        <div className=' flex flex-row h-10'><img src={resolved} alt="Resolved icon" /><br /><img src={unresolved} alt="Unresolved icon" />
                    </div>
                    </div>
                    



                </div>


            </div>


        </>
    )
}

export default Posts
