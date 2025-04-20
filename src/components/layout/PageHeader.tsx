import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  children?: ReactNode;
}

export default function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <div className="flex justify-between items-center p-6 border-b bg-white">
      <h1 className="text-xl font-medium">{title}</h1>
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V8M8 8V14M8 8H14M8 8H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" className='rounded-full' />
            <AvatarFallback>KS</AvatarFallback>
          </Avatar>
          <div className="text-xs text-gray-500">
            kadintstanton@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
