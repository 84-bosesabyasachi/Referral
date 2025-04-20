
import AISettings from '@/components/layout/AISettings';
import BusinessProfile from '@/components/layout/BusinessProfile';
import EmailPhoneSetup from '@/components/layout/EmailPhoneSetup';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/layout/PageHeader';
import SubscriptionUsage from '@/components/layout/SubscriptionUsage';
import UserProfile from '@/components/layout/UserProfile';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  return (
    <MainLayout>
      <PageHeader title="Settings" />

      <Tabs defaultValue="user-profile" className="space-y-4 space-x-12">
        <TabsList className="w-full border-b">
          <TabsTrigger value="user-profile">User Profile</TabsTrigger>
          <TabsTrigger value="business-profile">Business Profile</TabsTrigger>
          <TabsTrigger value="ai-settings">AI Settings</TabsTrigger>
          <TabsTrigger value="email-phone">Email & Phone Setup</TabsTrigger>
          <TabsTrigger value="subscription">Subscription & Usage</TabsTrigger>
        </TabsList>

        <TabsContent value="user-profile">
          <UserProfile />
        </TabsContent>

        <TabsContent value="business-profile">
          <BusinessProfile />
        </TabsContent>

        <TabsContent value="ai-settings">
          <AISettings />
        </TabsContent>

        <TabsContent value="email-phone">
          <EmailPhoneSetup />
        </TabsContent>

        <TabsContent value="subscription">
          <SubscriptionUsage />
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Settings;
