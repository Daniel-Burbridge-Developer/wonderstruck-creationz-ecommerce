"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProductGrid({ products }) {
  return (
    <div className="grid flex-grow grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="overflow-hidden rounded-lg bg-blue-900 bg-opacity-50 shadow-lg transition-transform hover:scale-105"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
            <p className="mb-4 text-purple-300">${product.price.toFixed(2)}</p>
            <div className="flex justify-between">
              <button className="rounded bg-purple-600 px-4 py-2 transition-colors hover:bg-purple-700">
                Add to Cart
              </button>
              <Link
                href={`/product/${product.id}`}
                className="rounded bg-blue-600 px-4 py-2 transition-colors hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
