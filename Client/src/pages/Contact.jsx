import React from 'react';

function Contact() {
  return (
    <div className="bg-white py-16 px-8">
      <h2 className="text-4xl font-bold text-red-500 text-center mb-4">Contact Us</h2>
      <p className="text-center text-gray-700 mb-8">
        We would love to hear from you! Please reach out to us at 
        <a href="mailto:vowhelp@support.org" className="text-red-500 underline"> vowhelp@support.org</a> 
        or fill out the form below.
      </p>
      <div className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
