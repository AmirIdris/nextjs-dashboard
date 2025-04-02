import CustomersTable from '@/app/ui/customers/table';
import { customers } from '@/app/lib/placeholder-data';

export default function Page() {
  // Format the customers data to match the FormattedCustomersTable type
  const formattedCustomers = customers.map(customer => ({
    ...customer,
    total_invoices: 0, // These would come from the database in a real app
    total_pending: '$0',
    total_paid: '$0'
  }));

  return (
    <div className="w-full">
      <CustomersTable customers={formattedCustomers} />
    </div>
  );
}