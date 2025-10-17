import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ArrowLeft, User, Phone, Mail, MapPin, Lock, LogOut, Camera } from 'lucide-react';

interface ProfileProps {
  onBack: () => void;
  onLogout: () => void;
}

export function Profile({ onBack, onLogout }: ProfileProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#005EB8] to-[#0077D4] px-6 pt-12 pb-24 rounded-b-[32px] shadow-lg">
        <button
          onClick={onBack}
          className="mb-6 w-10 h-10 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-white mb-2">Profile & Settings</h1>
        <p className="text-white/80">Manage your account information</p>
      </div>

      {/* Content */}
      <div className="px-6 -mt-16 space-y-6">
        {/* Avatar Section */}
        <div className="bg-white rounded-[20px] shadow-lg p-6">
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Avatar className="w-28 h-28 border-4 border-white shadow-xl">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-[#005EB8] to-[#0077D4] text-white text-3xl">
                  RK
                </AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#FFC107] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Camera className="w-5 h-5 text-white" />
              </button>
            </div>
            <h2 className="text-[#333333] mb-1">Rajesh Kumar</h2>
            <p className="text-[#333333]/60">Customer ID: CUS-2025-001</p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-[20px] shadow-lg p-6">
          <h3 className="text-[#333333] mb-5">Personal Information</h3>
          
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#333333]">
                Full Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#333333]/40" />
                <Input
                  id="name"
                  defaultValue="Rajesh Kumar"
                  className="pl-11 h-12 rounded-xl border-[#005EB8]/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#333333]">
                Contact Number
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#333333]/40" />
                <Input
                  id="phone"
                  defaultValue="+91 98765 43210"
                  className="pl-11 h-12 rounded-xl border-[#005EB8]/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#333333]">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#333333]/40" />
                <Input
                  id="email"
                  defaultValue="rajesh.kumar@email.com"
                  className="pl-11 h-12 rounded-xl border-[#005EB8]/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-[#333333]">
                Address
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-[#333333]/40" />
                <Input
                  id="address"
                  defaultValue="Beach Road, Visakhapatnam, AP 530002"
                  className="pl-11 h-12 rounded-xl border-[#005EB8]/20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-[20px] shadow-lg p-6">
          <h3 className="text-[#333333] mb-5">Security</h3>
          
          <Button
            variant="outline"
            className="w-full h-12 border-[#005EB8] text-[#005EB8] hover:bg-[#005EB8]/5 rounded-xl justify-start"
          >
            <Lock className="w-5 h-5 mr-3" />
            Change Password
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full h-12 bg-[#005EB8] hover:bg-[#004A94] rounded-xl">
            Save Changes
          </Button>
          
          <Button
            onClick={onLogout}
            variant="outline"
            className="w-full h-12 border-red-500 text-red-500 hover:bg-red-50 rounded-xl"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
