import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { ArrowLeft, Upload, Phone, AlertCircle, Clock, User } from 'lucide-react';

interface ComplaintsSupportProps {
  onBack: () => void;
}

const activeTickets = [
  {
    id: 'CMP-1247',
    type: 'Mechanical Issue',
    description: 'Door not closing properly',
    status: 'In Progress',
    statusColor: 'bg-[#FFC107] text-[#333333]',
    technician: 'Ramesh Kumar',
    eta: '2 days',
    createdDate: 'Oct 15, 2025',
  },
  {
    id: 'CMP-1189',
    type: 'Electrical',
    description: 'Cabin light flickering',
    status: 'Assigned',
    statusColor: 'bg-blue-500 text-white',
    technician: 'Suresh Reddy',
    eta: '1 day',
    createdDate: 'Oct 12, 2025',
  },
];

export function ComplaintsSupport({ onBack }: ComplaintsSupportProps) {
  const [selectedLift, setSelectedLift] = useState('');
  const [complaintType, setComplaintType] = useState('');
  const [description, setDescription] = useState('');

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
        <h1 className="text-white mb-2">Raise a Complaint</h1>
        <p className="text-white/80">We're here to help you</p>
      </div>

      {/* Content */}
      <div className="px-6 -mt-6 space-y-6">
        {/* Complaint Form */}
        <div className="bg-white rounded-[20px] shadow-lg p-6">
          <h3 className="text-[#333333] mb-5">New Complaint</h3>
          
          <div className="space-y-5">
            {/* Select Lift */}
            <div className="space-y-2">
              <Label htmlFor="lift" className="text-[#333333]">
                Select Lift
              </Label>
              <Select value={selectedLift} onValueChange={setSelectedLift}>
                <SelectTrigger className="h-12 rounded-xl border-[#005EB8]/20">
                  <SelectValue placeholder="Choose a lift" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plx2000">PLX-2000 Hydraulic</SelectItem>
                  <SelectItem value="plx3500">PLX-3500 Traction</SelectItem>
                  <SelectItem value="plx1800">PLX-1800 MRL</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Complaint Type */}
            <div className="space-y-2">
              <Label htmlFor="type" className="text-[#333333]">
                Complaint Type
              </Label>
              <Select value={complaintType} onValueChange={setComplaintType}>
                <SelectTrigger className="h-12 rounded-xl border-[#005EB8]/20">
                  <SelectValue placeholder="Select complaint type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mechanical">Mechanical</SelectItem>
                  <SelectItem value="electrical">Electrical</SelectItem>
                  <SelectItem value="others">Others</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-[#333333]">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Describe the issue in detail..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-32 rounded-xl border-[#005EB8]/20 resize-none"
              />
            </div>

            {/* Upload Image */}
            <div className="space-y-2">
              <Label className="text-[#333333]">Upload Image (Optional)</Label>
              <div className="border-2 border-dashed border-[#005EB8]/30 rounded-xl p-8 text-center hover:border-[#005EB8] transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-[#005EB8] mx-auto mb-2" />
                <p className="text-[#333333]/60">Click to upload or drag and drop</p>
              </div>
            </div>

            {/* Submit Button */}
            <Button className="w-full h-12 bg-gradient-to-r from-[#005EB8] to-[#0077D4] hover:from-[#004A94] hover:to-[#005EB8] rounded-xl">
              Submit Complaint
            </Button>
          </div>
        </div>

        {/* Active Tickets */}
        <div>
          <h3 className="text-[#333333] mb-4">Active Tickets</h3>
          <div className="space-y-3">
            {activeTickets.map((ticket) => (
              <div key={ticket.id} className="bg-white rounded-[20px] shadow-lg p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-5 h-5 text-[#005EB8]" />
                      <span className="text-[#005EB8]">{ticket.id}</span>
                    </div>
                    <h3 className="text-[#333333] mb-1">{ticket.type}</h3>
                    <p className="text-[#333333]/70">{ticket.description}</p>
                  </div>
                  <Badge className={`${ticket.statusColor} rounded-full px-3`}>
                    {ticket.status}
                  </Badge>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#005EB8]/10">
                  <div className="flex items-center gap-2 text-[#333333]/70">
                    <User className="w-4 h-4" />
                    <span>Technician: {ticket.technician}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#333333]/70">
                    <Clock className="w-4 h-4" />
                    <span>ETA: {ticket.eta}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Call Button */}
      <button className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#005EB8] to-[#0077D4] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50">
        <Phone className="w-7 h-7 text-white" />
      </button>
    </div>
  );
}
