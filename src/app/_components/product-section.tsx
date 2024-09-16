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
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center text-3xl font-bold">Our Products</h1>
        <div className="space-y-12">
          {products.map((product, index) => (
            <ProductItem
              key={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              imageAlt={product.imageAlt}
              imageOnLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
