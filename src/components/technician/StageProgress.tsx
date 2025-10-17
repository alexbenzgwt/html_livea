import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { ArrowLeft, CheckCircle2, Clock, Camera, Video, Mic, Upload } from 'lucide-react';
import { Link } from "react-router-dom";

const stages = [
  {
    id: 1,
    name: 'Base Installation',
    status: 'approved',
    checklist: ['Foundation check', 'Base plate installation', 'Level verification'],
  },
  {
    id: 2,
    name: 'Guide Rails Setup',
    status: 'approved',
    checklist: ['Rail alignment', 'Bracket fixing', 'Plumb verification'],
  },
  {
    id: 3,
    name: 'Cabin Assembly',
    status: 'pending',
    checklist: ['Cabin frame assembly', 'Panel installation', 'Door mechanism setup', 'Interior fitting'],
  },
  {
    id: 4,
    name: 'Electrical Wiring',
    status: 'not_started',
    checklist: ['Main panel connection', 'Control wiring', 'Safety circuit', 'Testing'],
  },
  {
    id: 5,
    name: 'Final Testing',
    status: 'not_started',
    checklist: ['Load test', 'Speed test', 'Safety features', 'Documentation'],
  },
];

export function StageProgress() {
  const [expandedStage, setExpandedStage] = useState<number | null>(3);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] px-6 pt-12 pb-8 rounded-b-[32px] shadow-xl">
        <Link to="/technician/task-details">
          <button
            className="mb-6 w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
        </Link>
        <h1 className="text-white mb-2">Stage Progress</h1>
        <p className="text-white/80">Track installation milestones</p>
      </div>

      {/* Stage Cards */}
      <div className="px-6 mt-6 space-y-4">
        {stages.map((stage) => (
          <div
            key={stage.id}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
              stage.status === 'pending' ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            {/* Stage Header */}
            <button
              onClick={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
              className="w-full p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                {/* Status Icon */}
                {stage.status === 'approved' ? (
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                ) : stage.status === 'pending' ? (
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 border-4 border-white rounded-full"></div>
                  </div>
                )}

                <div className="text-left">
                  <h3 className="text-gray-800 mb-1">Stage {stage.id}: {stage.name}</h3>
                  {/* --- FIX IS HERE --- */}
                  <p className={
                    stage.status === 'approved' ? 'text-green-600' :
                    stage.status === 'pending' ? 'text-orange-600' :
                    'text-gray-500'
                  }>
                    {stage.status === 'approved' ? 'Approved' : stage.status === 'pending' ? 'In Progress' : 'Not Started'}
                  </p>
                </div>
              </div>

              <div className={`transform transition-transform ${
                expandedStage === stage.id ? 'rotate-180' : ''
              }`}>
                ▼
              </div>
            </button>

            {/* Expanded Content */}
            {expandedStage === stage.id && stage.status !== 'approved' && (
              <div className="px-6 pb-6 space-y-4">
                {/* Checklist */}
                <div className="space-y-3">
                  <h4 className="text-gray-700">Checklist</h4>
                  {stage.checklist.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <Checkbox
                        id={`${stage.id}-${index}`}
                        checked={checkedItems[`${stage.id}-${index}`] || false}
                        onCheckedChange={(checked) =>
                          setCheckedItems({ ...checkedItems, [`${stage.id}-${index}`]: checked as boolean })
                        }
                      />
                      <label htmlFor={`${stage.id}-${index}`} className="flex-1 text-gray-700 cursor-pointer">
                        {item}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Media Upload Buttons */}
                <div className="grid grid-cols-3 gap-3">
                  <button className="flex flex-col items-center gap-2 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <Camera className="w-6 h-6 text-blue-600" />
                    <span className="text-blue-700">Photo</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                    <Video className="w-6 h-6 text-purple-600" />
                    <span className="text-purple-700">Video</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                    <Mic className="w-6 h-6 text-orange-600" />
                    <span className="text-orange-700">Voice</span>
                  </button>
                </div>

                {/* Submit Button */}
                {stage.status === 'pending' && (
                  <Button className="w-full h-12 bg-green-500 hover:bg-green-600 rounded-xl">
                    <Upload className="w-4 h-4 mr-2" />
                    Submit Stage for Approval
                  </Button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}