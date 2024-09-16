import Image from "next/image";

interface ProductItemProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageOnLeft: boolean;
}

export function ProductItem({
  title,
  description,
  imageUrl,
  imageAlt,
  imageOnLeft,
}: ProductItemProps) {
  const contentOrder = imageOnLeft ? "order-2" : "order-1";
  const imageOrder = imageOnLeft ? "order-1" : "order-2";

  return (
    <div className="flex flex-col items-center gap-8 p-8 md:flex-row md:p-12">
      <div className={`w-full md:w-1/2 ${contentOrder} space-y-4`}>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="leading-relaxed text-gray-300">{description}</p>
      </div>
      <div className={`w-full md:w-1/2 ${imageOrder}`}>
        <div className="group relative">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={500}
            height={300}
            className="relative h-[300px] w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
