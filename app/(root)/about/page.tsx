"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Page: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Empowering Minds Through Digital Reading</h1>

        {isMounted && (
          <>
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Welcome to Digibooks Store, where knowledge meets convenience. We believe that every reader holds the potential 
                to transform their life through the power of digital books. Our carefully curated collection of ebooks spans 
                across personal development, business success, and life-changing wisdom.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Born from a passion for making transformative knowledge accessible, Digibooks Store started with a simple 
                mission: to bring life-changing books to readers anywhere, anytime. We understand that in today's fast-paced 
                world, the ability to access quality reading material instantly can make all the difference in someone's 
                learning journey.
              </p>
            </section>

            <section className="mb-12 bg-blue-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Choose Digibooks?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-600">Instant Access</h3>
                  <p className="text-gray-600">Download and start reading immediately after purchase</p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-600">Curated Quality</h3>
                  <p className="text-gray-600">Each book is handpicked for maximum value and impact</p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-600">Lifetime Access</h3>
                  <p className="text-gray-600">Your books are always available in your digital library</p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-600">Multi-Device Reading</h3>
                  <p className="text-gray-600">Read on any device, anywhere you go</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Collection</h2>
              <p className="text-gray-700 mb-4">
                Discover our extensive library featuring:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                  <span>Best-selling business and finance books</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                  <span>Personal development and success mindset guides</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                  <span>Wealth building and investment strategies</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                  <span>Life-changing wisdom from global thought leaders</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-4">Start Your Reading Journey Today</h2>
              <p className="mb-6">
                Join thousands of readers who have already transformed their lives through our digital library. 
                Every book is an opportunity to grow, learn, and become the best version of yourself.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/products"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Explore Our Collection →
                </a>
              </motion.div>
            </section>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Page;
