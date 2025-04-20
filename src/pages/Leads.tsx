
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/layout/PageHeader';
import DataTable, { Column } from '@/components/ui/DataTable';
import StatusBadge from '@/components/ui/StatusBadge';
import SearchInput from '@/components/ui/SearchInput';
import FilterButton from '@/components/ui/FilterButton';
import { Eye, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AIAgentDialog from '@/components/AIAgentDialog';

interface Lead {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  couponCode: string;
  status: 'pending' | 'completed';
}

const leads: Lead[] = [
  { 
    id: '1', 
    name: 'Emery Doklala', 
    email: 'emerydoklala@gmail.com', 
    contactNumber: '+97387701747l5', 
    couponCode: '+97387701747l5', 
    status: 'pending' 
  },
  { 
    id: '2', 
    name: 'Maxon Vaccaro', 
    email: 'maxonvaccaro@gmail.com', 
    contactNumber: '+97l50l946279', 
    couponCode: '+97l50l946279', 
    status: 'pending' 
  },
  { 
    id: '3', 
    name: 'Jocelyn Levin', 
    email: 'jocelynlevin@gmail.com', 
    contactNumber: '+97l50l598978', 
    couponCode: '+97l50l598978', 
    status: 'pending' 
  },
  { 
    id: '4', 
    name: 'Maren Septimus', 
    email: 'marenseptimus@gmail.com', 
    contactNumber: '+9712225603l5', 
    couponCode: '+9712225603l5', 
    status: 'completed' 
  },
  { 
    id: '5', 
    name: 'Geordi Tavill', 
    email: 'georditavill@gmail.com', 
    contactNumber: '+97l5543l5300', 
    couponCode: '+97l5543l5300', 
    status: 'pending' 
  },
  { 
    id: '6', 
    name: 'Kinsey Schwing', 
    email: 'kinseyschwing@gmail.com', 
    contactNumber: '+97l529620632', 
    couponCode: '+97l529620632', 
    status: 'completed' 
  },
  { 
    id: '7', 
    name: 'Haylie Saris', 
    email: 'hayliesaris@gmail.com', 
    contactNumber: '+97l503328228', 
    couponCode: '+97l503328228', 
    status: 'completed' 
  },
  { 
    id: '8', 
    name: 'Randy Horwitz', 
    email: 'randyhorwitz@gmail.com', 
    contactNumber: '+97l5543l522', 
    couponCode: '+97l5543l522', 
    status: 'pending' 
  },
];

export default function Leads() {
  const [search, setSearch] = useState('');
  const [showAIDialog, setShowAIDialog] = useState(true);

  const columns: Column<Lead>[] = [
    { 
      header: '', 
      accessorKey: 'id',
      cell: () => (
        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
      )
    },
    { header: 'Lead Name', accessorKey: 'name' },
    { header: 'Email ID', accessorKey: 'email' },
    { header: 'Contact No.', accessorKey: 'contactNumber' },
    { header: 'Coupon Code', accessorKey: 'couponCode' },
    { 
      header: 'Status', 
      accessorKey: 'status',
      cell: (lead) => <StatusBadge status={lead.status} />
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
        </div>
      )
    },
  ];

  const filteredLeads = leads.filter(lead => {
    const searchTerm = search.toLowerCase();
    return (
      lead.name.toLowerCase().includes(searchTerm) || 
      lead.email.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <MainLayout>
      {showAIDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <AIAgentDialog 
            title="AI Agent" 
            message="Here, you'll see a list of all the people who were referred by promoters and have filled out the lead form. You can view the follow-up messages."
            onSkip={() => setShowAIDialog(false)}
            onNext={() => setShowAIDialog(false)}
          />
        </div>
      )}
      <PageHeader title="Manage and monitor your leads" />
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Leads</h2>
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
            data={filteredLeads}
            columns={columns}
          />
        </div>
      </div>
    </MainLayout>
  );
}
