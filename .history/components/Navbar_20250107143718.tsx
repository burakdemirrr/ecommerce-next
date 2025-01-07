'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiShoppingBag, FiHeart, FiUser, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'New In', href: '/new-in' },
    { name: 'Women', href: '/category/women' },
    { name: 'Men', href: '/category/men' },
    { name: 'Kids', href: '/category/kids' },
    { name: 'Sale', href: '/sale' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md"
      >
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>

            {/* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-wider">
              SVEN
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm hover:text-gray-600 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Link href="/wishlist" className="p-2">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <FiHeart className="h-5 w-5" />
                </motion.div>
              </Link>
              <Link href="/cart" className="p-2">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <FiShoppingBag className="h-5 w-5" />
                </motion.div>
              </Link>
              <Link href="/account" className="p-2">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <FiUser className="h-5 w-5" />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        className={`fixed inset-0 z-40 bg-white ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="pt-20 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-4 text-lg border-b border-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
} 