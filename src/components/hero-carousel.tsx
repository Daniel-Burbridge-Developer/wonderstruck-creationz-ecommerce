"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { heroImages } from "@/server/db/schema";

export type heroImage = typeof heroImages.$inferSelect;

export default function HeroCarouselComponent({
  images,
}: {
  images: heroImage[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    const newIntervalId = setInterval(nextSlide, 5000);
    setIntervalId(newIntervalId);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    setIntervalId(timer);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    resetTimer();
  }, [currentIndex]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute left-0 top-0 h-full w-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.url}
            alt={image.name}
            fill
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 p-4 text-white">
        <div className="h-1/2 w-1"></div>
        <h1 className="mb-4 text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          Embrace The Wonder In Your Life
        </h1>
        <Button size="lg" className="text-sm sm:text-base">
          Shop All
        </Button>
      </div>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 sm:bottom-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => {
              setCurrentIndex(index);
              resetTimer();
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <button
        className="absolute bottom-4 left-2 -translate-y-1/2 transform rounded-full bg-black/30 p-1 text-white sm:left-4 sm:p-2"
        onClick={() => {
          prevSlide();
          resetTimer();
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={16} className="sm:h-6 sm:w-6" />
      </button>
      <button
        className="absolute bottom-4 right-2 -translate-y-1/2 transform rounded-full bg-black/30 p-1 text-white sm:right-4 sm:p-2"
        onClick={() => {
          nextSlide();
          resetTimer();
        }}
        aria-label="Next slide"
      >
        <ChevronRight size={16} className="sm:h-6 sm:w-6" />
      </button>
    </div>
  );
}
