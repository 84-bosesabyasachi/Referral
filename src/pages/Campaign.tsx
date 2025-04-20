
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Trash, Plus, BarChart3 } from 'lucide-react';
import SearchInput from '@/components/ui/SearchInput';
import FilterButton from '@/components/ui/FilterButton';
import StatusBadge from '@/components/ui/StatusBadge';
import { Link } from 'react-router-dom';
import AIAgentDialog from '@/components/AIAgentDialog';

interface Campaign {
  id: string;
  name: string;
  dateRange: string;
  status: 'active' | 'inactive';
  referrals: number;
  conversion: number;
  roi: number;
  recommendation: string;
}

const campaigns: Campaign[] = [
  {
    id: '1',
    name: 'Summer Referral Program',
    dateRange: '5/31/2024 - 8/30/2024',
    status: 'active',
    referrals: 245,
    conversion: 32,
    roi: 287,
    recommendation: 'Increase reward by 10% to boost conversion rates during peak season'
  },
  {
    id: '2',
    name: 'Early Bird Special',
    dateRange: '8/20/2024 - 9/19/2024',
    status: 'inactive',
    referrals: 300,
    conversion: 40,
    roi: 320,
    recommendation: 'Extend your campaign! Strong engagement suggests higher conversions with more time.'
  },
  {
    id: '3',
    name: 'Winter Holiday Promotion',
    dateRange: '11/15/2024 - 12/31/2024',
    status: 'inactive',
    referrals: 0,
    conversion: 0,
    roi: 0,
    recommendation: 'Add social media sharing options to increase visibility and reach.'
  }
];

export default function Campaign() {
  const [search, setSearch] = useState('');
  const [showAIDialog, setShowAIDialog] = useState(false);

  const filteredCampaigns = campaigns.filter(campaign => {
    return campaign.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <MainLayout>
      {showAIDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <AIAgentDialog 
            title="AI Agent" 
            message="Create and manage campaigns with ease. Set rewards, define messages, and personalize journeys for both referrers and referred users."
            onSkip={() => setShowAIDialog(false)}
            onNext={() => setShowAIDialog(false)}
            currentStep={3}
            totalSteps={5}
          />
        </div>
      )}
      <PageHeader title="Create & Manage Referral Campaigns" />
      <div className="p-6">
        <Tabs defaultValue="past-promoters" className="mb-6">
          <TabsList>
            <TabsTrigger value="past-promoters">Past Promoters</TabsTrigger>
            <TabsTrigger value="new-promoters">New Promoters</TabsTrigger>
            <TabsTrigger value="new-leads">New Leads</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex justify-between items-center mb-6">
          <Link to="/campaign/create">
            <Button className="gap-2">
              <Plus size={16} />
              Create New Campaign
            </Button>
          </Link>
          <div className="flex gap-2">
            <div className="w-64">
              <SearchInput 
                placeholder="Search campaigns..." 
                value={search} 
                onChange={setSearch} 
              />
            </div>
            <FilterButton />
          </div>
        </div>

        <div className="text-sm text-gray-500 mb-4">
          {filteredCampaigns.length} Campaigns • {filteredCampaigns.filter(c => c.status === 'active').length} Active
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 flex justify-between items-center border-b">
                <div>
                  <h3 className="font-medium">{campaign.name}</h3>
                  <p className="text-gray-500 text-sm">{campaign.dateRange}</p>
                </div>
                <StatusBadge status={campaign.status} />
              </div>
              <div className="p-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <h4 className="text-gray-500 text-sm">Referrals</h4>
                  <p className="text-xl font-semibold">{campaign.referrals}</p>
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm">Conversion</h4>
                  <p className="text-xl font-semibold">{campaign.conversion}%</p>
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm">ROI</h4>
                  <p className="text-xl font-semibold">{campaign.roi}%</p>
                </div>
              </div>
              <div className="p-4 bg-blue-50">
                <div className="flex items-start gap-2">
                  <div className="mt-1 text-blue-500">•</div>
                  <p className="text-sm">{campaign.recommendation}</p>
                </div>
              </div>
              <div className="p-3 flex justify-between border-t">
                <button className="text-red-500 hover:text-red-700">
                  <Trash size={18} />
                </button>
                <div className="flex gap-2">
                  <button className="text-gray-500 hover:text-gray-700">
                    <BarChart3 size={18} />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Eye size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
