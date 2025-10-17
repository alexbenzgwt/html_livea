import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { ArrowLeft, Package, Plus, Minus, Send, Clock, CheckCircle2, Truck } from 'lucide-react';

interface MaterialRequestProps {
  onBack: () => void;
}

const previousRequests = [
  {
    id: 'REQ-1234',
    material: 'Hydraulic Pump',
    quantity: 1,
    status: 'Dispatched',
    statusColor: 'bg-green-500',
    icon: Truck,
    date: 'Oct 15, 2025',
  },
  {
    id: 'REQ-1233',
    material: 'Guide Rail Brackets',
    quantity: 10,
    status: 'Approved',
    statusColor: 'bg-blue-500',
    icon: CheckCircle2,
    date: 'Oct 14, 2025',
  },
  {
    id: 'REQ-1232',
    material: 'Control Panel Wiring',
    quantity: 50,
    status: 'Pending',
    statusColor: 'bg-orange-500',
    icon: Clock,
    date: 'Oct 13, 2025',
  },
];

export function MaterialRequest({ onBack }: MaterialRequestProps) {
  const [material, setMaterial] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [remarks, setRemarks] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] px-6 pt-12 pb-8 rounded-b-[32px] shadow-xl">
        <button
          onClick={onBack}
          className="mb-6 w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white mb-2">Material Request</h1>
        <p className="text-white/80">Request parts and materials</p>
      </div>

      {/* Request Form */}
      <div className="px-6 mt-6 space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-gray-800 mb-5">New Request</h3>

          <div className="space-y-5">
            {/* Select Material */}
            <div className="space-y-2">
              <Label htmlFor="material" className="text-gray-700">
                Select Material / Part Name
              </Label>
              <Select value={material} onValueChange={setMaterial}>
                <SelectTrigger className="h-14 rounded-xl border-2 border-gray-200">
                  <SelectValue placeholder="Choose material" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hydraulic-pump">Hydraulic Pump</SelectItem>
                  <SelectItem value="guide-rails">Guide Rails</SelectItem>
                  <SelectItem value="brackets">Rail Brackets</SelectItem>
                  <SelectItem value="control-panel">Control Panel</SelectItem>
                  <SelectItem value="wiring">Electrical Wiring</SelectItem>
                  <SelectItem value="door-mechanism">Door Mechanism</SelectItem>
                  <SelectItem value="cabin-panels">Cabin Panels</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <Label className="text-gray-700">Quantity</Label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-14 h-14 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors"
                >
                  <Minus className="w-5 h-5 text-gray-700" />
                </button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="h-14 text-center rounded-xl border-2 border-gray-200"
                  min={1}
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-14 h-14 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors"
                >
                  <Plus className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Remarks */}
            <div className="space-y-2">
              <Label htmlFor="remarks" className="text-gray-700">
                Reason or Remarks
              </Label>
              <Textarea
                id="remarks"
                placeholder="Describe the need for this material..."
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="min-h-32 rounded-xl border-2 border-gray-200 resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button className="w-full h-14 bg-[#2563eb] hover:bg-[#1e40af] rounded-xl shadow-lg">
              <Send className="w-5 h-5 mr-2" />
              Send Request
            </Button>
          </div>
        </div>

        {/* Previous Requests */}
        <div>
          <h3 className="text-gray-700 mb-4">Previous Requests</h3>
          <div className="space-y-3">
            {previousRequests.map((request) => (
              <div key={request.id} className="bg-white rounded-2xl shadow-lg p-5">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${request.statusColor} rounded-xl flex items-center justify-center`}>
                    <request.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-gray-500 mb-1">{request.id}</p>
                        <h3 className="text-gray-800 mb-1">{request.material}</h3>
                        <p className="text-gray-600">Quantity: {request.quantity}</p>
                      </div>
                      <Badge className={`${request.statusColor} text-white rounded-full px-3`}>
                        {request.status}
                      </Badge>
                    </div>
                    <p className="text-gray-500">{request.date}</p>
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
