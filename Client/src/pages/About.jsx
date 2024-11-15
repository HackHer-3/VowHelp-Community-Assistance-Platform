import React from 'react';
import { FaHandsHelping } from 'react-icons/fa';

function About() {
  return (
    <div className="bg-red-500 text-white py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <FaHandsHelping size={50} className="text-white" />
        </div>
        <h2 className="text-4xl font-bold mb-4">About VowHelp</h2>
        <p className="text-lg mb-8">
          VowHelp is a platform dedicated to empowering communities by connecting people in need with those willing to help. Whether it’s providing educational resources, offering shelter, or lending a hand in times of crisis, VowHelp brings communities together to make a real difference.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="bg-white text-red-500 p-6 rounded-lg shadow-lg w-80">
          <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700">
            To foster a culture of compassion and mutual aid by providing a platform where people can seek support or offer assistance within their communities.
          </p>
        </div>
        <div className="bg-white text-red-500 p-6 rounded-lg shadow-lg w-80">
          <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-700">
            A world where every individual has the opportunity to receive help when they need it and give help when they can.
          </p>
        </div>
        <div className="bg-white text-red-500 p-6 rounded-lg shadow-lg w-80">
          <h3 className="text-2xl font-semibold mb-2">How We Help</h3>
          <p className="text-gray-700">
            By enabling users to post support requests and alerts, and notifying nearby users to respond swiftly, we bridge gaps in critical times.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default About;
