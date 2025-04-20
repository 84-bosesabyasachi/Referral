
// import MainLayout from '@/components/layout/MainLayout';
// import PageHeader from '@/components/layout/PageHeader';

// export default function Payouts() {
//   return (
//     <MainLayout>
//       <PageHeader title="Manage and track your referral payouts" />
//       <div className="p-6">
//         <div className="bg-white rounded-lg shadow p-6 text-center">
//           <h3 className="text-xl font-medium mb-2">Payouts Page</h3>
//           <p className="text-gray-500">
//             This page would display payout history, pending payments, and payment methods.
//           </p>
//         </div>
//       </div>
//     </MainLayout>
//   );
// }

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/layout/PageHeader';
import PaymentStats from '@/components/payouts/PaymentStats';
import PayoutsTable from '@/components/payouts/PayoutsTable';
import PayoutSettings from '@/components/payouts/PayoutSettings';
import FilterButton from '@/components/ui/FilterButton';

const payoutsData = [
  {
    id: 'PY-0014',
    promoterName: 'Randy Calzoni',
    points: 500,
    requestDate: 'Apr 5, 2023',
    rewardEarnedFor: 'Spring Boost',
    status: 'pending' as const,
  },
  {
    id: 'PY-0013',
    promoterName: 'Sarah Williams',
    points: 750,
    requestDate: 'Apr 4, 2023',
    rewardEarnedFor: 'Early Bird Special',
    status: 'completed' as const,
  },
  // Add more sample data as needed
];

export default function Payouts() {
  const [activeTab, setActiveTab] = useState<'all' | 'disputes' | 'settings'>('all');

  return (
    <MainLayout>
      <PageHeader title="Manage and monitor your payouts">
        <div className="flex items-center space-x-4">
          <FilterButton />
        </div>
      </PageHeader>

      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <PaymentStats 
            label="Total Points Given"
            value="12,500"
          />
          <PaymentStats 
            label="Current Point Balance"
            value="1,250"
          />
          <PaymentStats 
            label="Last Points Transfer"
            value="April 9, 2025"
          />
        </div>

        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b px-6 py-4">
            <div className="flex space-x-6">
              <button
                onClick={() => setActiveTab('all')}
                className={`pb-4 px-2 font-medium ${
                  activeTab === 'all'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500'
                }`}
              >
                All Payouts
              </button>
              <button
                onClick={() => setActiveTab('disputes')}
                className={`pb-4 px-2 font-medium ${
                  activeTab === 'disputes'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500'
                }`}
              >
                Disputes
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`pb-4 px-2 font-medium ${
                  activeTab === 'settings'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500'
                }`}
              >
                Payout Settings
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'settings' ? (
              <PayoutSettings />
            ) : (
              <PayoutsTable 
                data={payoutsData}
                type={activeTab === 'disputes' ? 'disputes' : 'all'}
              />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
