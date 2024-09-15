'use client'

import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Alice Wonderland",
    rating: 5,
    comment: "Absolutely magical! It's like stepping into a dream.",
    avatar: "https://utfs.io/f/2YBx1bJMjIF3aYjGT4oH2Ai3lg8U7yhtLY5rCS1DJpuV6njR"
  },
  {
    id: 2,
    name: "Mad Hatter",
    rating: 4,
    comment: "Tea-riffic experience! Almost as mad as my parties.",
    avatar: "https://utfs.io/f/2YBx1bJMjIF3NU79Kdt2Qa7WV4HtJzMx8GjsZ0qFfI5XmAol"
  },
  {
    id: 3,
    name: "Cheshire Cat",
    rating: 5,
    comment: "Purrfectly delightful! Made me grin from ear to ear.",
    avatar: "https://utfs.io/f/2YBx1bJMjIF3aYjGT4oH2Ai3lg8U7yhtLY5rCS1DJpuV6njR"
  }
]

export default function CustomerReviewsComponent() {
  return (
    <div className=" w-full py-12 px-4 bg-slate-900 ">
      <h2 className="text-4xl font-bold text-center mb-8 text-purple-600">
        Our Wonderstruck Customers Say...
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-slate-800 text-white p-6 rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-dashed border-yellow-400"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full border-4 border-pink-400 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-purple-700">{review.name}</h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-lg text-white italic">&ldquo;{review.comment}&rdquo;</p>
          </div>
        ))}
      </div>
    </div>
  )
}