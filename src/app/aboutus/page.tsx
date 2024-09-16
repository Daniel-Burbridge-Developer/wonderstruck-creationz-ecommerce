import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <main className="flex-1">
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-700 to-primary/80">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="https://utfs.io/f/2YBx1bJMjIF3Q1ennPjtHEdhBU7wAlpoiOS8W3s5Iun1FgaL"
                width="800"
                height="600"
                alt="Hero"
                className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-primary-foreground">
                    Wonderstruck Creationz
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                    Discover a world of wonder and whimsy at our enchanted shop, where every product is crafted with
                    love and infused with a touch of magic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 align-middle justify-center flex">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Image
                  src="https://utfs.io/f/2YBx1bJMjIF3rktRrrv9BbnuP3irZOIKSLYXM2EfWl18mV4A"
                  width="400"
                  height="400"
                  alt="Owner"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet the Enchantress</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    "I pour my heart and soul into every product, imbuing each one with a touch of magic. My passion for
                    creating enchanting items is what drives me, and I hope to share that wonder with everyone who steps
                    into my shop."
                  </p>
                  <p className="text-primary font-semibold">- Willow, Founder</p>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-1">
                  <h3 className="text-2xl font-bold">Our Story</h3>
                  <p className="text-muted-foreground">
                    Wonderstruck Creationz was born from a lifelong love of all things magical and whimsical. Willow,
                    the founder, has always been captivated by the idea of infusing everyday items with a touch of
                    enchantment. After years of honing her craft, she opened the doors to her shop, determined to share
                    her passion with the world.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-2xl font-bold">Our Commitment</h3>
                  <p className="text-muted-foreground">
                    At Wonderstruck Creationz, we believe that every product should be crafted with the utmost care and
                    attention to detail. Willow personally oversees the creation of each item, ensuring that it meets
                    her high standards of quality and enchantment. We are dedicated to providing our customers with a
                    truly magical shopping experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted align-center flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Enchanted Collection</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From custom drinkware to cozy apparel and enchanting candles, our shop is a treasure trove of magical
                  delights. Discover the perfect item to add a touch of wonder to your life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Image
                  src="https://utfs.io/f/2YBx1bJMjIF3PO8vG033wDumv68AKCBqGXQ2tRecV9Fzjkh4"
                  width="300"
                  height="300"
                  alt="Pen"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold">Dimensional Pen</h3>
                  <p className="text-muted-foreground">$24.99</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Image
                  src="https://utfs.io/f/2YBx1bJMjIF3DXx3y1WFI1cm6oCpNuVrxzgAB4PilfLaXYsk"
                  width="300"
                  height="300"
                  alt="Candle"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold">Scentsational Candle</h3>
                  <p className="text-muted-foreground">$34.99</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Image
                  src="https://utfs.io/f/2YBx1bJMjIF3PuK2HSv33wDumv68AKCBqGXQ2tRecV9Fzjkh"
                  width="300"
                  height="300"
                  alt="Baby Bottle"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold">Enchanted Baby Bottles</h3>
                  <p className="text-muted-foreground">$19.99</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Image
                  src="https://utfs.io/f/2YBx1bJMjIF3XJ8a0riA1i5r7HVo2OQY3adl8uCGI6gvSJjk"
                  width="300"
                  height="300"
                  alt="Hoodie"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold">Wonderstruck Hoodie</h3>
                  <p className="text-muted-foreground">$29.99</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Image
                  src="https://utfs.io/f/2YBx1bJMjIF3jkPKmK5wCrGmpW2BqERA4uSkYdzsVQ6UgLTN"
                  width="300"
                  height="300"
                  alt="Coffee Tumbler"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold">Whimsical Coffee Tumbler</h3>
                  <p className="text-muted-foreground">$49.99</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
