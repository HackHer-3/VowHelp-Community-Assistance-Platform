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
       <div>
       <img src={logo} alt="" className='img-logo'/>
       </div> 
        <h1>SignIn</h1>
        <input type="text" placeholder='Enter Your Email'/>
        <input type="password" placeholder='Enter Your Password'/>
        <button>Login</button>
        <div className='card2'>
          <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'>
        <img src={gl} alt=""/></a>
        <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'><img src={fb} alt="" /></a>
        <a href="https://www.facebook.com/login/" target='_blank'><img src={ig} alt="" /></a>
    </div>
    </div>
    </div>
  )
}

export default Signin