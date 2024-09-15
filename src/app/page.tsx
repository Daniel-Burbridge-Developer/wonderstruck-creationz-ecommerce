import HeroCarouselComponent from "@/components/hero-carousel";
import { getHeroImages } from "@/server/queries";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  // Forces page to be dynamic and reload on database / external changes
  // export const dynamic = "force-dynamic";

  const heroImages = await getHeroImages();

  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <HeroCarouselComponent images={heroImages} />
      {/* render some hero images for testing */}
      <div className="flex flex-col">
        {heroImages.map((image) => (
          <div key={image.id} className="relative aspect-square w-72">
            <Link href={`/img/${image.id}`}>
              <Image
                src={image.url}
                alt={image.name}
                layout="fill"
                objectFit="cover"
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
