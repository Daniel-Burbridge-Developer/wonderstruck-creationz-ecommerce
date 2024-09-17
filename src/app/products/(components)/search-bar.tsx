"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { debounce } from "lodash";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      router.push(`/products?${createQueryString("query", value)}`, {
        scroll: false,
      });
    }, 300),
    [router, createQueryString],
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debouncedSearch(newQuery);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/products?${createQueryString("query", query)}`, {
      scroll: false,
    });
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for magical items..."
        className="w-full max-w-xl rounded-l-lg bg-purple-800 px-4 py-2 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        type="submit"
        className="rounded-r-lg bg-purple-600 px-6 py-2 transition-colors hover:bg-purple-700"
      >
        Search
      </button>
    </form>
  );
}
