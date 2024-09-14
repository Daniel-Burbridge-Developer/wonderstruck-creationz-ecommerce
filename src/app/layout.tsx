import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "./_components/topnav";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Wonderstruck Creationz",
  description: "Bringing Wonder to with our Creations",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({
  children,
  modal,
}: Readonly<RootLayoutProps>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <TopNav />
          {children}
          {modal}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
