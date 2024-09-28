import '../assets/css/Signin.css'
import logo from "../assets/img/logo.png"
import gl from "../assets/img/Google.png"
import fb from "../assets/img/Facebook.png"
import ig from "../assets/img/instagram.png"
// import logo from "../assets/img/Untitled2.png"
const Signin = () => {
  return (
    <div className='container'>

    <div className='card'>
       {/* <div className=''>
       <img src={logo} alt="" className='img-logo'/>
       </div>  */}
        <h1 className='text-2xl font-bold mb-4'>SignIn</h1>

        <input type="text" placeholder='Enter Your Email' className='border-2 border-red-300 rounded-md focus:outline-none'/>
        <input type="password" placeholder='Enter Your Password' className='border-2 border-red-300 rounded-md focus:outline-none'/>
        <button>Login</button>
        {/* <div className='card2'>
          <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'>
        <img src={gl} alt=""/></a>
        <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'><img src={fb} alt="" /></a>
        <a href="https://www.facebook.com/login/" target='_blank'><img src={ig} alt="" /></a>
    </div> */}
    <div className="flex justify-center h-[10vh] gap-8 mt-6">
  <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
    <img src="/icons/instagram-favicon.png" alt="Instagram" className="w-7 h-7 transition-transform duration-300 ease-in-out hover:scale-125 hover:text-red-500" />
  </a>
  <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
    <img src="/icons/facebook-favicon.png" alt="Facebook" className="w-7 h-7 transition-transform duration-300 ease-in-out hover:scale-125 hover:text-blue-500" />
  </a>
  <a href="mailto:someone@example.com">
    <img src="/icons/email-favicon.png" alt="Email" className="w-7 h-7 transition-transform duration-300 ease-in-out hover:scale-125 hover:text-yellow-500" />
  </a>
</div>
    </div>
    </div>
  )
}

export default Signin