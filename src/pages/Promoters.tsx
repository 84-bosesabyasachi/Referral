
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/layout/PageHeader';
import SearchInput from '@/components/ui/SearchInput';
import FilterButton from '@/components/ui/FilterButton';
import DataTable from '@/components/ui/DataTable';
import StatusBadge from '@/components/ui/StatusBadge';
import { Eye, MessageSquare, Plus, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Promoter {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  conversions: number;
  revenue: string;
  status: 'active' | 'inactive';
}

export default function Promoters() {
  const [search, setSearch] = useState('');
  
  const promoters: Promoter[] = [
    { 
      id: '1', 
      name: 'David Johnson', 
      email: 'david.johnson@gmail.com', 
      contactNumber: '+1 234 567 8901',
      conversions: 24,
      revenue: '$1,245',
      status: 'active'
    },
    { 
      id: '2', 
      name: 'Sarah Williams', 
      email: 'sarah.williams@gmail.com', 
      contactNumber: '+1 987 654 3210',
      conversions: 18,
      revenue: '$982',
      status: 'active'
    },
    { 
      id: '3', 
      name: 'Michael Brown', 
      email: 'michael.brown@gmail.com', 
      contactNumber: '+1 567 890 1234',
      conversions: 32,
      revenue: '$1,870',
      status: 'active'
    },
    { 
      id: '4', 
      name: 'Emily Davis', 
      email: 'emily.davis@gmail.com', 
      contactNumber: '+1 321 456 7890',
      conversions: 8,
      revenue: '$420',
      status: 'inactive'
    },
    { 
      id: '5', 
      name: 'James Wilson', 
      email: 'james.wilson@gmail.com', 
      contactNumber: '+1 789 012 3456',
      conversions: 15,
      revenue: '$875',
      status: 'active'
    },
  ];

  const columns = [
    { 
      header: '', 
      accessorKey: 'id',
      cell: () => (
        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
      )
    },
    { header: 'Promoter Name', accessorKey: 'name' },
    { header: 'Email ID', accessorKey: 'email' },
    { header: 'Contact No.', accessorKey: 'contactNumber' },
    { header: 'Conversions', accessorKey: 'conversions' },
    { header: 'Revenue Generated', accessorKey: 'revenue' },
    { 
      header: 'Status', 
      accessorKey: 'status',
      cell: (promoter) => <StatusBadge status={promoter.status} />
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
            <MessageSquare size={18} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <MoreHorizontal size={18} />
          </button>
        </div>
      )
    },
  ];

  const filteredPromoters = promoters.filter(promoter => {
    const searchTerm = search.toLowerCase();
    return (
      promoter.name.toLowerCase().includes(searchTerm) || 
      promoter.email.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <MainLayout>
      <PageHeader title="Manage and monitor your promoter referral activities">
        <div className="flex items-center space-x-2">
          <Button className="flex items-center gap-2">
            <Plus size={16} />
            Add Promoters
          </Button>
          <Button variant="outline">
            Add Past Customers As Referrers
          </Button>
        </div>
      </PageHeader>
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Promoters</h2>
          <div className="flex justify-between">
            <div className="w-72">
              <SearchInput 
                placeholder="Search..." 
                value={search} 
                onChange={setSearch} 
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">
                Change Status
              </Button>
              <FilterButton />
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <DataTable 
            data={filteredPromoters}
            columns={columns}
          />
        </div>
      </div>
    </MainLayout>
  );
}
