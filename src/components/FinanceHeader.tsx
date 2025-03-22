
import React from "react";
import { Link } from "react-router-dom";

export const FinanceHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Car Finance
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link 
                to="/" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <a 
                href="tel:01132631214" 
                className="text-qmf-purple font-medium hover:underline flex items-center"
              >
                01132631214
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
