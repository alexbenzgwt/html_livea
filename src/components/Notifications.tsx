import React from 'react';
import { ArrowLeft, Bell, Calendar, CheckCircle2, AlertCircle, IndianRupee } from 'lucide-react';

interface NotificationsProps {
  onBack: () => void;
}

const notifications = [
  {
    id: 1,
    type: 'service',
    icon: Calendar,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Service Scheduled',
    message: 'Next service scheduled for 25 Oct 2025',
    time: '2 hours ago',
    read: false,
  },
  {
    id: 2,
    type: 'payment',
    icon: IndianRupee,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Payment Received',
    message: 'Your payment of ₹1,00,000 received successfully',
    time: '1 day ago',
    read: false,
  },
  {
    id: 3,
    type: 'complaint',
    icon: CheckCircle2,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Complaint Resolved',
    message: 'Complaint CMP-1247 resolved successfully',
    time: '2 days ago',
    read: true,
  },
  {
    id: 4,
    type: 'alert',
    icon: AlertCircle,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'Maintenance Due',
    message: 'Routine maintenance is due in 7 days',
    time: '3 days ago',
    read: true,
  },
  {
    id: 5,
    type: 'service',
    icon: CheckCircle2,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Service Completed',
    message: 'Quarterly service completed on 15 Aug 2025',
    time: '5 days ago',
    read: true,
  },
  {
    id: 6,
    type: 'payment',
    icon: Calendar,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Payment Reminder',
    message: 'Pending payment of ₹1,50,000. Pay now to avoid delay',
    time: '1 week ago',
    read: true,
  },
];

export function Notifications({ onBack }: NotificationsProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#005EB8] to-[#0077D4] px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        <button
          onClick={onBack}
          className="mb-6 w-10 h-10 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center">
            <Bell className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-white">Notifications</h1>
        </div>
        <p className="text-white/80">Stay updated with all activities</p>
      </div>

      {/* Content */}
      <div className="px-6 -mt-6 space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-[20px] shadow-lg p-5 ${
              !notification.read ? 'border-l-4 border-[#005EB8]' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 ${notification.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <notification.icon className={`w-6 h-6 ${notification.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className={`text-[#333333] ${!notification.read ? '' : 'opacity-70'}`}>
                    {notification.title}
                  </h3>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-[#005EB8] rounded-full flex-shrink-0 mt-2"></div>
                  )}
                </div>
                <p className={`text-[#333333]/70 mb-2 ${!notification.read ? '' : 'opacity-70'}`}>
                  {notification.message}
                </p>
                <span className="text-[#333333]/50">{notification.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if needed) */}
      {notifications.length === 0 && (
        <div className="px-6 -mt-6 flex flex-col items-center justify-center py-20">
          <div className="w-24 h-24 bg-[#005EB8]/10 rounded-full flex items-center justify-center mb-4">
            <Bell className="w-12 h-12 text-[#005EB8]/40" />
          </div>
          <h3 className="text-[#333333] mb-2">No Notifications</h3>
          <p className="text-[#333333]/60 text-center">
            You're all caught up! Check back later for updates.
          </p>
        </div>
      )}
    </div>
  );
}
