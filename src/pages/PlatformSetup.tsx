
<<<<<<< HEAD
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
=======
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const PlatformSetup = () => {
  const [setupSteps] = useState([
    { title: "Set Up Business Profile", status: "Not Started" },
    { title: "Sync Your Customer Data", status: "Not Started" },
    { title: "Set Up AI Agent Rules", status: "Not Started" },
    { title: "Set Up First Campaign", status: "Not Started" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Platform Setup</h1>
          <div className="flex items-center gap-2">
            <button className="rounded-full p-2 hover:bg-gray-100">
              <img
                src="public/lovable-uploads/0cc62122-5e3a-44e3-b656-65315f6ae498.png"
                alt="User"
                className="h-8 w-8 rounded-full"
              />
            </button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[350px_1fr]">
          <Card className="p-4">
            <h2 className="mb-4 font-medium">Get Started with ReferralHub</h2>
            <p className="mb-6 text-sm text-gray-600">
              To get started with better referrals & rewards, complete your account setup in
              a few easy steps.
            </p>
            <div className="space-y-4">
              {setupSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full border-2 border-gray-300" />
                  <div>
                    <p className="text-sm font-medium">{step.title}</p>
                    <p className="text-xs text-gray-500">{step.status}</p>
>>>>>>> 9d7fe3185d264aec0040cfbb271fd38314bb0070
                  </div>
                </div>
              ))}
            </div>
<<<<<<< HEAD
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
=======
          </Card>

          <Card className="p-6">
            <h2 className="mb-6 text-xl font-semibold">Build Your Business Identity</h2>
            <p className="mb-8 text-gray-600">
              Help us tailor the referral experience by adding key details about your business
            </p>

            <div className="space-y-6">
              <div className="mb-6">
                <Label>Business Logo</Label>
                <button className="mt-2 rounded border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50">
                  Choose Image
                </button>
              </div>

              <div className="mb-6">
                <Label>Business Description</Label>
                <textarea
                  className="mt-2 h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Enter business description..."
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Label>Business Name</Label>
                  <Input placeholder="Enter business name" className="mt-2" />
                </div>
                <div>
                  <Label>Business Email</Label>
                  <Input placeholder="e.g. robert.fox@myemail.com" className="mt-2" />
                </div>
                <div>
                  <Label>Business Phone No.</Label>
                  <Input placeholder="Enter phone no." className="mt-2" />
                </div>
                <div>
                  <Label>Industry</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Services</Label>
                  <Input placeholder="Enter services..." className="mt-2" />
                </div>
                <div>
                  <Label>Products</Label>
                  <Input placeholder="Enter products..." className="mt-2" />
                </div>
                <div>
                  <Label>Company Size (Optional)</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>City</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="sf">San Francisco</SelectItem>
                      <SelectItem value="la">Los Angeles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>State</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="tx">Texas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Zip Code</Label>
                  <Input placeholder="Enter zip code" className="mt-2" />
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <Button className="bg-[#4F46E5] px-8">Next</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PlatformSetup;
>>>>>>> 9d7fe3185d264aec0040cfbb271fd38314bb0070
