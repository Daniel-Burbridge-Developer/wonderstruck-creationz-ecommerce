"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Alice Wonderland",
    rating: 5,
    comment: "Absolutely magical! It's like stepping into a dream.",
    avatar:
      "https://utfs.io/f/2YBx1bJMjIF3aYjGT4oH2Ai3lg8U7yhtLY5rCS1DJpuV6njR",
  },
  {
    id: 2,
    name: "Mad Hatter",
    rating: 4,
    comment: "Tea-riffic experience! Almost as mad as my parties.",
    avatar:
      "https://utfs.io/f/2YBx1bJMjIF3NU79Kdt2Qa7WV4HtJzMx8GjsZ0qFfI5XmAol",
  },
  {
    id: 3,
    name: "Cheshire Cat",
    rating: 5,
    comment: "Purrfectly delightful! Made me grin from ear to ear.",
    avatar:
      "https://utfs.io/f/2YBx1bJMjIF3aYjGT4oH2Ai3lg8U7yhtLY5rCS1DJpuV6njR",
  },
];

export default function CustomerReviewsComponent() {
  return (
    <div className="w-full bg-slate-900 px-4 py-12">
      <h2 className="mb-8 text-center text-4xl font-bold text-purple-600">
        Our Wonderstruck Customers Say...
      </h2>
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="transform rounded-3xl border-4 border-dashed border-yellow-400 bg-slate-800 p-6 text-white shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="mb-4 flex items-center">
              <img
                src={review.avatar}
                alt={review.name}
                className="mr-4 h-16 w-16 rounded-full border-4 border-pink-400"
              />
              <div>
                <h3 className="text-xl font-semibold text-purple-700">
                  {review.name}
                </h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-lg italic text-white">
              &ldquo;{review.comment}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
