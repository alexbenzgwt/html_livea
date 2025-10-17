import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Bell, Building2, MapPin, IndianRupee, Calendar, Wrench, Home, CreditCard, User, Phone, ChevronRight } from 'lucide-react';

interface HomeDashboardProps {
  onNavigate: (screen: string) => void;
}

interface LiftData {
  id: string;
  model: string;
  location: string;
  locationDetail: string;
  status: 'Active' | 'In Progress' | 'Completed';
  statusColor: string;
  progress: number;
  nextBill: string | null;
  billAmount: string | null;
  billDueDate: string | null;
  nextService: string;
  serviceType: string;
}

const lifts: LiftData[] = [
  {
    id: '1',
    model: 'PLX-2000 Hydraulic',
    location: 'Sunrise Residency',
    locationDetail: 'Block A',
    status: 'Active',
    statusColor: 'bg-green-500',
    progress: 80,
    nextBill: '₹1,50,000',
    billAmount: '₹1,50,000',
    billDueDate: '30 Oct 2025',
    nextService: '25 Oct 2025',
    serviceType: 'Routine Maintenance',
  },
  {
    id: '2',
    model: 'PLX-1500 Electric',
    location: 'Oceanview Towers',
    locationDetail: 'Block C',
    status: 'Completed',
    statusColor: 'bg-green-500',
    progress: 100,
    nextBill: null,
    billAmount: null,
    billDueDate: null,
    nextService: '10 Nov 2025',
    serviceType: 'Annual Inspection',
  },
  {
    id: '3',
    model: 'PLX-1800 Pneumatic',
    location: 'Green Valley Apartments',
    locationDetail: 'Tower B',
    status: 'In Progress',
    statusColor: 'bg-yellow-500',
    progress: 50,
    nextBill: '₹2,00,000',
    billAmount: '₹2,00,000',
    billDueDate: '15 Nov 2025',
    nextService: '5 Nov 2025',
    serviceType: 'Installation Check',
  },
];

