import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import RevenueTable from '@/app/ui/dashboard/revenue-table';
import { lusitana } from '@/app/ui/fonts';
import { revenue } from '@/app/lib/placeholder-data';

export default function Page() {
  return (
    <main className="p-6">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Total Revenue" value="$45,231.89" type="collected" />
        <Card title="Pending Invoices" value="$12,345.67" type="pending" />
        <Card title="Total Invoices" value="24" type="invoices" />
        <Card title="Total Customers" value="12" type="customers" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueTable revenue={revenue} />
        <LatestInvoices latestInvoices={[]} />
      </div>
    </main>
  );
}