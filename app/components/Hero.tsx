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
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {isMounted && (
        <div
          className={`relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white px-4 md:px-8 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-20"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Unlock Your Creative Potential
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover a world of design assets, software, and more to take your
            projects to the next level.
          </p>
          <Link
            href="/products"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg text-xl transition duration-300 hover:bg-blue-600"
          >
            Explore Our Products
          </Link>
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
