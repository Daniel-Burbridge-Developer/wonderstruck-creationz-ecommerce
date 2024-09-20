import React from "react";
import Image from "next/image";

const ShippingPolicyPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-black p-10 text-white">
      <section className="flex h-full w-full flex-row items-center justify-between">
        {/* Text Section */}
        <div className="w-1/2 pr-10">
          <h1 className="text-5xl font-bold">Shipping Policy</h1>
          <p className="mt-4 text-xl">
            Fast, efficient, and magical shipping to your doorstep.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-8 w-1/2">
          <Image
            src="https://utfs.io/f/2YBx1bJMjIF3ljcn3aNNuVfXZ3weCGhtjiUPR8xvAT9I1zan"
            alt="Magical shipping journey"
            width={720}
            height={720}
            className="mx-auto rounded-md"
          />
        </div>
      </section>
      <div className="content space-y-6">
        <h2 className="text-2xl font-semibold">Order Processing Time</h2>
        <p>
          All orders are processed within 2-3 business days. You will receive an
          email confirmation once your order has shipped, along with tracking
          information. During peak periods or holidays, order processing times
          may be extended.
        </p>

        <h2 className="text-2xl font-semibold">Domestic Shipping</h2>
        <p>
          We offer standard shipping for all domestic orders, which typically
          arrives within 5-10 business days depending on your location. We also
          offer expedited shipping for an additional fee, allowing you to
          receive your products within 2-4 business days.
        </p>

        <h2 className="text-2xl font-semibold">International Shipping</h2>
        <p>
          We currently do not support international shipping. We apologize for
          the inconvenience and hope to offer this service in the future.
        </p>

        <h2 className="text-2xl font-semibold">Shipping Costs</h2>
        <p>
          Shipping costs are calculated at checkout based on your location and
          the weight of your order. Orders over $200 are eligible for free
          standard shipping within Australia
        </p>

        <h2 className="text-2xl font-semibold">Tracking and Notifications</h2>
        <p>
          Once your order has shipped, you will receive a tracking number via
          email. You can use this tracking number to monitor the status of your
          delivery. Please note that tracking information may take up to 48
          hours to update.
        </p>

        <h2 className="text-2xl font-semibold">Delayed or Lost Orders</h2>
        <p>
          If your order has been delayed or lost in transit, please contact us
          at support@wonderstruckcreationz.com. We will work with the shipping
          carrier to resolve the issue and, if necessary, send a replacement
          order.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicyPage;
