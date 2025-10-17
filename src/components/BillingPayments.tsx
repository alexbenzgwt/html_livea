import React, { useState } from 'react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { ArrowLeft, Wallet, Download, Calendar, CheckCircle2, IndianRupee } from 'lucide-react';

interface BillingPaymentsProps {
  onBack: () => void;
}

const paymentHistory = [
  { id: 1, amount: 100000, date: 'Aug 15, 2025', status: 'Completed', invoice: 'INV-2025-001' },
  { id: 2, amount: 150000, date: 'Jun 10, 2025', status: 'Completed', invoice: 'INV-2025-002' },
  { id: 3, amount: 200000, date: 'Apr 05, 2025', status: 'Completed', invoice: 'INV-2025-003' },
];

export function BillingPayments({ onBack }: BillingPaymentsProps) {
  const [partialPayment, setPartialPayment] = useState(false);

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
        <h1 className="text-white mb-2">Billing & Payments</h1>
        <p className="text-white/80">Manage your payments and invoices</p>
      </div>

      {/* Content */}
      <div className="px-6 -mt-6">
        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white rounded-[20px] shadow-lg p-1 mb-4">
            <TabsTrigger
              value="current"
              className="rounded-xl data-[state=active]:bg-[#005EB8] data-[state=active]:text-white"
            >
              Current Bill
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="rounded-xl data-[state=active]:bg-[#005EB8] data-[state=active]:text-white"
            >
              Payment History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-4">
            {/* Total Amount Card */}
            <div className="bg-gradient-to-br from-[#005EB8] to-[#0077D4] rounded-[20px] shadow-lg p-6 text-white">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                  <Wallet className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white/80 mb-1">Total Project Cost</p>
                  <h2 className="text-white">₹6,00,000</h2>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-white/20">
                  <span className="text-white/80">Amount Paid</span>
                  <span className="text-white">₹4,50,000</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/80">Pending Amount</span>
                  <span className="text-[#FFC107]">₹1,50,000</span>
                </div>
              </div>
            </div>

            {/* Last Payment Info */}
            <div className="bg-white rounded-[20px] shadow-lg p-6">
              <h3 className="text-[#333333] mb-4">Last Payment</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[#333333]">₹1,00,000</span>
                  </div>
                  <p className="text-[#333333]/70">Paid on Aug 15, 2025</p>
                </div>
              </div>
            </div>

            {/* Partial Payment Toggle */}
            <div className="bg-white rounded-[20px] shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="partial-payment" className="text-[#333333]">
                    Partial Payment
                  </Label>
                  <p className="text-[#333333]/60">Enable to pay in installments</p>
                </div>
                <Switch
                  id="partial-payment"
                  checked={partialPayment}
                  onCheckedChange={setPartialPayment}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full h-12 bg-[#005EB8] hover:bg-[#004A94] rounded-xl">
                <IndianRupee className="w-4 h-4 mr-2" />
                Make Payment
              </Button>
              <Button variant="outline" className="w-full h-12 border-[#005EB8] text-[#005EB8] hover:bg-[#005EB8]/5 rounded-xl">
                <Download className="w-4 h-4 mr-2" />
                Download Invoice
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-3">
            {paymentHistory.map((payment) => (
              <div key={payment.id} className="bg-white rounded-[20px] shadow-lg p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-[#333333] mb-1">₹{payment.amount.toLocaleString('en-IN')}</p>
                      <div className="flex items-center gap-2 text-[#333333]/60">
                        <Calendar className="w-4 h-4" />
                        <span>{payment.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                    {payment.status}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-[#005EB8]/10">
                  <span className="text-[#333333]/60">{payment.invoice}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#005EB8] hover:text-[#004A94] hover:bg-[#005EB8]/5"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
