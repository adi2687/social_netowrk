import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  <span className="text-xl font-bold">SC</span>
                </div>
                <span className="text-xl font-bold">SocialConnect</span>
              </div>
              <p className="text-gray-300 mb-4">
                Connect with friends and the world around you on SocialConnect.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <FaGithub className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                </li>
                <li>
                  <Link to="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
                </li>
                <li>
                  <Link to="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</Link>
                </li>
                <li>
                  <Link to="/community" className="text-gray-300 hover:text-white transition-colors">Community</Link>
                </li>
                <li>
                  <Link to="/developers" className="text-gray-300 hover:text-white transition-colors">Developers</Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates.</p>
              <form className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar with animated elements */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              &copy; {currentYear} SocialConnect. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          
          {/* Animated wave */}
          <div className="relative h-12 mt-6 overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                <path 
                  fill="rgba(96, 165, 250, 0.3)" 
                  fillOpacity="1" 
                  d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  className="animate-wave"
                ></path>
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                <path 
                  fill="rgba(79, 70, 229, 0.2)" 
                  fillOpacity="1" 
                  d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,74.7C672,75,768,117,864,122.7C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  className="animate-wave-slow"
                ></path>
              </svg>
            </div>
          </div>
          
          {/* Made with love */}
          <div className="flex justify-center items-center mt-4 text-gray-300">
            <span>Made with</span>
            <FaHeart className="mx-1 text-red-500 animate-pulse" />
            <span>by SocialConnect Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
