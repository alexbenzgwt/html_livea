import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Wrench, Calendar, CheckCircle2, Clock } from 'lucide-react';

interface ServicesMaintenanceProps {
  onBack: () => void;
}

const upcomingServices = [
  {
    id: 1,
    date: '25 Oct 2025',
    type: 'Routine Maintenance',
    status: 'Scheduled',
    statusColor: 'bg-[#FFC107] text-[#333333]',
    icon: Wrench,
  },
  {
    id: 2,
    date: '15 Dec 2025',
    type: 'AMC Check',
    status: 'Pending',
    statusColor: 'bg-orange-500 text-white',
    icon: Calendar,
  },
];

const pastServices = [
  {
    id: 1,
    date: '15 Aug 2025',
    type: 'Quarterly Service',
    status: 'Completed',
    technician: 'Ramesh Kumar',
  },
  {
    id: 2,
    date: '20 May 2025',
    type: 'Emergency Repair',
    status: 'Completed',
    technician: 'Suresh Reddy',
  },
  {
    id: 3,
    date: '10 Mar 2025',
    type: 'Routine Maintenance',
    status: 'Completed',
    technician: 'Ramesh Kumar',
  },
];

export function ServicesMaintenance({ onBack }: ServicesMaintenanceProps) {
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
        <h1 className="text-white mb-2">Services & Maintenance</h1>
        <p className="text-white/80">Track your service schedule</p>
      </div>

      {/* Content */}
      <div className="px-6 -mt-6 space-y-6">
        {/* Upcoming Services */}
        <div>
          <h3 className="text-[#333333] mb-4">Upcoming Services</h3>
          <div className="space-y-3">
            {upcomingServices.map((service) => (
              <div key={service.id} className="bg-white rounded-[20px] shadow-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#005EB8] to-[#0077D4] rounded-2xl flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-[#333333] mb-1">{service.type}</h3>
                        <div className="flex items-center gap-2 text-[#333333]/70">
                          <Calendar className="w-4 h-4" />
                          <span>{service.date}</span>
                        </div>
                      </div>
                      <Badge className={`${service.statusColor} rounded-full px-3`}>
                        {service.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Request Service Button */}
        <Button className="w-full h-12 bg-[#FFC107] hover:bg-[#FFB300] text-[#333333] rounded-xl shadow-lg">
          <Clock className="w-4 h-4 mr-2" />
          Request Early Service
        </Button>

        {/* Past Services */}
        <div>
          <h3 className="text-[#333333] mb-4">Past Services</h3>
          <div className="space-y-3">
            {pastServices.map((service) => (
              <div key={service.id} className="bg-white rounded-[20px] shadow-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#333333] mb-1">{service.type}</h3>
                    <div className="flex items-center gap-2 text-[#333333]/70 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{service.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#005EB8]/10 rounded-full flex items-center justify-center">
                        <span className="text-xs text-[#005EB8]">👤</span>
                      </div>
                      <span className="text-[#333333]/60">{service.technician}</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                    {service.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
