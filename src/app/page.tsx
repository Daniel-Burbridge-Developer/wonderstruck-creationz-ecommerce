import HeroCarouselComponent from "@/components/hero-carousel";
import { getHeroImages } from "@/server/queries";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  // Forces page to be dynamic and reload on database / external changes
  // export const dynamic = "force-dynamic";

  const heroImages = await getHeroImages();

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="relative w-full h-[calc(100vh-0px)]">
      <HeroCarouselComponent images={heroImages} />
      </div>
      {/* render some hero images for testing */}
      <div className="relative flex flex-col overflow-auto">
        {[...heroImages, ...heroImages, ...heroImages, ...heroImages].map((image) => (
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
