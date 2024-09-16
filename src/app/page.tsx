import CustomerReviewsComponent from "@/components/customer-reviews";
import HeroCarouselComponent from "@/components/hero-carousel";
import { getHeroImages } from "@/server/queries";
import ProductShowcase from "@/app/_components/product-showcase";

export default async function HomePage() {
  // Forces page to be dynamic and reload on database / external changes
  // export const dynamic = "force-dynamic";

  const heroImages = await getHeroImages();

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="relative h-[calc(100vh-0px)] w-full">
        <HeroCarouselComponent images={heroImages} />
      </div>
      {/* render some hero images for testing */}
      <div className="relative flex w-full flex-col">
        <ProductShowcase />
      </div>
      <div className="relative flex w-full flex-col">
        <CustomerReviewsComponent />
      </div>
    </main>
  );
}
