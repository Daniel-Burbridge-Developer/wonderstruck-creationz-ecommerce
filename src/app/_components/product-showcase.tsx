import ProductSection from "./product-section";

const products = [
  {
    id: "1",
    title: "Product 1",
    description: "Description 1",
    imageUrl:
      "https://utfs.io/f/2YBx1bJMjIF3aYjGT4oH2Ai3lg8U7yhtLY5rCS1DJpuV6njR",
    imageAlt: "Image 1",
  },
  {
    id: "2",
    title: "Product 2",
    description: "Description 2",
    imageUrl:
      "https://utfs.io/f/2YBx1bJMjIF3JJZuBjOQwpSOsE8M21AK4LYCGflzFgHPibIa",
    imageAlt: "Image 2",
  },
  {
    id: "3",
    title: "Product 3",
    description: "Description 3",
    imageUrl:
      "https://utfs.io/f/2YBx1bJMjIF3NU79Kdt2Qa7WV4HtJzMx8GjsZ0qFfI5XmAol",
    imageAlt: "Image 3",
  },
  {
    id: "4",
    title: "Product 4",
    description: "Description 4",
    imageUrl:
      "https://utfs.io/f/2YBx1bJMjIF30G1W1uj7LSntRJoGbXBaFEk3WlsqCp8erVcY",
    imageAlt: "Image 4",
  },
  {
    id: "5",
    title: "Product 5",
    description: "Description 5",
    imageUrl:
      "https://utfs.io/f/2YBx1bJMjIF3g12QjWXViMPyThw2NpCoszadRE3L5b8B7KGY",
    imageAlt: "Image 5",
  },
  {
    id: "6",
    title: "Product 6",
    description: "Description 6",
    imageUrl:
      "https://utfs.io/f/2YBx1bJMjIF3gcOes4ViMPyThw2NpCoszadRE3L5b8B7KGYZ",
    imageAlt: "Image 6",
  },
];

export default function ProductShowcase() {
  return (
    <main className="min-h-screen bg-black">
      <ProductSection products={products} />
    </main>
  );
}
