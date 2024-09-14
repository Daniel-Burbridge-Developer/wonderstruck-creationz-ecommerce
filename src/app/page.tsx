import { db } from "@/server/db";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  // Forces page to be dynamic and reload on database / external changes
  // export const dynamic = "force-dynamic";

  const heroImages = await db.query.heroImages.findMany();

  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex min-h-screen flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">
            Wonderstruck Creationz
          </span>
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 bg-red-500">
        {[...heroImages, ...heroImages, ...heroImages].map((image) => (
          <div className="flex flex-col" key={image.id}>
            <Link href={`/img/${image.id}`}>
              <Image
                src={image.url}
                alt={image.name}
                width={300}
                height={300}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
