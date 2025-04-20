
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/layout/PageHeader';
import ChatBox from '@/components/ChatBox';
import AIAgentDialog from '@/components/AIAgentDialog';
import { Button } from '@/components/ui/button';
import { Share2, Users, ArrowRightLeft, Eye } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
}

export default function AIAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hey there! I'm (Bot Name) , your AI agent. This is where I live — your go-to space to ask anything, generate campaigns, or get help filling out forms. I'm always just a click away!",
      sender: 'ai',
    }
  ]);

  const [showAIDialog, setShowAIDialog] = useState(true);

  const handleSendMessage = (content: string) => {
    const newUserMessage: Message = {
      id: `user-${Date.now()}`,
      content,
      sender: 'user',
    };
    
    setMessages([...messages, newUserMessage]);
    
    // Mock AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: `ai-${Date.now()}`,
        content: "I'm processing your question. Let me help you with that!",
        sender: 'ai',
      };
      setMessages(prevMessages => [...prevMessages, aiResponse]);
    }, 1000);
  };

  return (
    <MainLayout>
      {showAIDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <AIAgentDialog 
            title="AI Agent" 
            message="Hey there! I'm (Bot Name), your AI agent. This is where I live — your go-to space to ask anything, generate campaigns, or get help filling out forms. I'm always just a click away!"
            onSkip={() => setShowAIDialog(false)}
            onNext={() => setShowAIDialog(false)}
            currentStep={1}
            totalSteps={5}
          />
        </div>
      )}
      <PageHeader title="AI Agent" />
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-120px)]">
        <div className="lg:col-span-2 h-full">
          <ChatBox 
            title="AI Agent"
            messages={messages}
            onSendMessage={handleSendMessage}
            placeholder="Ask me anything..."
          />
        </div>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="flex flex-col h-auto py-3 gap-2">
                <Share2 size={18} />
                <span className="text-xs">SEND REFERRAL</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-auto py-3 gap-2">
                <Users size={18} />
                <span className="text-xs">CREATE CAMPAIGN</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-auto py-3 gap-2">
                <ArrowRightLeft size={18} />
                <span className="text-xs">FOLLOW-UP</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-auto py-3 gap-2">
                <Eye size={18} />
                <span className="text-xs">VIEW REFERRAL</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
