import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import InvoicesTable from '@/app/ui/invoices/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { invoices, customers } from '@/app/lib/placeholder-data';
import { InvoicesTable as InvoicesTableType } from '@/app/lib/definitions';

export default function Page({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  // Format the invoices data to match the InvoicesTable type
  const formattedInvoices: InvoicesTableType[] = invoices.map(invoice => {
    const customer = customers.find(c => c.id === invoice.customer_id);
    return {
      id: invoice.customer_id, // Using customer_id as id for now
      customer_id: invoice.customer_id,
      name: customer?.name || 'Unknown Customer',
      email: customer?.email || 'unknown@example.com',
      image_url: customer?.image_url || '/customers/placeholder.png',
      date: invoice.date,
      amount: invoice.amount,
      status: invoice.status as 'pending' | 'paid' // Type assertion to match the expected type
    };
  });

  // Filter invoices based on search query
  const filteredInvoices = formattedInvoices.filter(invoice => {
    const searchTerm = query.toLowerCase();
    return (
      invoice.name.toLowerCase().includes(searchTerm) ||
      invoice.email.toLowerCase().includes(searchTerm) ||
      invoice.amount.toString().includes(searchTerm) ||
      invoice.date.includes(searchTerm) ||
      invoice.status.toLowerCase().includes(searchTerm)
    );
  });

  // Paginate results
  const ITEMS_PER_PAGE = 6;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedInvoices = filteredInvoices.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
        <CreateInvoice />
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable invoices={paginatedInvoices} />
      </Suspense>
    </div>
  );
}