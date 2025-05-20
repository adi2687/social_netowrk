import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <div>
            <h3 className="text-sm font-bold mb-0.5">SocialConnect</h3>
            <p className="text-gray-400 text-[11px]">Connecting people around the world.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-0.5 text-xs">Company</h4>
            <ul className="space-y-0.5">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-0.5 text-xs">Resources</h4>
            <ul className="space-y-0.5">
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Community Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Developers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-0.5 text-xs">Legal</h4>
            <ul className="space-y-0.5">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-2 pt-2 flex flex-col md:flex-row justify-between items-center text-[11px]">
          <p className="text-gray-400">© {currentYear} SocialConnect. All rights reserved.</p>
          <div className="flex space-x-2 mt-1 md:mt-0">
            {/* Social Icons remain unchanged */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
