"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

// Example cart items
const cartItems = [
  { id: 1, name: "Product 1", price: 19.99 },
  { id: 2, name: "Product 2", price: 29.99 },
];

export function TopNavComponent() {
  const { isSignedIn, user } = useUser();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Get the main element for scrolling
    const mainElement = document.querySelector("main");

    const handleScroll = () => {
      if (mainElement && mainElement.scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach scroll listener to main element
    mainElement?.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup on unmount
    return () => {
      mainElement?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-10 w-full transition-all duration-1000 ease-in-out ${scrolled ? "bg-black" : "bg-black/30"} h-16`}
    >
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="text-xl font-bold text-white">
              Wonderstruck Creationz
            </Link>
          </div>

          <div className="hidden items-center sm:flex sm:space-x-8">
            <Link
              href="/events"
              className="text-white transition-colors hover:text-gray-300"
            >
              Events
            </Link>
            <Link
              href="/products"
              className="text-white transition-colors hover:text-gray-300"
            >
              Products
            </Link>
            <Link
              href="about-us"
              className="text-white transition-colors hover:text-gray-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white transition-colors hover:text-gray-300"
            >
              Contact
            </Link>
          </div>

          <div className="hidden items-center space-x-4 sm:flex">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="text-white" />
                  <Badge
                    className="absolute -right-2 -top-2 px-2 py-1"
                    variant="destructive"
                  >
                    {cartItems.length}
                  </Badge>
                  <span className="sr-only">Open cart</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                  <SheetDescription>
                    You have {cartItems.length} item(s) in your cart
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                      <span>${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between font-bold">
                      <span>Total</span>
                      <span>
                        $
                        {cartItems
                          .reduce((sum, item) => sum + item.price, 0)
                          .toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full">Checkout</Button>
                </div>
              </SheetContent>
            </Sheet>

            {isSignedIn ? (
              user.publicMetadata.role === "admin" ? (
                <div className="flex gap-4">
                  <UserButton />
                  <Link href="/admin-dashboard" className="text-white">
                    Admin Dashboard
                  </Link>
                </div>
              ) : (
                <UserButton />
              )
            ) : (
              <SignInButton mode="modal">
                <Button variant="secondary">Sign In</Button>
              </SignInButton>
            )}
          </div>

          <div className="flex items-center space-x-4 sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="text-white" />
                  <Badge
                    className="absolute -right-2 -top-2 px-2 py-1"
                    variant="destructive"
                  >
                    {cartItems.length}
                  </Badge>
                  <span className="sr-only">Open cart</span>
                </Button>
              </SheetTrigger>
              <SheetContent>{/* Cart content */}</SheetContent>
            </Sheet>
            <button className="text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
