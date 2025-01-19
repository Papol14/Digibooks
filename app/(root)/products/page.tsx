"use client";
import { products } from "../../data/product";
import { Product } from "../../types/product";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts: Product[] = products.filter((product: Product) =>
    product.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)] animate-[dots_20s_linear_infinite]" />
      </div>

      <div className="container mx-auto p-6 relative">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(({ id, title, image, price }: Product) => (
            <Link
              href={`/products/${id}`}
              key={id}
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
                <p className="text-green-600 font-bold text-xl">₱{price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

