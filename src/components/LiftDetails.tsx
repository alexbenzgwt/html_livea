import React from 'react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { ArrowLeft, Building2, Calendar, MapPin, Shield, Navigation } from 'lucide-react';
import { Link } from "react-router-dom";

export function LiftDetails() {
  const progressValue = 80;

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#005EB8] to-[#0077D4] px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        <Link to="/home">
          <button
            className="mb-6 w-10 h-10 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
        </Link>
        <h1 className="text-white mb-2">PLX-2000 Hydraulic</h1>
        <p className="text-white/80">Lift Installation Details</p>
      </div>

      {/* Content */}
      <div className="px-6 -mt-6 space-y-4">
        {/* Progress Card */}
        <div className="bg-white rounded-[20px] shadow-lg p-6">
          <h3 className="text-[#333333] mb-6">Installation Progress</h3>
          
          <div className="relative flex items-center justify-center mb-6">
            {/* Circular Progress */}
            <svg className="w-40 h-40 transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#F8F9FA"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 70}`}
                strokeDashoffset={`${2 * Math.PI * 70 * (1 - progressValue / 100)}`}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#005EB8" />
                  <stop offset="100%" stopColor="#0077D4" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[#005EB8]">{progressValue}%</span>
              <span className="text-[#333333]/60">Complete</span>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-[20px] shadow-lg p-5">
            <div className="w-12 h-12 bg-gradient-to-br from-[#005EB8] to-[#0077D4] rounded-xl flex items-center justify-center mb-3">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <p className="text-[#333333]/60 mb-1">Installation</p>
            <p className="text-[#333333]">80% Complete</p>
          </div>

          <div className="bg-white rounded-[20px] shadow-lg p-5">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFC107] to-[#FFD54F] rounded-xl flex items-center justify-center mb-3">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <p className="text-[#333333]/60 mb-1">Completion</p>
            <p className="text-[#333333]">Dec 2025</p>
          </div>
        </div>

        {/* Location Card */}
        <div className="bg-white rounded-[20px] shadow-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#005EB8] to-[#0077D4] rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#333333] mb-1">Location</h3>
              <p className="text-[#333333]/70">
                Sunrise Residency, Beach Road, Visakhapatnam, Andhra Pradesh 530002
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-40 bg-gradient-to-br from-[#005EB8]/5 to-[#005EB8]/10 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <MapPin className="w-16 h-16 text-[#005EB8]" />
              </div>
            </div>
            <p className="text-[#333333]/40 relative z-10">Map Preview</p>
          </div>

          <Button className="w-full bg-[#005EB8] hover:bg-[#004A94] rounded-xl h-11">
            <Navigation className="w-4 h-4 mr-2" />
            Get Directions
          </Button>
        </div>

        {/* Warranty Card */}
        <div className="bg-gradient-to-br from-[#005EB8] to-[#0077D4] rounded-[20px] shadow-lg p-6 text-white">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white mb-1">AMC / Warranty</h3>
              <p className="text-white/80 mb-3">
                Your lift is covered under comprehensive warranty and AMC
              </p>
              <div className="inline-block bg-white/20 backdrop-blur-lg px-4 py-2 rounded-lg">
                <p className="text-white">Valid till June 2027</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}