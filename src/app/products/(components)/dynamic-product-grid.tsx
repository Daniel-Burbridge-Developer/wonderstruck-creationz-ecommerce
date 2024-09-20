"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import ProductGrid from "./product-grid";
import Pagination from "./pagination";
import mockProducts from "../(mock-data)/products";

// Mock data - replace with actual data fetching logic later
const products = mockProducts;

const ITEMS_PER_PAGE = 9;

export default function DynamicProductGrid() {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const query = searchParams.get("query") || "";
  const category = searchParams.get("category") || "";

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) &&
        (category === "" ||
          product.category.toLowerCase() === category.toLowerCase()),
    );
  }, [query, category]);

  const totalPages = Math.max(Math.ceil(filteredProducts.length / ITEMS_PER_PAGE), 1);

  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  useEffect(() => {
    // If the current page exceeds the total number of pages, reset it
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [filteredProducts, currentPage, totalPages]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, category]);

  return (
    <div className="flex flex-col gap-8">
      <ProductGrid products={currentProducts} />
      {filteredProducts.length > 0 ? (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            if (page >= 1 && page <= totalPages) {
              setCurrentPage(page);
            }
          }}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}
