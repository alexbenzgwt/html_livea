import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Building2, Phone } from 'lucide-react';

interface TechnicianLoginProps {
  onLogin: () => void;
}

export function TechnicianLogin({ onLogin }: TechnicianLoginProps) {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOTP = () => {
    setStep('otp');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#1e3a8a] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-white rounded-3xl shadow-2xl">
            <Building2 className="w-12 h-12 text-[#2563eb]" strokeWidth={2} />
          </div>
          <h1 className="text-white mb-2">Para Lifts</h1>
          <h2 className="text-white/90">Technician Login</h2>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
          {step === 'phone' ? (
            <div className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="phone" className="text-[#1e3a8a]">
                  Phone Number or Technician ID
                </Label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="pl-12 h-14 rounded-xl border-2 border-gray-200 focus:border-[#2563eb]"
                  />
                </div>
              </div>

              <Button
                onClick={handleSendOTP}
                className="w-full h-14 bg-[#2563eb] hover:bg-[#1e40af] rounded-xl shadow-lg"
              >
                Send OTP
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="otp" className="text-[#1e3a8a]">
                  Enter OTP
                </Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="h-14 rounded-xl border-2 border-gray-200 focus:border-[#2563eb] text-center tracking-widest"
                  maxLength={6}
                />
              </div>

              <Button
                onClick={onLogin}
                className="w-full h-14 bg-[#2563eb] hover:bg-[#1e40af] rounded-xl shadow-lg"
              >
                Login to Dashboard
              </Button>

              <button
                onClick={() => setStep('phone')}
                className="w-full text-[#2563eb] hover:underline"
              >
                Change Phone Number
              </button>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <p className="text-white/80 text-center px-4">
          By logging in, you confirm your duty status
        </p>
      </div>
    </div>
  );
}
