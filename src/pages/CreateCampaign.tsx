
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/layout/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Check, ChevronRight } from 'lucide-react';

export default function CreateCampaign() {
  const [tab, setTab] = useState('promoter');
  const [rewardType, setRewardType] = useState('discount');

  return (
    <MainLayout>
      <PageHeader title="Create & Manage Referral Campaigns" />
      <div className="p-6">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-xl font-medium">Create New Campaign</h2>
            <p className="text-sm text-gray-500">Choose a referral campaign to reward your users and grow your business.</p>
          </div>
          <Button variant="outline">Next</Button>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <Tabs defaultValue="promoter" onValueChange={setTab} className="w-full">
            <div className="border-b">
              <TabsList className="w-full justify-start p-0 h-auto bg-transparent">
                <TabsTrigger 
                  value="promoter"
                  className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-none border-b-2 data-[state=active]:border-blue-500 rounded-none px-4 py-3"
                >
                  Promoters Settings
                </TabsTrigger>
                <TabsTrigger 
                  value="leads"
                  className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-none border-b-2 data-[state=active]:border-blue-500 rounded-none px-4 py-3"
                >
                  Leads Settings
                </TabsTrigger>
              </TabsList>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Name</label>
                <Input 
                  type="text" 
                  placeholder="e.g. Summer Referral Special"
                  className="max-w-md"
                />
              </div>
              
              <div className="mb-8 flex gap-16 items-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
                      <Check size={14} />
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">Promoters Settings</span>
                </div>
                
                <div className="flex-1 h-[1px] bg-gray-200 relative">
                  <ChevronRight className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-gray-400" />
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center">
                      <Check size={14} />
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">Leads Settings</span>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <Label>Reward Type*</Label>
                  <div className="flex gap-2">
                    <Button 
                      variant={rewardType === 'discount' ? 'default' : 'outline'} 
                      className="justify-start min-w-[120px]"
                      onClick={() => setRewardType('discount')}
                    >
                      {rewardType === 'discount' ? (
                        <Check size={16} className="mr-2" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-2" />
                      )}
                      Discount
                    </Button>
                    <Button 
                      variant={rewardType === 'points' ? 'default' : 'outline'} 
                      className="justify-start min-w-[120px]"
                      onClick={() => setRewardType('points')}
                    >
                      {rewardType === 'points' ? (
                        <Check size={16} className="mr-2" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-2" />
                      )}
                      Points
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Reward Value*</Label>
                  <Input type="text" placeholder="e.g. 20% Discount" className="max-w-md" />
                </div>
                
                <div className="space-y-2">
                  <Label>Referral Message*</Label>
                  <Textarea 
                    placeholder="e.g. Share this with your friends and get $20 for each successful signup!" 
                    className="min-h-[80px] max-w-2xl" 
                  />
                </div>
                
                <div className="space-y-4">
                  <Label className="block mb-2">Follow-Up Strategy*</Label>
                  
                  <div>
                    <label className="flex items-center mb-2 cursor-pointer">
                      <input type="radio" name="followUp" className="mr-2" defaultChecked />
                      <span className="text-sm">SMS</span>
                    </label>
                    
                    <label className="flex items-center mb-2 cursor-pointer">
                      <input type="radio" name="followUp" className="mr-2" />
                      <span className="text-sm">Web Push</span>
                    </label>
                  </div>
                  
                  <div className="max-w-2xl space-y-4">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-1">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                      </div>
                      <div className="col-span-2">
                        <span className="text-sm">Day 1</span>
                      </div>
                      <div className="col-span-8">
                        <Input placeholder="Reminder message" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-1">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="col-span-2">
                        <span className="text-sm">Day 3</span>
                      </div>
                      <div className="col-span-8">
                        <Input placeholder="Follow-up message" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t">
                <h3 className="font-medium mb-4">Landing Page Preview</h3>
                <div className="aspect-video bg-gray-50 rounded-lg border flex items-center justify-center">
                  <div className="text-center max-w-lg">
                    <h3 className="text-lg font-semibold mb-2">Welcome back! You're promoting:</h3>
                    <h2 className="text-2xl font-bold mb-4">SnackNation Express</h2>
                    <p className="text-gray-600 mb-6">Every successful referral earns you 200 points!</p>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
                      Start Promoting & Earning
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <Button>Next</Button>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
}
