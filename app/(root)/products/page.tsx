"use client";
import { products } from "../../data/product";
import { Product } from "../../types/product";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

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
              className="block bg-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border hover:border-blue-400"
            >
              <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-green-600 font-bold">₱{price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const SingleProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((product: Product) => product.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <p className="text-green-600 font-bold">₱{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default Page;
