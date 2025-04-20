import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/layout/PageHeader';

export default function Help() {
  return (
    <MainLayout>
      <PageHeader title="Help and Support" />
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="text-xl font-medium mb-2">Help Center</h3>
          <p className="text-gray-500">
            This page would include FAQs, tutorials, and contact information for support.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}