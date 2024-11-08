import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"
import SignInSignUp from "./pages/SignInSignUp"
import AddRequestForm from './components/AddRequestForm';
import { Route,BrowserRouter,Routes } from "react-router-dom"
function App() {
   
  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/auth" element={<SignInSignUp/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/addrequest" element={<AddRequestForm/>} />
       </Routes>
       </BrowserRouter>

  
    </>
  )
}

export default App
