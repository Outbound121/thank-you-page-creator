import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Car Finance</h3>
          <p className="text-gray-400 mb-4">
            We provide flexible car financing options to fit your budget and needs.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/finance" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Apply for Finance
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-2">
            Phone: <a href="tel:01132631214" className="hover:text-white">01132631214</a>
          </p>
          <p className="text-gray-400">
            Email: <a href="mailto:info@carfinance.com" className="hover:text-white">info@carfinance.com</a>
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Car Finance. All rights reserved.</p>
      </div>
    </footer>
  );
};
