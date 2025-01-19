"use client";
import { useEffect, useRef, useState } from "react";
import { products } from "../data/product";
import Link from "next/link";
import Image from "next/image";

// Define a type for the product
type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

const Featured = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});
  const sectionRef = useRef(null);
  const featuredProducts = products.slice(0, 3);

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleDescription = (productId: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 text-gray-700 relative overflow-hidden"
      style={{
        background: "linear-gradient(45deg, #1e3a8a, #3b82f6)",
      }}
    >
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="dot absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Best Selling Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product: Product, index: number) => (
            <div
              key={product.id}
              className={`bg-white rounded-xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-1 
              ${
                isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 " +
                  (index % 2 === 0 ? "translate-y-12" : "-translate-y-12")
              }
              ${
                index === 0
                ? "delay-100"
                : index === 1
                ? "delay-300"
                : "delay-500"
              }`}
            >
              <div className="relative h-64 overflow-hidden group">
              <Image
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                width={500}
                height={300}
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              </div>

              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
              <h3 className="text-xl font-bold mb-3 text-gray-800">{product.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {expandedItems[product.id]
                ? product.description
                : product.description.slice(0, 100) + "..."}
              </p>
              <button
                onClick={() => toggleDescription(String(product.id))}
                className="text-blue-600 hover:text-blue-800 mb-4 text-sm font-medium transition-colors"
              >
                {expandedItems[product.id] ? "See Less" : "See More"}
              </button>
              <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                <span className="text-2xl font-bold text-green-600">
                ₱{product.price}
                </span>
                <Link
                href={`/products/${product.id}`}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                See Details
                </Link>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = `
  @keyframes float {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(20px, 20px);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  .dot {
    opacity: 0.6;
    filter: blur(1px);
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Featured;
