
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/layout/PageHeader';
import StatsCard from '@/components/ui/StatsCard';
import { Users, ArrowUpRight, BarChart3, DollarSign } from 'lucide-react';
import AIAgentDialog from '@/components/AIAgentDialog';

export default function Dashboard() {
  const [showAIDialog, setShowAIDialog] = useState(false);

  return (
    <MainLayout>
      {showAIDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <AIAgentDialog 
            title="AI Agent" 
            message="Get a quick overview of your platform's performance. View recent activities, monitor key analytics and stay updated on what's working—all in real-time."
            onSkip={() => setShowAIDialog(false)}
            onNext={() => setShowAIDialog(false)}
            currentStep={2}
            totalSteps={5}
          />
        </div>
      )}
      <PageHeader title="Summer Referral Program" />
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard 
            title="Total Referrals" 
            value="1,235" 
            icon={<Users />} 
            trend={{ value: "+12.5%", label: "vs last month", positive: true }}
          />
          <StatsCard 
            title="Conversion Rate" 
            value="25.5%" 
            icon={<ArrowUpRight />} 
            trend={{ value: "+3.2%", label: "vs last month", positive: true }}
          />
          <StatsCard 
            title="Revenue Generated" 
            value="$12,345" 
            icon={<DollarSign />} 
            trend={{ value: "+8.7%", label: "vs last month", positive: true }}
          />
          <StatsCard 
            title="Active Promoters" 
            value="509" 
            icon={<BarChart3 />}
          />
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium mb-4">Total Link Clicks</h3>
              <div className="h-64 flex items-center justify-center bg-gray-50 border rounded">
                <div className="w-full h-full p-4">
                  <div className="flex h-full items-end gap-2">
                    {[35, 45, 30, 50, 42, 38, 55, 48, 40, 52, 45, 60].map((value, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-blue-100"
                          style={{ height: `${value}%` }}
                        />
                        <div 
                          className="w-full bg-emerald-200 border-t border-white"
                          style={{ height: `${30 + (i % 10)}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h3 className="font-medium mb-4">Conversion Success Rate</h3>
              <div className="h-40 flex items-center justify-center">
                <div className="relative w-32 h-32 rounded-full border-8 border-blue-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">76%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium mb-4">Top Performing Channel</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-orange-100 p-2 rounded text-center">
                  <p className="text-orange-700 font-semibold">70%</p>
                  <p className="text-xs mt-1">Facebook</p>
                </div>
                <div className="bg-pink-100 p-2 rounded text-center">
                  <p className="text-pink-700 font-semibold">45%</p>
                  <p className="text-xs mt-1">Twitter</p>
                </div>
                <div className="bg-blue-100 p-2 rounded text-center">
                  <p className="text-blue-700 font-semibold">22%</p>
                  <p className="text-xs mt-1">LinkedIn</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-4">Campaign Performance</h3>
            <div className="h-64 flex items-center justify-center bg-gray-50 border rounded">
              <div className="w-full h-full p-4">
                <div className="relative h-full">
                  {/* Simulated line chart */}
                  <svg className="w-full h-full">
                    <path d="M0,80 Q50,20 100,60 T200,40 T300,60 T400,30 T500,50 T600,20" fill="none" stroke="#3B82F6" strokeWidth="2" />
                    <path d="M0,100 Q50,70 100,90 T200,80 T300,110 T400,70 T500,90 T600,80" fill="none" stroke="#10B981" strokeWidth="2" />
                    <path d="M0,120 Q50,150 100,130 T200,140 T300,120 T400,140 T500,130 T600,150" fill="none" stroke="#F59E0B" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-4">Recent Activities</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activities</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Julian earned $10</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">04-18-2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">10:30 AM</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">John Doe signed up from your referral link</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">04-17-2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">9:45 AM</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Maria Garcia viewed landing page</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">04-16-2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">3:20 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
