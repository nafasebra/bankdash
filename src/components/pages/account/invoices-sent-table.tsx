import { invoices } from '@/data/invoice';
import { Invoice } from '@/types/invoice';

function InvoicesSentTable() {
  return (
    <div className="bg-white rounded-xl overflow-hidden text-primary-200 p-6 space-y-6">
      {invoices.map((invoice: Invoice) => (
        <div className="flex items-center gap-3">
          <div className="w-[55px] h-[55px] flex items-center justify-center bg-cyan/20 text-cyan rounded-2xl">
            <div className="w-6 h-6">{invoice.icon}</div>
          </div>
          <div className="w-[calc(100%-55px-0.75rem)] flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-black text-lg">{invoice.title}</p>
              <p className="text-primary-400">{invoice.date}</p>
            </div>
            <p className="text-primary-400">{invoice.amount}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InvoicesSentTable;
