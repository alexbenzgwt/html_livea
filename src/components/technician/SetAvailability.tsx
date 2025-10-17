import React, { useState } from 'react';
import { Button } from '../ui/button';
import { CheckCircle2, Clock, MapPin, Coffee } from 'lucide-react';
import { Link } from "react-router-dom";

const statusOptions = [
  {
    id: 'available',
    label: 'Available',
    icon: CheckCircle2,
    color: 'bg-green-500',
    borderColor: 'border-green-500',
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
  },
  {
    id: 'busy',
    label: 'Busy',
    icon: Clock,
    color: 'bg-orange-500',
    borderColor: 'border-orange-500',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
  },
  {
    id: 'onsite',
    label: 'On-Site',
    icon: MapPin,
    color: 'bg-blue-500',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
  },
  {
    id: 'break',
    label: 'On Break',
    icon: Coffee,
    color: 'bg-gray-400',
    borderColor: 'border-gray-400',
    bgColor: 'bg-gray-50',
    textColor: 'text-gray-700',
  },
];

export function SetAvailability() {
  const [selectedStatus, setSelectedStatus] = useState<string>('available');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-[#1e3a8a] mb-3">Set Your Availability</h1>
          <p className="text-gray-600">
            Choose your current status to help manage assignments
          </p>
        </div>

        {/* Status Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {statusOptions.map((status) => (
            <button
              key={status.id}
              onClick={() => setSelectedStatus(status.id)}
              className={`relative p-8 rounded-2xl border-4 transition-all ${
                selectedStatus === status.id
                  ? `${status.borderColor} ${status.bgColor} shadow-xl scale-105`
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'
              }`}
            >
              {/* Selected Indicator */}
              {selectedStatus === status.id && (
                <div className="absolute top-4 right-4">
                  <div className={`w-8 h-8 ${status.color} rounded-full flex items-center justify-center`}>
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`w-20 h-20 ${status.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <status.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>

              {/* Label */}
              <h3 className={selectedStatus === status.id ? status.textColor : 'text-gray-700'}>
                {status.label}
              </h3>
            </button>
          ))}
        </div>

        {/* Confirm Button */}
        <Link to="/technician-dashboard">
          <Button
            className="w-full h-16 bg-[#2563eb] hover:bg-[#1e40af] rounded-2xl shadow-xl"
          >
            Confirm & Continue
          </Button>
        </Link>
      </div>
    </div>
  );
}