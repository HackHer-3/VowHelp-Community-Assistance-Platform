
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from '../assets/img/Signin.jpg'; 
import googleLogo from '../assets/img/Google.png'; 
import facebookLogo from '../assets/img/fb.png'; 
import instagramLogo from '../assets/img/ig.png'; 

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Home');
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleSocialSignIn = (platform) => {

    console.log(`Sign in with ${platform}`);
  };

  return (
    <div className="flex min-h-screen">
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">Welcome to VowHelp</h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-gray-100 p-10">
        <button
          onClick={handleBack}
          className="absolute top-6 left-6 px-4 py-2 text-white bg-red-600 rounded hover:bg-red-500"
        >
          Go Back
        </button>
        
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h2>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 mt-4 bg-red-600 text-white rounded hover:bg-red-500 transition duration-200"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 flex flex-col space-y-4">
            <h3 className="text-center text-lg text-gray-600">Or sign in with:</h3>
            <div className="flex justify-center space-x-4">
              <img
                src={googleLogo}
                alt="Sign in with Google"
                onClick={() => handleSocialSignIn('Google')}
                className="w-10 h-10 cursor-pointer hover:opacity-75 transition duration-200"
              />
              <img
                src={facebookLogo}
                alt="Sign in with Facebook"
                onClick={() => handleSocialSignIn('Facebook')}
                className="w-10 h-10 cursor-pointer hover:opacity-75 transition duration-200"
              />
              <img
                src={instagramLogo}
                alt="Sign in with Instagram"
                onClick={() => handleSocialSignIn('Instagram')}
                className="w-10 h-10 cursor-pointer hover:opacity-75 transition duration-200"
              />
            </div>
          </div>
          
          <p className="mt-4 text-center text-gray-600">
            {isSignUp ? 'Already have an account?' : 'Need an account?'}
            <button
              onClick={handleToggle}
              className="text-red-600 font-bold ml-1"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
