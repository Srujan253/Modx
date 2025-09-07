import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Ensure dark mode class is always applied on initial load
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <nav className="bg-gray-900 shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
            >
              MODX
            </motion.h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-orange-500 transition duration-200">Home</Link>
            <Link to="/features" className="text-gray-300 hover:text-orange-500 transition duration-200">Features</Link>
            <Link to="/about" className="text-gray-300 hover:text-orange-500 transition duration-200">About</Link>
            <Link to="/login" className="text-gray-300 hover:text-orange-500 transition duration-200">Login</Link>
            <Link to="/signup" className="text-gray-300 hover:text-orange-500 transition duration-200">Signup</Link>
          </div>
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-md text-gray-300"
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-900 border-t border-gray-700"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Home</Link>
            <Link to="/features" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Features</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-orange-500">About</Link>
            <Link to="/login" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Login</Link>
            <Link to="/signup" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Signup</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
export default Navbar;

