"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { PostHog } from "posthog-node";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, DollarSign, ShoppingCart, Users } from "lucide-react";

// Initialize PostHog client
// const posthog = new PostHog(
//   process.env.NEXT_PUBLIC_POSTHOG_KEY!,
//   { host: process.env.NEXT_PUBLIC_POSTHOG_HOST! }
// );

function getAnalytics() {
  // This is a placeholder. Replace with actual PostHog queries
  // const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(); // 30 days ago
  // const endDate = new Date().toISOString();

  // const [revenue, orders, customers] = await Promise.all([
  //   posthog.api("insights/trend", {
  //     events: [
  //       {
  //         id: "purchase",
  //         math: "sum",
  //         math_property: "value",  // Assuming 'value' is the property storing revenue data
  //       },
  //     ],
  //     date_from: startDate,
  //     date_to: endDate,
  //   }),
  //   posthog.api("insights/trend", {
  //     events: [
  //       {
  //         id: "purchase",
  //         math: "total",
  //       },
  //     ],
  //     date_from: startDate,
  //     date_to: endDate,
  //   }),
  //   posthog.api("insights/trend", {
  //     events: [
  //       {
  //         id: "purchase",
  //         math: "unique",
  //         math_property: "dau",  // Assuming 'dau' tracks unique customers
  //       },
  //     ],
  //     date_from: startDate,
  //     date_to: endDate,
  //   }),
  // ]);

  // console.log(revenue, orders, customers);

  // const totalRevenue = revenue.results[0].result || 0;
  // const totalOrders = orders.results[0].result || 0;
  // const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
  // const totalCustomers = customers.results[0].result || 0;

  const totalRevenue = 0;
  const totalOrders = 0;
  const averageOrderValue = 0;
  const totalCustomers = 0;

  return {
    totalRevenue,
    totalOrders,
    averageOrderValue,
    totalCustomers,
  };
}

export default function Page() {
  const auth = useAuth();
  const userInfo = useUser();

  const userId = userInfo.user?.id;

  if (!auth.isSignedIn) {
    return <h1 className="flex justify-center">Please sign in</h1>;
  }

  // Check if user is an admin
  const { user } = userInfo;
  if (!user) {
    return <h1 className="flex justify-center">No User Found</h1>; // Redirect unauthenticated users
  }
  if (user.publicMetadata.role !== "admin") {
    return <h1 className="flex justify-center">User not an admin</h1>; // Redirect non-admin users
  }

  const analytics = getAnalytics();

  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">E-commerce Admin Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              $
              {analytics.totalRevenue.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analytics.totalOrders.toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Order Value
            </CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              $
              {analytics.averageOrderValue.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Customers
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analytics.totalCustomers.toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
