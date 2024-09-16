import React from "react";
import Image from "next/image";

const TermsOfServicePage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-black p-10 text-white">
      <section className="flex h-full w-full flex-row items-center justify-between">
        {/* Text Section */}
        <div className="w-1/2 pr-10">
          <h1 className="text-5xl font-bold">Terms of Service</h1>
          <p className="mt-4 text-xl">
            The magical rules and guidelines for our community.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-1/2 mt-8">
          <Image
            src="https://utfs.io/f/2YBx1bJMjIF3lpUCdcNNuVfXZ3weCGhtjiUPR8xvAT9I1zan"
            alt="Magical terms of service"
            width={720}
            height={720}
            className="mx-auto rounded-md"
          />
        </div>
      </section>
      <div className="content space-y-6">
        <h2 className="text-2xl font-semibold">Agreement to Terms</h2>
        <p>
          By accessing or using our website, you agree to be bound by these
          Terms of Service. If you do not agree with any part of the terms, you
          are prohibited from using the site.
        </p>

        <h2 className="text-2xl font-semibold">Modifications</h2>
        <p>
          We reserve the right to modify or replace these terms at any time. You
          will be notified of any significant changes via email or through a
          notice on the site. Your continued use of the site following any
          changes constitutes acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-semibold">User Responsibilities</h2>
        <p>
          As a user of our site, you agree to use the services for lawful
          purposes only. You are prohibited from using the site to violate any
          local, national, or international laws. Any breach of these terms may
          result in termination of your access to the site.
        </p>

        <h2 className="text-2xl font-semibold">Intellectual Property</h2>
        <p>
          All content on this site, including images, graphics, text, and
          design, is the intellectual property of Wonderstruck Creationz or its
          licensors. You may not copy, distribute, or create derivative works
          from any content without prior written consent.
        </p>

        <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
        <p>
          In no event will Wonderstruck Creationz be liable for any direct,
          indirect, incidental, or consequential damages arising from your use
          of the website or from any actions we take regarding your account.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
