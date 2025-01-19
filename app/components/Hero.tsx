import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentSection = sectionRef.current; // Store the current ref value

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        {isMounted && (
        <div
          className={`relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white px-4 md:px-8 transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-20"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Your Digital Library Awaits
          </h1>
          <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto leading-relaxed">
          Discover thousands of ebooks at your fingertips. From bestsellers to rare gems, 
          expand your knowledge and imagination instantly.
          </p>
          <p className="text-lg md:text-xl mb-8 text-blue-300">
          Start your reading journey today with our vast collection of digital books.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
          <Link
            href="/products"
            className="bg-blue-600 text-white py-3 px-8 rounded-full text-xl transition duration-300 hover:bg-blue-700 hover:scale-105 transform shadow-lg hover:shadow-xl flex items-center justify-center group"
          >
            Explore Our Books
            <svg 
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
            </svg>
          </Link>
          <Link
            href="/categories"
            className="border-2 border-white text-white py-3 px-8 rounded-full text-xl transition duration-300 hover:bg-white hover:text-blue-600 flex items-center justify-center"
          >
            Browse Categories
          </Link>
          </div>
        </div>
      )}
    </section>
  );
};

const styles = `
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Hero;