const CircularProgress = ({ progress, size = 80 }: { progress: number; size?: number }) => {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Background Circle */}
      <svg className="transform -rotate-90" width={size} height={size}>
        <defs>
          <linearGradient id={`gradient-${progress}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#005EB8" />
            <stop offset="100%" stopColor="#0077D4" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="6"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#gradient-${progress})`}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500"
        />
      </svg>
      {/* Percentage Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[#005EB8]">{progress}%</span>
      </div>
    </div>
  );
};

export function HomeDashboard({ onNavigate }: HomeDashboardProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#005EB8] to-[#0077D4] px-6 pt-12 pb-6 shadow-xl rounded-b-[32px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center shadow-lg">
              <Building2 className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-white/90">Para Lifts</p>
              <h1 className="text-white">Hi, Rajesh!</h1>
            </div>
          </div>
          <button
            onClick={() => onNavigate('notifications')}
            className="relative w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-white/30 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            <Bell className="w-6 h-6 text-white" strokeWidth={2} />
            <div className="absolute top-2 right-2 w-3 h-3 bg-[#FFC107] rounded-full border-2 border-white shadow-lg"></div>
          </button>
        </div>
      </div>

      {/* My Lifts Section */}
      <div className="px-6 mt-6">
        <h2 className="text-[#333333] mb-4">My Lifts</h2>
        
        {/* Lifts Cards - Scrollable */}
        <div className="space-y-4">
          {lifts.map((lift) => (
            <div key={lift.id} className="bg-white rounded-[24px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Lift Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start gap-4">
                  {/* 3D Circular Progress */}
                  <div className="flex-shrink-0">
                    <CircularProgress progress={lift.progress} size={90} />
                  </div>

                  {/* Lift Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-[#333333]">{lift.model}</h3>
                      <Badge className={`${lift.statusColor} text-white rounded-full px-3 py-1 shadow-md`}>
                        {lift.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-[#333333]/70 mb-1">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{lift.location}, {lift.locationDetail}</span>
                    </div>
                    <p className="text-[#005EB8]">
                      {lift.progress}% Installed
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment & Service Info */}
              <div className="p-6 bg-gradient-to-br from-gray-50/50 to-transparent">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Next Payment */}
                  <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#FFC107] to-[#FFD54F] rounded-lg flex items-center justify-center shadow-md">
                        <IndianRupee className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                      <p className="text-[#333333]/60">Next Bill</p>
                    </div>
                    {lift.nextBill ? (
                      <>
                        <h3 className="text-[#333333] mb-1">{lift.billAmount}</h3>
                        <p className="text-[#333333]/60">Due: {lift.billDueDate?.split(' ').slice(0, 2).join(' ')}</p>
                      </>
                    ) : (
                      <p className="text-green-600">No pending bill</p>
                    )}
                  </div>

                  {/* Next Service */}
                  <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#005EB8] to-[#0077D4] rounded-lg flex items-center justify-center shadow-md">
                        <Wrench className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                      <p className="text-[#333333]/60">Service</p>
                    </div>
                    <h4 className="text-[#333333] mb-1">{lift.nextService.split(' ').slice(0, 2).join(' ')}</h4>
                    <p className="text-[#333333]/60 truncate">{lift.serviceType}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    onClick={() => onNavigate('details')}
                    className="bg-[#005EB8] hover:bg-[#004A94] rounded-xl h-11 shadow-lg hover:shadow-xl transition-all active:scale-95"
                  >
                    Details
                  </Button>
                  {lift.nextBill ? (
                    <Button
                      onClick={() => onNavigate('billing')}
                      className="bg-[#FFC107] hover:bg-[#FFB300] text-[#333333] rounded-xl h-11 shadow-lg hover:shadow-xl transition-all active:scale-95"
                    >
                      Pay Now
                    </Button>
                  ) : (
                    <Button
                      onClick={() => onNavigate('billing')}
                      variant="outline"
                      className="border-[#005EB8] text-[#005EB8] hover:bg-[#005EB8]/5 rounded-xl h-11"
                    >
                      Billing
                    </Button>
                  )}
                  <Button
                    onClick={() => onNavigate('services')}
                    variant="outline"
                    className="border-[#005EB8] text-[#005EB8] hover:bg-[#005EB8]/5 rounded-xl h-11"
                  >
                    Service
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#005EB8]/10 shadow-2xl">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="flex items-center justify-around">
            <button className="flex flex-col items-center gap-1 py-2 px-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#005EB8] to-[#0077D4] rounded-xl flex items-center justify-center shadow-lg">
                <Home className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xs text-[#005EB8]">Home</span>
            </button>
            <button
              onClick={() => onNavigate('billing')}
              className="flex flex-col items-center gap-1 py-2 px-3 group"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#005EB8]/10 transition-colors">
                <CreditCard className="w-5 h-5 text-[#333333]/50 group-hover:text-[#005EB8] transition-colors" strokeWidth={2} />
              </div>
              <span className="text-xs text-[#333333]/50 group-hover:text-[#005EB8] transition-colors">Billing</span>
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="flex flex-col items-center gap-1 py-2 px-3 group"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#005EB8]/10 transition-colors">
                <Wrench className="w-5 h-5 text-[#333333]/50 group-hover:text-[#005EB8] transition-colors" strokeWidth={2} />
              </div>
              <span className="text-xs text-[#333333]/50 group-hover:text-[#005EB8] transition-colors">Services</span>
            </button>
            <button
              onClick={() => onNavigate('support')}
              className="flex flex-col items-center gap-1 py-2 px-3 group"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#005EB8]/10 transition-colors">
                <Phone className="w-5 h-5 text-[#333333]/50 group-hover:text-[#005EB8] transition-colors" strokeWidth={2} />
              </div>
              <span className="text-xs text-[#333333]/50 group-hover:text-[#005EB8] transition-colors">Support</span>
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className="flex flex-col items-center gap-1 py-2 px-3 group"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#005EB8]/10 transition-colors">
                <User className="w-5 h-5 text-[#333333]/50 group-hover:text-[#005EB8] transition-colors" strokeWidth={2} />
              </div>
              <span className="text-xs text-[#333333]/50 group-hover:text-[#005EB8] transition-colors">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
