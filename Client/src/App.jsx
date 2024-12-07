import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import SignInSignUp from "./pages/SignInSignUp";
import AddRequestForm from './components/AddRequestForm';
import Contact from "./pages/Contact"; // Make sure the filename matches (Contact with a capital C)
import About from "./pages/About";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import Userss from "./pages/Userss";
import Requests from "./pages/Requests";
import Reports from "./pages/Reports";
import Settingss from "./pages/Settingss";

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
        <Route path="/admindashboard" element={<AdminDashboard />} /> 
        <Route path="/users" element={<Userss />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settingss />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;