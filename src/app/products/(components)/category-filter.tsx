"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const categories = ["Accessories", "Potions", "Books", "Clothing"];

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const handleCategoryClick = (category: string) => {
    router.push(`/products?${createQueryString("category", category)}`, {
      scroll: false,
    });
  };

  const currentCategory = searchParams.get("category") || "";

  return (
    <div className="w-full rounded-lg bg-blue-900 bg-opacity-50 p-4 md:w-64">
      <h2 className="mb-4 text-xl font-semibold">Categories</h2>
      <ul>
        <li className="mb-2">
          <button
            onClick={() => handleCategoryClick("")}
            className={`block w-full rounded p-2 text-left ${!currentCategory ? "bg-purple-700" : "hover:bg-purple-800"}`}
          >
            All
          </button>
        </li>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              onClick={() => handleCategoryClick(category)}
              className={`block w-full rounded p-2 text-left ${currentCategory === category ? "bg-purple-700" : "hover:bg-purple-800"}`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
