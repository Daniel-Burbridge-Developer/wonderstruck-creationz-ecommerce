'use client'

import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function FooterComponent() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm">We're passionate about delivering quality products and exceptional customer service.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shipping-policy" className="hover:underline">Shipping Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:underline">Refund Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="/size-guide" className="hover:underline">Size Guide</Link></li>
              <li><Link href="/order-tracking" className="hover:underline">Order Tracking</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <form className="space-y-2">
              <p className="text-sm">Sign up for our newsletter to get updates and exclusive offers.</p>
              <div className="flex space-x-2">
                <Input type="email" placeholder="Your email" className="flex-grow" />
                <Button type="submit" variant="secondary">Subscribe</Button>
              </div>
            </form>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" className="text-gray-600 hover:text-gray-800">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-600 hover:text-gray-800">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-600 hover:text-gray-800">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Wonderstruck Creationz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}