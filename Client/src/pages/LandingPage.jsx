import Logo from "../assets/img/Untitled2.png"
import '../assets/css/Landing.css'

const Landing = () => {
  return (
    <div className='Home'>
      <div className='Home-Main'>
        <div className='img'>
          <img src={Logo} alt="" />
         <h2>VowHelp</h2></div>
        <div className='btn'>
      <button>Signin</button>
      <button>Signup</button>
      </div>
      </div>
    </div>
  )
}

export default Landing