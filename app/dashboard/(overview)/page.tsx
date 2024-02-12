'use client'
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import { useAppSelector } from '@/lib/hooks';
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store';
 
export default async function Page() {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  
  return (
    <Provider store={makeStore()}>
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <pre>{currentTheme}</pre>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardsSkeleton />} >
            <CardWrapper />
          </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<RevenueChartSkeleton />} >
            <RevenueChart  />
          </Suspense>
          <Suspense fallback={<LatestInvoicesSkeleton />} >
            <LatestInvoices />
          </Suspense>
        </div>
      </main>
    </Provider>
  );
}