"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import ProductGrid from "./product-grid";

// Mock data - replace with actual data fetching logic later
const mockProducts = [
  {
    id: 1,
    name: "Enchanted Wand",
    category: "Accessories",
    subcategory: "Magical Tools",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Starlight Potion",
    category: "Potions",
    subcategory: "Elixirs",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Mystic Grimoire",
    category: "Books",
    subcategory: "Spellbooks",
    price: 79.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Crystal Ball",
    category: "Accessories",
    subcategory: "Divination",
    price: 99.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Wizard's Robe",
    category: "Clothing",
    subcategory: "Robes",
    price: 129.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Dragon Scale Amulet",
    category: "Accessories",
    subcategory: "Jewelry",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function DynamicProductGrid() {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  useEffect(() => {
    const query = searchParams.get("query") || "";
    const category = searchParams.get("category") || "";

    const newFilteredProducts = mockProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) &&
        (category === "" ||
          product.category.toLowerCase() === category.toLowerCase()),
    );

    setFilteredProducts(newFilteredProducts);
  }, [searchParams]);

  return <ProductGrid products={filteredProducts} />;
}
