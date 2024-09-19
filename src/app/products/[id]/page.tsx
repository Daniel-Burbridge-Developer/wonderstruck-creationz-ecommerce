import { notFound } from "next/navigation";
import ProductPage from "./(components)/product-page";
import mockProducts from "../(mock-data)/products";

// async function getProduct(productId: string) {
//   // This is a placeholder for your actual data fetching logic
//   // You would typically fetch this data from an API or database
//   //   const res = await fetch(`https://api.your-store.com/products/${productId}`, {
//   //     next: { revalidate: 60 },
//   //   });
//   //   if (!res.ok) return undefined;
//   //   return res.json();
//   // }
// }

async function getProduct(id: string) {
  return mockProducts.find((product) => product.id == id);
}

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}
