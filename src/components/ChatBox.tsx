
import { useState } from 'react';
import { Send } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
}

interface ChatBoxProps {
  title: string;
  messages: Message[];
  onSendMessage: (message: string) => void;
  buttonText?: string;
  onButtonClick?: () => void;
  placeholder?: string;
}

export default function ChatBox({
  title,
  messages,
  onSendMessage,
  buttonText,
  onButtonClick,
  placeholder = 'Ask me anything...'
}: ChatBoxProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full border rounded-lg bg-white overflow-hidden">
      <div className="border-b px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12H16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8V16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="font-medium">{title}</span>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {buttonText && onButtonClick && (
        <div className="p-4 border-t">
          <button
            onClick={onButtonClick}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            {buttonText}
          </button>
        </div>
      )}

      <div className="p-4 border-t">
        <div className="relative">
          <input
            type="text"
            className="w-full border rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-600"
            onClick={handleSend}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}