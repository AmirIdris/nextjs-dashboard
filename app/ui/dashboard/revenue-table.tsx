import { Revenue } from '@/app/lib/definitions';
import { lusitana } from '@/app/ui/fonts';

export default function RevenueTable({ revenue }: { revenue: Revenue[] }) {
  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Monthly Revenue
      </h2>
      <div className="rounded-lg bg-white p-6">
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-900">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">
                  Month
                </th>
                <th scope="col" className="px-6 py-4 font-medium">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {revenue.map((item) => (
                <tr key={item.month} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{item.month}</td>
                  <td className="px-6 py-4">
                    ${item.revenue.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 