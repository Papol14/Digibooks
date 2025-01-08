"use client";
import React from "react";
import { useState } from "react";
const page = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <div className="container max-w-3xl py-24 mx-auto px-5">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

      <div className="space-y-4">
        <div className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem("item-1")}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 focus:outline-none"
          >
            <span className="font-medium">What is this application about?</span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-200 ${
                openItem === "item-1" ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openItem === "item-1" && (
            <div className="px-4 pb-4 text-gray-600">
              Byte Bazaar is a digital marketplace that sells educational
              products and resources including:
              <ul className="list-disc pl-6 mt-2">
                <li>Freelancing guides and materials</li>
                <li>AI learning courses and training</li>
                <li>Educational e-books</li>
                <li>Professional development resources</li>
              </ul>
              The platform focuses on providing high-quality, curated digital
              content to help people develop new skills and advance their
              careers in the digital space. Think of it as a specialized
              e-commerce site for digital learning materials.
            </div>
          )}
        </div>

        <div className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem("item-2")}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 focus:outline-none"
          >
            <span className="font-medium">What is the mode of payment?</span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-200 ${
                openItem === "item-2" ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openItem === "item-2" && (
            <div className="px-4 pb-4 text-gray-600">
              You can pay through GCash, and Paypal.
            </div>
          )}
        </div>

        <div className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem("item-3")}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 focus:outline-none"
          >
            <span className="font-medium">How can I contact support?</span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-200 ${
                openItem === "item-3" ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openItem === "item-3" && (
            <div className="px-4 pb-4 text-gray-600">
              You can reach our support team through our {}
              <a
                href="https://www.facebook.com/profile.php?id=61563455206172"
                className="hover:text-blue-500 underline hover:underline"
                target="_blank"
              >
                Facebook Page
              </a>
            </div>
          )}
        </div>

        <div className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem("item-4")}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 focus:outline-none"
          >
            <span className="font-medium">How to order products?</span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-200 ${
                openItem === "item-4" ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openItem === "item-4" && (
            <div className="px-4 pb-4 text-gray-600">
              You can message and place your orders through our Facebook page.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
