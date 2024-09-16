import { ProductItem } from "./product-item"

interface Product {
  id: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}

interface ProductSectionProps {
  products: Product[]
}

export default function ProductSection({ products }: ProductSectionProps) {
  const backgroundColors = [
    "from-purple-900",
    "from-blue-900",
    "from-indigo-900",
    "from-violet-900",
  ]

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16 text-white">Our Products</h1>
        <div className="space-y-24">
          {products.map((product, index) => {
            const isEven = index % 2 === 0
            const gradientDirection = isEven ? "bg-gradient-to-l" : "bg-gradient-to-r"
            const colorClass = backgroundColors[index % backgroundColors.length]
            
            return (
              <div
                key={product.id}
                className={`${gradientDirection} ${colorClass} to-black rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-purple-500/20`}
              >
                <ProductItem
                  title={product.title}
                  description={product.description}
                  imageUrl={product.imageUrl}
                  imageAlt={product.imageAlt}
                  imageOnLeft={isEven}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}