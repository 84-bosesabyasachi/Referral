
import { Eye, MoreHorizontal } from "lucide-react";
import DataTable from "@/components/ui/DataTable";
import StatusBadge from "@/components/ui/StatusBadge";

interface Payout {
  id: string;
  promoterName: string;
  points: number;
  requestDate: string;
  rewardEarnedFor: string;
  status: 'pending' | 'completed';
}

interface PayoutsTableProps {
  data: Payout[];
  type?: 'all' | 'disputes';
}

export default function PayoutsTable({ data, type = 'all' }: PayoutsTableProps) {
  const columns = [
    { header: 'Payout ID', accessorKey: 'id' },
    { header: 'Promoter Name', accessorKey: 'promoterName' },
    { header: 'Points', accessorKey: 'points' },
    { header: 'Request Date', accessorKey: 'requestDate' },
    { header: 'Reward Earned For', accessorKey: 'rewardEarnedFor' },
    { 
      header: 'Status', 
      accessorKey: 'status',
      cell: (payout) => <StatusBadge status={payout.status} />
    },
    {
      header: 'Actions',
      accessorKey: 'id',
      cell: () => (
        <div className="flex space-x-2">
          <button className="text-gray-500 hover:text-gray-700">
            <Eye size={18} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <MoreHorizontal size={18} />
          </button>
        </div>
      )
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <DataTable 
        data={data}
        columns={columns}
      />
    </div>
  );
}
