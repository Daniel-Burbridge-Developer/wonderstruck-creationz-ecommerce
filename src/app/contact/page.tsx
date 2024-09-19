"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactUsComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Contact Us</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              {`We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Here are the ways you can reach us:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <span>support@wonderstruckcreationz.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <span>0481 395 689 </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span>123 Wonder Lane, City, State 7000</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full">
              <h3 className="mb-2 text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.tiktok.com/@yourstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">TikTok</span>
                </a>
                <a
                  href="https://www.instagram.com/yourstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/yourstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Join Us on TikTok!</CardTitle>
          <CardDescription>
            We stream most nights with fun games and events.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Tune in to our TikTok channel for exciting live streams featuring:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Product showcases and demos</li>
            <li>Interactive games with prizes</li>
            <li>Special discounts for live viewers</li>
          </ul>
          <p className="mt-4">
            Follow us on TikTok{" "}
            <a
              href="https://www.tiktok.com/@yourstore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              @wonderstruckcreationz
            </a>{" "}
            to get notified when we go live!
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <a
              href="https://www.tiktok.com/@yourstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow Us on TikTok
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
