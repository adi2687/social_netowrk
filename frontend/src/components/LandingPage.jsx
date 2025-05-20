import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaComments, FaShare, FaGlobe, FaArrowRight } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-blue-600">SocialConnect</span>
            </div>
            <div>
              <Link 
                to="/auth" 
                className="ml-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Connect with friends and the world around you
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                SocialConnect helps you connect and share with the people in your life.
              </p>
              <Link 
                to="/auth" 
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200"
              >
                Get Started <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="People connecting" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      
      {/* Footer */}
      
    </div>
  );
};

export default LandingPage;
