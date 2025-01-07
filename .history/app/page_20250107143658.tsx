'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">SVEN</h1>
          <p className="text-lg md:text-xl mb-8 font-light tracking-wider">SPRING COLLECTION 2024</p>
          <Link 
            href="/new-in"
            className="bg-white text-black px-8 py-3 min-w-[200px] hover:bg-black hover:text-white transition-colors duration-300"
          >
            Shop Now
          </Link>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4">
        <div className="max-w-[2000px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Women */}
            <Link href="/category/women" className="group relative h-[600px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070"
                alt="Women's Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-30" />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <h3 className="text-white text-2xl mb-2">Women</h3>
                  <p className="text-white/80">Discover the Collection</p>
                </div>
              </div>
            </Link>

            {/* Men */}
            <Link href="/category/men" className="group relative h-[600px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964"
                alt="Men's Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-30" />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <h3 className="text-white text-2xl mb-2">Men</h3>
                  <p className="text-white/80">Explore the Style</p>
                </div>
              </div>
            </Link>

            {/* Kids */}
            <Link href="/category/kids" className="group relative h-[600px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=2069"
                alt="Kids' Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-30" />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <h3 className="text-white text-2xl mb-2">Kids</h3>
                  <p className="text-white/80">Shop Kids' Fashion</p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-neutral-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light mb-4">New Arrivals</h2>
          <div className="w-20 h-px bg-black mx-auto" />
        </motion.div>

        <div className="max-w-[2000px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Cards */}
            {[
              {
                name: "Oversized Cotton Shirt",
                price: "$89.99",
                image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2005"
              },
              {
                name: "Classic Denim Jacket",
                price: "$129.99",
                image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?q=80&w=2080"
              },
              {
                name: "Wool Blend Coat",
                price: "$299.99",
                image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1972"
              },
              {
                name: "Leather Crossbody Bag",
                price: "$159.99",
                image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1974"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href="/product/1" className="group block">
                  <div className="relative h-[400px] overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="font-light text-lg">{product.name}</h3>
                    <p className="text-lg">{product.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-black text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center px-4"
        >
          <h2 className="text-3xl font-light mb-6">Join Our Newsletter</h2>
          <p className="text-white/80 mb-8">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-transparent border border-white/30 focus:border-white transition-colors outline-none"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-black hover:bg-neutral-200 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
}
