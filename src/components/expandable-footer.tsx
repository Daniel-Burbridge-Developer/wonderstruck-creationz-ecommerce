"use client";

import { useState, useEffect, useRef } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ExpandableFooterComponent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsExpanded(true);
        }
      },
      { threshold: 0.9 }, // Trigger when 90% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer
      ref={footerRef}
      className={`bg-gray-100 text-gray-800 transition-all duration-500 ease-in-out ${
        isExpanded ? "py-12" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Wonderstruck Creationz</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleExpansion}
            aria-expanded={isExpanded}
            aria-controls="footer-content"
          >
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
            <span className="sr-only">
              {isExpanded ? "Collapse footer" : "Expand footer"}
            </span>
          </Button>
        </div>

        <div
          id="footer-content"
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About Us</h3>
              <p className="text-sm">
                {`At Wonderstruck Creationz, we specialize in custom-designed
                cups, hoodies, and accessories that reflect your unique style.
                Whether you're looking for personalized gifts or trendy pieces
                to elevate your look, we're here to create items that stand out.
                Each product is crafted with care, creativity, and attention to
                detail—just for you!`}
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/aboutus" className="hover:underline">
                    Learn More
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Policies</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/shipping-policy" className="hover:underline">
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="hover:underline">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Customer Service</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/order-tracking" className="hover:underline">
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Stay Connected</h3>
              <form className="space-y-2">
                <p className="text-sm">
                  Sign up for our newsletter to get updates and exclusive
                  offers.
                </p>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="flex-grow"
                  />
                  <Button type="submit" variant="secondary">
                    Subscribe
                  </Button>
                </div>
              </form>
              <div className="mt-4 flex space-x-4">
                <Link
                  href="https://facebook.com"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Facebook size={24} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://instagram.com"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Instagram size={24} />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Twitter size={24} />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Wonderstruck Creationz. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
