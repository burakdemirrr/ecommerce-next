import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const { data: session } = useSession();

  const categories = [
    { name: 'Men', href: '/category/men' },
    { name: 'Women', href: '/category/women' },
    { name: 'Kids', href: '/category/kids' },
    { name: 'Accessories', href: '/category/accessories' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">SVEN</Link>
          
          <div className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-gray-600 hover:text-black transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            {session ? (
              <>
                <Link href="/wishlist">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <FiHeart className="h-6 w-6" />
                  </motion.div>
                </Link>
                <Link href="/cart">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <FiShoppingCart className="h-6 w-6" />
                  </motion.div>
                </Link>
                <Link href="/profile">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <FiUser className="h-6 w-6" />
                  </motion.div>
                </Link>
              </>
            ) : (
              <Link href="/auth/signin">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-black text-white px-4 py-2 rounded-md"
                >
                  Sign In
                </motion.button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 