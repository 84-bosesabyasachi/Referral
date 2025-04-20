
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/layout/PageHeader';
import { CheckCircle, Circle, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Step {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'not-started';
}

export default function PlatformSetup() {
  const [activeStep, setActiveStep] = useState<string>('import');

  const steps: Step[] = [
    { id: 'business', title: 'Set Up Business Profile', status: 'completed' },
    { id: 'import', title: 'Sync Your Customer Data', status: 'in-progress' },
    { id: 'agent', title: 'Set Up AI Agent Rules', status: 'not-started' },
    { id: 'campaign', title: 'Set Up First Campaign', status: 'not-started' },
  ];

  return (
    <MainLayout>
      <PageHeader title="Platform Setup" />
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-blue-600 mb-1">Get Started with ReferralHub</h3>
            <p className="text-sm text-gray-600 mb-6">To get started with better referrals & rewards, complete your account setup in a few easy steps.</p>

            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center gap-3">
                  <div>
                    {step.status === 'completed' ? (
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500">
                        <CheckCircle size={20} />
                      </div>
                    ) : step.status === 'in-progress' ? (
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                        <Circle size={20} className="fill-current" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <Circle size={20} />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium">{step.title}</h4>
                    <p className={cn(
                      "text-xs",
                      step.status === 'completed' && "text-emerald-500",
                      step.status === 'in-progress' && "text-blue-500",
                      step.status === 'not-started' && "text-gray-500"
                    )}>
                      {step.status === 'completed' ? 'Completed' :
                        step.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-4">Import Customer Data: Sync with Zapier or Upload CSV</h3>

            <div className="flex flex-col items-center space-y-4">
              <Button variant="outline" className="w-full" size="lg">
                Connect with Zapier
              </Button>

              <div className="text-center text-gray-500 text-sm">or</div>

              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 w-full">
                <div className="flex flex-col items-center justify-center">
                  <div className="p-3 bg-blue-50 rounded-full mb-3">
                    <Upload className="text-blue-500" size={24} />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Drag and drop files here</p>
                  <p className="text-xs text-gray-500 mb-4">or</p>
                  <Button variant="outline" size="sm">
                    Click to Upload CSV File
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button>Next</Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
