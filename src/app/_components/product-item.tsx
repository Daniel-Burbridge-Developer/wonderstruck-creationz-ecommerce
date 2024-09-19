"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductItemProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageOnLeft: boolean;
}

export function ProductItem({
  title,
  description,
  imageUrl,
  imageAlt,
  imageOnLeft,
}: ProductItemProps) {
  const contentOrder = imageOnLeft ? "order-2" : "order-1";
  const imageOrder = imageOnLeft ? "order-1" : "order-2";
  const slideDirection = imageOnLeft ? "translate-x-1/2" : "-translate-x-1/2";

  const [isVisible, setIsVisible] = useState(false);
  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    if (productRef.current) {
      observer.observe(productRef.current);
    }

    return () => {
      if (productRef.current) {
        observer.unobserve(productRef.current);
      }
    };
  }, []);

  return (
    <Link href={`/products?category=${title}`}>
      <div
        ref={productRef}
        className={`flex flex-col items-center gap-8 p-8 transition-all duration-1000 ease-out md:flex-row md:p-12 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : `opacity-0 ${slideDirection}`
        }`}
      >
        <div className={`w-full md:w-1/2 ${contentOrder} space-y-4`}>
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <p className="leading-relaxed text-gray-300">{description}</p>
        </div>
        <div className={`w-full md:w-1/2 ${imageOrder}`}>
          <div className="group relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={500}
              height={300}
              className="relative h-[300px] w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
