import React from "react";
import Image from "next/image";

const RefundPolicyPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-black p-10 text-white">
      <section className="flex h-full w-full flex-row items-center justify-between">
        {/* Text Section */}
        <div className="w-1/2 pr-10">
          <h1 className="text-5xl font-bold">Refund Policy</h1>
          <p className="mt-4 text-xl">
            We ensure customer satisfaction with a magical touch.
          </p>
          <p className="mt-4">
            If you're not satisfied with your purchase, we're here to help. Our
            refund process is simple and smooth, ensuring that you're always
            happy with your experience at Wonderstruck Creationz.
          </p>
          <p className="mt-4">
            Please contact our support team within 30 days of receiving your
            order for assistance with returns, exchanges, and refunds.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-1/2 mt-8">
          <Image
            src="https://utfs.io/f/2YBx1bJMjIF3gMbtmPViMPyThw2NpCoszadRE3L5b8B7KGYZ"
            alt="Magical refund process"
            width={720}
            height={720}
            className="mx-auto rounded-md"
          />
        </div>
      </section>
      <div className="content space-y-6">
        <h2 className="text-2xl font-semibold">Returns</h2>
        <p>
          If you are not entirely satisfied with your purchase, you can return
          it within 30 days of receipt for a full refund or exchange. All items
          must be returned in their original condition, unused, and in their
          original packaging.
        </p>

        <h2 className="text-2xl font-semibold">Refunds</h2>
        <p>
          Once we receive and inspect your returned item, we will notify you of
          the approval or rejection of your refund. If approved, your refund
          will be processed within 5-7 business days, and a credit will be
          applied to your original method of payment.
        </p>

        <h2 className="text-2xl font-semibold">Exchanges</h2>
        <p>
          If you received a defective or damaged product, we will gladly replace
          the item. Please contact our support team at
          support@wonderstruckcreationz.com with details of the defect or
          damage.
        </p>

        <h2 className="text-2xl font-semibold">Shipping Costs</h2>
        <p>
          Customers are responsible for return shipping costs, except in the
          case of defective or damaged items. We recommend using a trackable
          shipping service or purchasing shipping insurance for higher-value
          items.
        </p>

        <h2 className="text-2xl font-semibold">Late or Missing Refunds</h2>
        <p>
          If you haven’t received a refund within the expected timeframe, please
          check with your bank or credit card company. If you've done this and
          still haven’t received your refund, contact us at
          support@wonderstruckcreationz.com.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
