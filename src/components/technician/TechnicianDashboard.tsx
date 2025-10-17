import React from 'react';
import { Badge } from '../ui/badge';
import { ClipboardList, Phone, Package, MessageSquare, CheckCircle2, Clock, FileText } from 'lucide-react';

interface TechnicianDashboardProps {
  onNavigate: (screen: string) => void;
}

const quickAccessCards = [
  {
    id: 'tasks',
    title: 'My Tasks',
    icon: ClipboardList,
    color: 'from-blue-500 to-blue-600',
    screen: 'tasklist',
  },
  {
    id: 'calls',
    title: 'Service Calls',
    icon: Phone,
    color: 'from-green-500 to-green-600',
    screen: 'tasklist',
  },
  {
    id: 'materials',
    title: 'Material Requests',
    icon: Package,
    color: 'from-orange-500 to-orange-600',
    screen: 'materialrequest',
  },
  {
    id: 'chat',
    title: 'Chat Support',
    icon: MessageSquare,
    color: 'from-purple-500 to-purple-600',
    screen: 'chat',
  },
];

export function TechnicianDashboard({ onNavigate }: TechnicianDashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] px-6 pt-12 pb-8 rounded-b-[32px] shadow-xl">
        <h1 className="text-white mb-2">Hello, Ramesh Kumar</h1>
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-white">Available</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 space-y-6 mt-6">
        {/* Quick Access Cards */}
        <div>
          <h3 className="text-gray-700 mb-4">Quick Access</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickAccessCards.map((card) => (
              <button
                key={card.id}
                onClick={() => onNavigate(card.screen)}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <card.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-gray-800">{card.title}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* Statistics Cards */}
        <div>
          <h3 className="text-gray-700 mb-4">Today's Overview</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-xl p-4 shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <ClipboardList className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-gray-800 mb-1">5</div>
              <p className="text-gray-600">Tasks</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-gray-800 mb-1">3</div>
              <p className="text-gray-600">Completed</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-gray-800 mb-1">2</div>
              <p className="text-gray-600">Pending</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 mb-1">Stage 2 Approved</p>
                <p className="text-gray-500">Sunrise Residency - Block A</p>
              </div>
              <span className="text-gray-400">2h ago</span>
            </div>

            <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 mb-1">Material Dispatched</p>
                <p className="text-gray-500">Hydraulic pump - Request #1234</p>
              </div>
              <span className="text-gray-400">4h ago</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 mb-1">New Task Assigned</p>
                <p className="text-gray-500">Ocean View Apartments</p>
              </div>
              <span className="text-gray-400">5h ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
