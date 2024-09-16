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
    <div className="flex flex-col items-center gap-6 py-8 md:flex-row">
      <div className={`w-full md:w-1/2 ${contentOrder}`}>
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className={`w-full md:w-1/2 ${imageOrder}`}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={500}
          height={300}
          className="h-[300px] w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
