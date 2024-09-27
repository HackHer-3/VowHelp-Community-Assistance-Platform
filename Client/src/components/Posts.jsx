import Dp from '../assets/img/logo.png'
import Post1 from '../assets/img/post 1.jpg'
const Posts = () => {
    return (
        <>
            <div className="flex flex-col h-[85vh] items-center justify-center">

                <div className="bg-white w-[35vw] h-[30vw] rounded-xl">

                    <div className="flex w-full p-3">
                        <img src={Dp} alt="dp" className='h-10 border-2 border-red-600 rounded-full' />
                        <h3 className='font-bold p-2'>Hafu sudin</h3>
                    </div>
                    <div className='p-5'>
                        <img src={Post1} alt="Post 1 in UI" className=' border-black border-2 rounded-lg' />
                    </div>
                    <div className="flex w-[10vw] justify-center">

                        {/* <div className="w-[20vw] flex  flex-row gap-3 bg-slate-400"> */}
                        <button className='bg-red-500 hover:bg-transparent rounded-lg hover:text-black text-white font-bold border-2 border-red-500 p-3'>Respond</button>


                        {/* </div> */}

                    </div>
                    

                </div>


            </div>


        </>
    )
}

export default Posts
