import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import SignInSignUp from "./pages/SignInSignUp";
import AddRequestForm from './components/AddRequestForm';
import Contact from "./pages/Contact"; // Make sure the filename matches (Contact with a capital C)
import About from "./pages/About";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<SignInSignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addrequest" element={<AddRequestForm />} />
        <Route path="/contact" element={<Contact />} /> {/* Contact Route */}
        <Route path="/about" element={<About />} /> {/* About Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;