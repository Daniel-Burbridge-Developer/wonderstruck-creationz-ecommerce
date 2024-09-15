'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

// Example cart items
const cartItems = [
  { id: 1, name: "Product 1", price: 19.99 },
  { id: 2, name: "Product 2", price: 29.99 },
]

export function TopNavComponent() {
  const { isSignedIn } = useUser()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Get the main element for scrolling
    const mainElement = document.querySelector('main')

    const handleScroll = () => {
      if (mainElement && mainElement.scrollTop > 500) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Attach scroll listener to main element
    mainElement?.addEventListener('scroll', handleScroll, { passive: true })

    // Cleanup on unmount
    return () => {
      mainElement?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed w-full z-10 transition-all duration-1000 ease-in-out ${scrolled ? 'bg-black' : 'bg-transparent'} h-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              E-Shop
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:space-x-8 items-center">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
            <Link href="/products" className="text-white hover:text-gray-300 transition-colors">Products</Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="text-white" />
                  <Badge className="absolute -top-2 -right-2 px-2 py-1" variant="destructive">
                    {cartItems.length}
                  </Badge>
                  <span className="sr-only">Open cart</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                  <SheetDescription>You have {cartItems.length} item(s) in your cart</SheetDescription>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <span>{item.name}</span>
                      <span>${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center font-bold">
                      <span>Total</span>
                      <span>${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
                    </div>
                  </div>
                  <Button className="w-full">Checkout</Button>
                </div>
              </SheetContent>
            </Sheet>

            {isSignedIn ? (
              <UserButton />
            ) : (
              <SignInButton mode="modal">
                <Button variant="secondary">Sign In</Button>
              </SignInButton>
            )}
          </div>
          
          <div className="sm:hidden flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="text-white" />
                  <Badge className="absolute -top-2 -right-2 px-2 py-1" variant="destructive">
                    {cartItems.length}
                  </Badge>
                  <span className="sr-only">Open cart</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                {/* Cart content */}
              </SheetContent>
            </Sheet>
            <button className="text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
