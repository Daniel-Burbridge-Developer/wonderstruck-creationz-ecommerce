import CustomerReviewsComponent from "@/components/customer-reviews";
import { ExpandableFooterComponent } from "@/components/expandable-footer";
import HeroCarouselComponent from "@/components/hero-carousel";
import { getHeroImages } from "@/server/queries";
import Image from "next/image";
import Link from "next/link";
import ProductSection from "./_components/product-section";

export default async function HomePage() {
  // Forces page to be dynamic and reload on database / external changes
  // export const dynamic = "force-dynamic";

  const heroImages = await getHeroImages();

  // url 1 https://utfs.io/f/2YBx1bJMjIF3aYjGT4oH2Ai3lg8U7yhtLY5rCS1DJpuV6njR
  // url 2 https://utfs.io/f/2YBx1bJMjIF3JJZuBjOQwpSOsE8M21AK4LYCGflzFgHPibIa
  // url 3 https://utfs.io/f/2YBx1bJMjIF3NU79Kdt2Qa7WV4HtJzMx8GjsZ0qFfI5XmAol
  // url 4 https://utfs.io/f/2YBx1bJMjIF3NU79Kdt2Qa7WV4HtJzMx8GjsZ0qFfI5XmAol
  // url 5 https://utfs.io/f/2YBx1bJMjIF30G1W1uj7LSntRJoGbXBaFEk3WlsqCp8erVcY
  // url 6 https://utfs.io/f/2YBx1bJMjIF3g12QjWXViMPyThw2NpCoszadRE3L5b8B7KGY
  // url 7 https://utfs.io/f/2YBx1bJMjIF3gcOes4ViMPyThw2NpCoszadRE3L5b8B7KGYZ

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

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="relative h-[calc(100vh-0px)] w-full">
        <HeroCarouselComponent images={heroImages} />
      </div>
      {/* render some hero images for testing */}
      <div className="relative flex w-full flex-col">
        <ProductSection products={products} />
      </div>
      <div className="relative flex w-full flex-col">
        <CustomerReviewsComponent />
      </div>
      <div className="relative flex w-full flex-col">
        <ExpandableFooterComponent />
      </div>
    </main>
  );
}
