import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { ArrowLeft, Zap, Wrench, Package, UserX, MoreHorizontal, Camera, Send } from 'lucide-react';
import { Link } from "react-router-dom";

const issueTypes = [
  {
    id: 'site',
    label: 'Site Issue',
    icon: Wrench,
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 'power',
    label: 'Power Problem',
    icon: Zap,
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    id: 'material',
    label: 'Material Defect',
    icon: Package,
    color: 'from-red-500 to-red-600',
  },
  {
    id: 'client',
    label: 'Client Not Available',
    icon: UserX,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'other',
    label: 'Other',
    icon: MoreHorizontal,
    color: 'from-gray-500 to-gray-600',
  },
];

export function IssueReport() {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [workStatus, setWorkStatus] = useState<'pause' | 'continue'>('pause');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 pt-12 pb-8 rounded-b-[32px] shadow-xl">
        <Link to="/technician/task-details">
          <button
            className="mb-6 w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
        </Link>
        <h1 className="text-white mb-2">Report Issue</h1>
        <p className="text-white/80">Alert admin about problems</p>
      </div>

      {/* Issue Type Selection */}
      <div className="px-6 mt-6 space-y-6">
        <div>
          <h3 className="text-gray-700 mb-4">Select Issue Type</h3>
          <div className="grid grid-cols-2 gap-3">
            {issueTypes.map((issue) => (
              <button
                key={issue.id}
                onClick={() => setSelectedIssue(issue.id)}
                className={`p-6 rounded-2xl transition-all ${
                  selectedIssue === issue.id
                    ? 'ring-4 ring-offset-2 ring-orange-500 shadow-xl'
                    : 'shadow-lg hover:shadow-xl'
                } bg-white`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${issue.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  <issue.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <p className="text-gray-800">{issue.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Issue Details */}
        {selectedIssue && (
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5">
            <h3 className="text-gray-800">Issue Details</h3>

            {/* Photo Upload */}
            <button className="w-full h-32 border-2 border-dashed border-gray-300 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-colors flex flex-col items-center justify-center gap-2">
              <Camera className="w-8 h-8 text-gray-400" />
              <span className="text-gray-600">Capture Photo</span>
            </button>

            {/* Comment */}
            <Textarea
              placeholder="Describe the issue in detail..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-32 rounded-xl border-2 border-gray-200 resize-none"
            />
          </div>
        )}

        {/* Work Status Toggle */}
        {selectedIssue && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-gray-800 mb-4">Work Status</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setWorkStatus('pause')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  workStatus === 'pause'
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                }`}
              >
                <div className="mb-2">⏸️</div>
                <p>Pause Work</p>
              </button>
              <button
                onClick={() => setWorkStatus('continue')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  workStatus === 'continue'
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                }`}
              >
                <div className="mb-2">▶️</div>
                <p>Continue Work</p>
              </button>
            </div>
          </div>
        )}

        {/* Submit Button */}
        {selectedIssue && (
          <Button className="w-full h-14 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 rounded-xl shadow-lg">
            <Send className="w-5 h-5 mr-2" />
            Report to Admin
          </Button>
        )}
      </div>
    </div>
  );
}