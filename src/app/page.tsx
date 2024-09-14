export default function HomePage() {
  // Seperate into Mock URLS and then map over to make the objects

  const heroImageMockURLS = [
    "https://utfs.io/f/2YBx1bJMjIF3iJWVKmzQBGpKzcVxmj3r86RbUAC7hZodw0uH",
    "https://utfs.io/f/2YBx1bJMjIF3gcOes4ViMPyThw2NpCoszadRE3L5b8B7KGYZ",
    "https://utfs.io/f/2YBx1bJMjIF30G1W1uj7LSntRJoGbXBaFEk3WlsqCp8erVcY",
    "https://utfs.io/f/2YBx1bJMjIF3g12QjWXViMPyThw2NpCoszadRE3L5b8B7KGY",
  ];

  const heroImageMock = heroImageMockURLS.map((url, index) => ({
    id: index + 1,
    url: url,
    alt: "Hero Image",
  }));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">
            Wonderstruck Creationz
          </span>
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {[...heroImageMock, ...heroImageMock, ...heroImageMock].map((image) => (
          <div key={image.id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.url}
              alt={image.alt}
              className="h-72 w-72 rounded-lg object-cover shadow-lg"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
