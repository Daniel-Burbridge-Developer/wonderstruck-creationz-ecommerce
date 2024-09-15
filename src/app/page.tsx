import HeroCarouselComponent from "@/components/hero-carousel";
import { db } from "@/server/db";
import { getHeroImages } from "@/server/queries";
// import Image from "next/image";
// import Link from "next/link";

export default async function HomePage() {
  // Forces page to be dynamic and reload on database / external changes
  // export const dynamic = "force-dynamic";

  const heroImages = await getHeroImages();

  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <HeroCarouselComponent images={heroImages} />
    </main>
  );
}
