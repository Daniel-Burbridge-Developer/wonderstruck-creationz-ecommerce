"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import ProductGrid from "./product-grid";
import Pagination from "./pagination";

// Mock data - replace with actual data fetching logic later
const mockProducts = [
  {
    id: 7,
    name: "Phoenix Feather Quill",
    category: "Accessories",
    subcategory: "Writing Tools",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 8,
    name: "Elven Cloak",
    category: "Clothing",
    subcategory: "Cloaks",
    price: 149.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 9,
    name: "Potion of Invisibility",
    category: "Potions",
    subcategory: "Elixirs",
    price: 59.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 10,
    name: "Sorcerer's Hat",
    category: "Clothing",
    subcategory: "Hats",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 11,
    name: "Enchanted Mirror",
    category: "Accessories",
    subcategory: "Divination",
    price: 129.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 12,
    name: "Magic Carpet",
    category: "Accessories",
    subcategory: "Transportation",
    price: 499.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 13,
    name: "Dragon Egg",
    category: "Accessories",
    subcategory: "Magical Creatures",
    price: 999.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 14,
    name: "Fairy Dust",
    category: "Potions",
    subcategory: "Ingredients",
    price: 19.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 15,
    name: "Mermaid's Scale",
    category: "Accessories",
    subcategory: "Jewelry",
    price: 79.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 16,
    name: "Wizard's Staff",
    category: "Accessories",
    subcategory: "Magical Tools",
    price: 249.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 17,
    name: "Gryphon Feather",
    category: "Accessories",
    subcategory: "Magical Creatures",
    price: 59.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 18,
    name: "Potion of Healing",
    category: "Potions",
    subcategory: "Elixirs",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 19,
    name: "Sorcerer's Stone",
    category: "Accessories",
    subcategory: "Magical Tools",
    price: 499.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 20,
    name: "Enchanted Lantern",
    category: "Accessories",
    subcategory: "Lighting",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 21,
    name: "Mystic Ring",
    category: "Accessories",
    subcategory: "Jewelry",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 22,
    name: "Potion of Strength",
    category: "Potions",
    subcategory: "Elixirs",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 23,
    name: "Enchanted Shield",
    category: "Accessories",
    subcategory: "Defense",
    price: 299.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 24,
    name: "Magic Wand",
    category: "Accessories",
    subcategory: "Magical Tools",
    price: 59.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 25,
    name: "Potion of Speed",
    category: "Potions",
    subcategory: "Elixirs",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 26,
    name: "Enchanted Boots",
    category: "Clothing",
    subcategory: "Footwear",
    price: 129.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 27,
    name: "Mystic Amulet",
    category: "Accessories",
    subcategory: "Jewelry",
    price: 149.99,
    image: "/placeholder.svg?height=200&width=200",
  },
];

const ITEMS_PER_PAGE = 9;

export default function DynamicProductGrid() {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const query = searchParams.get("query") || "";
  const category = searchParams.get("category") || "";

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) &&
        (category === "" ||
          product.category.toLowerCase() === category.toLowerCase()),
    );
  }, [query, category]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, category]);

  return (
    <div className="flex flex-col gap-8">
      <ProductGrid products={currentProducts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
