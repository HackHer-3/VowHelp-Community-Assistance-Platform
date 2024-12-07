import Logo from "../assets/img/logo.png";
import BG from "../assets/img/bg2.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-red-900 flex flex-col font-sans">
      {/* Header Section */}
      <header className="w-full p-4 flex justify-between items-center bg-red-800 text-white shadow-2xl">
        <h1 className="text-2xl font-bold">VowHelp</h1>
        <nav className="flex gap-3 px-4">
          <Link to="/about" className="hover:text-red-300 font-bold">
            About
          </Link>
          <Link to="/admindashboard" className="hover:text-red-300 font-bold">
            Admin Dashboard
          </Link>
          <a href="#features" className="hover:text-red-300 font-bold">
            Features
          </a>
          <a href="#contact" className="hover:text-red-300 font-bold">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 bg-gray-50 shadow-lg w-full overflow-hidden">
        <img
          src={Logo}
          alt="VowHelp Logo"
          className="md:w-1/2 max-w-xs md:max-w-md mb-6 md:mb-0 z-10 relative"
        />
        <div className="md:w-1/2 text-center md:text-left z-10 relative">
          <h2 className="text-6xl font-bold mb-4">Join Hands to Empower Communities</h2>
          <p className="text-xl mb-6">
            Connect with people in need and lend a helping hand where it matters
            the most.
          </p>
          <Link to="/auth">
            <button className="px-6 py-3 text-xl bg-red-600 text-white rounded-full shadow-lg hover:bg-red-500">
              Get Started
            </button>
          </Link>
        </div>
        <div className="absolute inset-0 bg-red-100 opacity-60 rounded-lg">
          <img src={BG} alt="Background" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 md:px-12 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-8">Features</h2>
        <div className="flex flex-wrap justify-center">
          {['Location-Based Assistance', 'Emergency Alerts', 'Reward System'].map((feature, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-md rounded-lg p-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
                <h4 className="text-xl font-bold mb-2">{feature}</h4>
                <p>Discover how {feature.toLowerCase()} can make a difference in your community.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-red-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
        <p className="mb-6">
          Want to know more about VowHelp or have suggestions? Reach out!
        </p>
        <Link to="/contact">
          <button className="px-6 py-3 bg-white text-red-600 rounded-full shadow-lg hover:bg-gray-200">
            Contact Us
          </button>
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-red-600 text-white py-4 text-center">
        <p>&copy; 2024 VowHelp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
