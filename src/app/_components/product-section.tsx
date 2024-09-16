import { ProductItem } from "./product-item";

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

interface ProductSectionProps {
  products: Product[];
}

export default function ProductSection({ products }: ProductSectionProps) {
  const backgroundColors = [
    "from-purple-900",
    "from-blue-900",
    "from-indigo-900",
    "from-violet-900",
  ];

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="mb-16 text-center text-4xl font-bold text-white">
          Our Products
        </h1>
        <div className="space-y-24">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`${
                backgroundColors[index % backgroundColors.length]
              } overflow-hidden rounded-3xl bg-gradient-to-tr to-black shadow-2xl transition-all duration-500 hover:shadow-purple-500/20`}
            >
              <ProductItem
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
                imageAlt={product.imageAlt}
                imageOnLeft={index % 2 === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
