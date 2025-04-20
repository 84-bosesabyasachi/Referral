
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/layout/PageHeader';

export default function Settings() {
  return (
    <MainLayout>
      <PageHeader title="Settings" />
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="text-xl font-medium mb-2">Settings Page</h3>
          <p className="text-gray-500">
            This page would include account settings, notification preferences, and API integrations.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
