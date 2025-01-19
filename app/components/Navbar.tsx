"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? " bg-blue-700 text-white px-3 py-2 rounded"
      : "py-2 text-gray-700 hover:text-blue-500 ";
  return (
    <nav className="bg-gray-200 border-b shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/icon.png"
            alt="Logo"
            className="h-10 w-10 mr-2  border-gray-700 rounded-md"
            width={40}
            height={40}
          />
          <span className="text-xl font-semibold text-gray-700">Digibooks</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/products">
            <span className={linkClass({ isActive: false })}>Products</span>
          </Link>
          <Link href="/faq">
            <span className={linkClass({ isActive: false })}>FAQ</span>
          </Link>
          <Link href="/about">
            <span className={linkClass({ isActive: false })}>About</span>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <Link legacyBehavior href="/products">
            <span className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-500">
              Products
            </span>
          </Link>
          <Link legacyBehavior href="/faq">
            <span className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-500">
              FAQ
            </span>
          </Link>
          <Link legacyBehavior href="/about">
            <span className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-500">
              About
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
