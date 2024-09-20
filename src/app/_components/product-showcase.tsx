import ProductSection from "./product-section";

export const products = [
  {
    id: "1",
    title: "Games Night",
    description:
      "Unleash the fun with our Games Night collection! From board games to party essentials, this category is packed with everything you need to host the ultimate game night. Whether you're a casual player or a competitive enthusiast, we've got the perfect items to make your night unforgettable. Let the games begin!",
    imageUrl:
      "https://utfs.io/f/2YBx1bJMjIF3J2pW5XOQwpSOsE8M21AK4LYCGflzFgHPibIa",
    imageAlt: "Games Night",
  },
  {
    id: "2",
    title: "Apparel",
    description:
      "Discover your style with our Apparel collection! From cozy hoodies to trendy tees, we offer a range of custom and stylish clothing designed to make you look and feel your best. Perfect for any occasion, our apparel is crafted with quality and comfort in mind. Elevate your wardrobe today!",
    imageUrl:
      "https://utfs.io/f/2YBx1bJMjIF3yVWCTzlodP5matzcJDhXnxgbpTfNGwWBreuv",
    imageAlt: "Apparel",
  },
  {
    id: "3",
    title: "Self Care",
    description:
      "Indulge in relaxation with our Self Care collection! From soothing skincare to calming accessories, we offer products designed to help you unwind and rejuvenate. Treat yourself to a little self-love and make wellness a priority with our thoughtfully curated items.",
    imageUrl:
      "https://utfs.io/f/2YBx1bJMjIF32dE6kb0JMjIF32PJsULdZbNYe0znCrtk8Bxo",
    imageAlt: "Self Care",
  },
  {
    id: "4",
    title: "Accessories",
    description:
      "Discover our Accessories collection, where you'll find practical yet stylish essentials like pens, keychains, and more. Perfect for adding a touch of personality to your everyday items or finding a thoughtful gift, our accessories combine functionality with flair. Explore our selection to find the perfect addition to your daily routine",
    imageUrl:
      "https://utfs.io/f/2YBx1bJMjIF37McMz29NBAMeLr3c4HRm5oXpzOGtDs8bjFYT",
    imageAlt: "Accessories",
  },
  {
    id: "5",
    title: "Fragrances",
    description:
      "Awaken your senses with our Fragrances collection! From fresh, uplifting scents to warm, soothing aromas, our selection of perfumes and essential oils is crafted to complement your unique style. Find your signature scent and make every moment memorable.",
    imageUrl:
      "https://utfs.io/f/2YBx1bJMjIF3xllIJkm2l5UywQISMhdfqcTBsHOpV4tEngJ8",
    imageAlt: "Fragrances",
  },
  {
    id: "6",
    title: "Drinkware",
    description:
      "Sip in style with our Drinkware collection! From custom cups to elegant tumblers, we offer a variety of drinkware designed to match your personality. Whether you're at home or on the go, our durable and stylish options make every sip a little more enjoyable.",
    imageUrl:
      "https://utfs.io/f/2YBx1bJMjIF3dCd8gmW89zPTR3wK5ON2tex4GyWAM6qIuCXn",
    imageAlt: "Drainkware",
  },
];

export default function ProductShowcase() {
  return (
    <main className="min-h-screen bg-black">
      <ProductSection products={products} />
    </main>
  );
}
