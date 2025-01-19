"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";

const Page = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container max-w-4xl py-16 mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <FaQuestionCircle className="w-16 h-16 mx-auto text-blue-500 mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-lg">Find answers to common questions about our digital book store</p>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleItem("item-1")}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <span className="text-xl font-semibold text-gray-800">What is Digibooks Store?</span>
              </div>
              <FaChevronDown
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                  openItem === "item-1" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={false}
              animate={{ height: openItem === "item-1" ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 text-gray-600">
                <p className="mb-4">
                  Digibooks Store is your premier digital marketplace for educational resources, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>High-quality ebooks and digital publications</li>
                  <li>Professional development materials</li>
                  <li>Business and finance guides</li>
                  <li>Self-improvement resources</li>
                </ul>
                <p className="mt-4">
                  We focus on curating the best digital content to help you grow personally and professionally.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleItem("item-2")}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <span className="text-xl font-semibold text-gray-800">What payment methods do you accept?</span>
              </div>
              <FaChevronDown
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                  openItem === "item-2" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={false}
              animate={{ height: openItem === "item-2" ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 text-gray-600">
                <p className="mb-4">We offer flexible payment options through two platforms:</p>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Facebook Marketplace:</h3>
                    <ul className="list-disc pl-6">
                      <li>GCash</li>
                      <li>PayPal</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Gumroad:</h3>
                    <ul className="list-disc pl-6">
                      <li>Credit/Debit Cards</li>
                      <li>Google Pay (mobile)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleItem("item-3")}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <span className="text-xl font-semibold text-gray-800">How can I get support?</span>
              </div>
              <FaChevronDown
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                  openItem === "item-3" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={false}
              animate={{ height: openItem === "item-3" ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 text-gray-600">
                <p className="mb-4">
                  Our dedicated support team is ready to assist you through our Facebook Page. We typically respond within 24 hours.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium mb-2">Connect with us:</p>
                  <a
                    href="https://www.facebook.com/profile.php?id=61563455206172"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit our Facebook Page
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleItem("item-4")}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <span className="text-xl font-semibold text-gray-800">How do I purchase products?</span>
              </div>
              <FaChevronDown
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                  openItem === "item-4" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={false}
              animate={{ height: openItem === "item-4" ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 text-gray-600">
                <p className="mb-4">You have two convenient ways to purchase our products:</p>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">1. Facebook Marketplace:</h3>
                    <p>Message us directly on our Facebook page to place your order and arrange payment.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">2. Gumroad Platform:</h3>
                    <p>Purchase directly through our Gumroad store for instant delivery of your digital products.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;
