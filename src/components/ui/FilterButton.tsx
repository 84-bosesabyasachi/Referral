
import { SlidersHorizontal } from 'lucide-react';

export default function FilterButton() {
  return (
    <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      <SlidersHorizontal size={16} className="mr-2" />
      Filter
    </button>
  );
}
