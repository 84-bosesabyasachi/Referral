
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface AIAgentDialogProps {
  title: string;
  message: string;
  onSkip: () => void;
  onNext: () => void;
  totalSteps?: number;
  currentStep?: number;
}

export default function AIAgentDialog({ 
  title, 
  message, 
  onSkip, 
  onNext, 
  totalSteps, 
  currentStep 
}: AIAgentDialogProps) {
  return (
    <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12H16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8V16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="font-medium">{title}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm">{message}</p>
      </div>
      <div className="p-3 bg-gray-50 flex justify-between items-center border-t">
        <Button variant="ghost" size="sm" onClick={onSkip}>
          Skip
        </Button>
        <Button onClick={onNext}>
          {currentStep && totalSteps ? `Next (${currentStep}/${totalSteps})` : 'Next'}
        </Button>
      </div>
    </div>
  );
}