import React from "react";
import Image from "next/image";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-black p-10 text-white">
      <section className="flex h-full w-full flex-row items-center justify-between">
        {/* Text Section */}
        <div className="w-1/2 pr-10">
          <h1 className="text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-xl">
            We value your privacy in this magical world. Your data is protected
            by our strict security measures.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-8 w-1/2">
          <Image
            src="https://utfs.io/f/2YBx1bJMjIF3PVJurp33wDumv68AKCBqGXQ2tRecV9Fzjkh4"
            alt="Magical privacy protection"
            width={720}
            height={720}
            className="mx-auto rounded-md"
          />
        </div>
      </section>
      <div className="content space-y-6">
        <h2 className="text-2xl font-semibold">Information Collection</h2>
        <p>
          Wonderstruck Creationz collects personal data that is essential to
          providing you with our products and services. This includes your name,
          email address, shipping address, and payment information when you
          place an order.
        </p>

        <h2 className="text-2xl font-semibold">Use of Information</h2>
        <p>
          The information we collect is used to process orders, send shipping
          confirmations, and improve your overall experience on our website. We
          may also use your email to send occasional promotional offers, but you
          can opt out at any time.
        </p>

        <h2 className="text-2xl font-semibold">Third-Party Services</h2>
        <p>
          We may use third-party service providers, such as payment processors
          and shipping carriers, to fulfill your orders. These providers have
          access to your personal data only as necessary to perform their
          services. We ensure they use the same high standards of data
          protection.
        </p>

        <h2 className="text-2xl font-semibold">Security</h2>
        <p>
          We use SSL encryption and other security measures to protect your
          personal data. However, no method of transmission over the internet is
          100% secure. While we strive to protect your information, we cannot
          guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-semibold">Data Retention</h2>
        <p>
          We retain your personal data only for as long as necessary to provide
          you with services and to comply with legal obligations. Once it is no
          longer needed, we securely delete your information.
        </p>

        <h2 className="text-2xl font-semibold">Your Rights</h2>
        <p>
          You have the right to access, correct, or request deletion of your
          personal data at any time. To do so, please contact us at
          support@wonderstruckcreationz.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
