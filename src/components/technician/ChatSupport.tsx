import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ArrowLeft, Send, Mic, User, Shield } from 'lucide-react';

interface ChatSupportProps {
  onBack: () => void;
}

const messages = [
  {
    id: 1,
    sender: 'admin',
    text: 'Hello Ramesh! How is the installation going?',
    time: '10:30 AM',
  },
  {
    id: 2,
    sender: 'technician',
    text: 'Hi! Installation is going well. Stage 2 completed.',
    time: '10:32 AM',
  },
  {
    id: 3,
    sender: 'admin',
    text: 'Great! Did you receive the hydraulic pump?',
    time: '10:33 AM',
  },
  {
    id: 4,
    sender: 'technician',
    text: 'Yes, received yesterday. Quality looks good.',
    time: '10:35 AM',
  },
  {
    id: 5,
    sender: 'admin',
    text: 'Perfect! Let me know if you need anything else.',
    time: '10:36 AM',
  },
];

const quickReplies = ['On Site', 'Need Help', 'Part Received'];

export function ChatSupport({ onBack }: ChatSupportProps) {
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] px-6 pt-12 pb-6 rounded-b-[32px] shadow-xl">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex items-center gap-3 flex-1">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-white">Admin Support</h2>
              <p className="text-white/80">Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 px-6 py-6 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'technician' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-end gap-2 max-w-[80%] ${
              msg.sender === 'technician' ? 'flex-row-reverse' : 'flex-row'
            }`}>
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.sender === 'admin' ? 'bg-blue-100' : 'bg-green-100'
              }`}>
                {msg.sender === 'admin' ? (
                  <Shield className="w-5 h-5 text-blue-600" />
                ) : (
                  <User className="w-5 h-5 text-green-600" />
                )}
              </div>

              {/* Message Bubble */}
              <div>
                <div className={`px-4 py-3 rounded-2xl ${
                  msg.sender === 'technician'
                    ? 'bg-[#2563eb] text-white rounded-br-sm'
                    : 'bg-white text-gray-800 rounded-bl-sm shadow-md'
                }`}>
                  <p>{msg.text}</p>
                </div>
                <p className={`text-xs text-gray-500 mt-1 px-1 ${
                  msg.sender === 'technician' ? 'text-right' : 'text-left'
                }`}>
                  {msg.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Replies */}
      <div className="px-6 pb-3">
        <div className="flex gap-2">
          {quickReplies.map((reply) => (
            <button
              key={reply}
              className="px-4 py-2 bg-white border-2 border-gray-200 rounded-full text-gray-700 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>

      {/* Input Bar */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex items-center gap-3">
          <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
            <Mic className="w-5 h-5 text-gray-600" />
          </button>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 h-12 rounded-full border-2 border-gray-200 px-5"
          />
          <button className="w-12 h-12 bg-[#2563eb] hover:bg-[#1e40af] rounded-full flex items-center justify-center transition-colors">
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
