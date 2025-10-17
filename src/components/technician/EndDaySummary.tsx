import React from 'react';
import { Button } from '../ui/button';
import { CheckCircle2, Clock, AlertCircle, Mic, LogOut } from 'lucide-react';
import { Link } from "react-router-dom";

export function EndDaySummary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] px-6 pt-12 pb-8 rounded-b-[32px] shadow-xl">
        <h1 className="text-white mb-2">End of Day Summary</h1>
        <p className="text-white/80">Review your work today</p>
      </div>

      {/* Summary Content */}
      <div className="px-6 mt-6 space-y-6">
        {/* Working Time */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-gray-800 mb-4">Working Time</h3>
          <div className="flex items-center justify-center py-6">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#2563eb] to-[#1e40af] rounded-full flex items-center justify-center mb-4 shadow-lg">
                <div className="text-center">
                  <div className="text-white">8h 30m</div>
                  <p className="text-white/80">Total Time</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-50 rounded-xl p-3">
                  <p className="text-blue-600">Check-In</p>
                  <p className="text-blue-800">9:00 AM</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-3">
                  <p className="text-blue-600">Check-Out</p>
                  <p className="text-blue-800">5:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks Completed */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-gray-800 mb-4">Tasks Completed Today</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <div className="flex-1">
                <p className="text-gray-800">Stage 3 - Cabin Assembly</p>
                <p className="text-gray-600">Sunrise Residency</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <div className="flex-1">
                <p className="text-gray-800">Safety Inspection</p>
                <p className="text-gray-600">Ocean View Apartments</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <div className="flex-1">
                <p className="text-gray-800">Material Quality Check</p>
                <p className="text-gray-600">Green Park Towers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pending Items */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-gray-800 mb-4">Pending / In Progress</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl">
              <Clock className="w-6 h-6 text-orange-600" />
              <div className="flex-1">
                <p className="text-gray-800">Stage 4 - Electrical Wiring</p>
                <p className="text-gray-600">Awaiting approval</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              <div className="flex-1">
                <p className="text-gray-800">Material Request</p>
                <p className="text-gray-600">Control panel wiring - Pending</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Summary */}
        <div className="bg-gradient-to-br from-[#2563eb] to-[#1e40af] rounded-2xl shadow-lg p-6 text-white">
          <h3 className="text-white mb-4">Today's Stats</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 text-center">
              <div className="text-white mb-1">3</div>
              <p className="text-white/80">Tasks Done</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 text-center">
              <div className="text-white mb-1">2</div>
              <p className="text-white/80">Pending</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 text-center">
              <div className="text-white mb-1">1</div>
              <p className="text-white/80">Approvals</p>
            </div>
          </div>
        </div>

        {/* Voice Summary */}
        <button className="w-full bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-center gap-3 text-gray-700">
            <Mic className="w-6 h-6 text-[#2563eb]" />
            <span>Record Voice Summary (Optional)</span>
          </div>
        </button>

        {/* Checkout Button */}
        <Link to="/technician-login">
          <Button
            className="w-full h-16 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-2xl shadow-xl"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Submit and Check-Out
          </Button>
        </Link>
      </div>
    </div>
  );
}