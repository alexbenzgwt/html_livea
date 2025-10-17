import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Building2, Lock, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [loginMode, setLoginMode] = useState<'password' | 'otp'>('password');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#005EB8] via-[#0077D4] to-[#005EB8]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759204078331-9817c4f20344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGV2YXRvciUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MDY2NjEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Logo and Title */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl">
            <Building2 className="w-12 h-12 text-white" strokeWidth={1.5} />
          </div>
          <h1 className="text-white mb-2">Welcome to Para Lifts</h1>
          <p className="text-white/80">Your Lift Management Partner</p>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
          {/* Toggle Login Mode */}
          <div className="flex gap-2 mb-8 p-1 bg-[#F8F9FA] rounded-xl">
            <button
              onClick={() => setLoginMode('password')}
              className={`flex-1 py-3 px-4 rounded-lg transition-all ${
                loginMode === 'password'
                  ? 'bg-white shadow-md text-[#005EB8]'
                  : 'text-[#333333]/60'
              }`}
            >
              Password
            </button>
            <button
              onClick={() => setLoginMode('otp')}
              className={`flex-1 py-3 px-4 rounded-lg transition-all ${
                loginMode === 'otp'
                  ? 'bg-white shadow-md text-[#005EB8]'
                  : 'text-[#333333]/60'
              }`}
            >
              OTP
            </button>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-[#333333]">
                Mobile Number
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#333333]/40" />
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="pl-11 h-12 rounded-xl border-[#005EB8]/20 focus:border-[#005EB8]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#333333]">
                {loginMode === 'password' ? 'Password' : 'OTP'}
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#333333]/40" />
                <Input
                  id="password"
                  type={loginMode === 'password' ? 'password' : 'text'}
                  placeholder={loginMode === 'password' ? 'Enter password' : 'Enter OTP'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 h-12 rounded-xl border-[#005EB8]/20 focus:border-[#005EB8]"
                />
              </div>
            </div>

            <Button
              onClick={onLogin}
              className="w-full h-12 bg-[#005EB8] hover:bg-[#004A94] rounded-xl shadow-lg"
            >
              Login
            </Button>

            <div className="text-center">
              <button className="text-[#005EB8] hover:underline">
                Forgot Password?
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-white/60">Powered by Para Lifts</p>
      </div>
    </div>
  );
}
