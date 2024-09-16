import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNavComponent } from "@/components/top-nav";
import { ExpandableFooterComponent } from "@/components/expandable-footer";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

// Remove once out of testing and the site is a functional shop
import Disclaimer from "./_components/disclaimer";

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
        <body className="dark">
          <div className="grid-rows-[auto, 1fr] grid h-screen">
            <TopNavComponent />
            {/* Remove once out of testing and the site is a functional shop*/}
            <Disclaimer />
            <main className="overflow-y-scroll">{children}
              <div className="relative flex w-full flex-col">
              <ExpandableFooterComponent />
              </div>
            </main>
          </div>
          {modal}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
