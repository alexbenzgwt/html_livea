import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { ArrowLeft, Building2, MapPin, Play, ArrowRight } from 'lucide-react';

interface TaskListProps {
  onBack: () => void;
  onNavigate: (screen: string) => void;
}

const tasks = [
  {
    id: 'PRJ-2025-001',
    clientName: 'Sunrise Residency',
    address: 'Block A, Beach Road, Vizag',
    progress: 60,
    status: 'In Progress',
    statusColor: 'bg-blue-500',
  },
  {
    id: 'PRJ-2025-002',
    clientName: 'Ocean View Apartments',
    address: 'Tower B, Rushikonda, Vizag',
    progress: 30,
    status: 'In Progress',
    statusColor: 'bg-blue-500',
  },
  {
    id: 'PRJ-2025-003',
    clientName: 'Green Park Towers',
    address: 'Block C, Madhurawada, Vizag',
    progress: 100,
    status: 'Completed',
    statusColor: 'bg-green-500',
  },
  {
    id: 'PRJ-2025-004',
    clientName: 'Tech City Complex',
    address: 'Phase 1, Gajuwaka, Vizag',
    progress: 0,
    status: 'Assigned',
    statusColor: 'bg-orange-500',
  },
];

export function TaskList({ onBack, onNavigate }: TaskListProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'inprogress' | 'completed'>('all');

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'inprogress') return task.status === 'In Progress';
    if (activeTab === 'completed') return task.status === 'Completed';
    return true;
  });

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
        <h1 className="text-white mb-2">My Tasks</h1>
        <p className="text-white/80">Assigned installation projects</p>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 -mt-4">
        <div className="bg-white rounded-2xl shadow-lg p-2 flex gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-3 rounded-xl transition-all ${
              activeTab === 'all'
                ? 'bg-[#2563eb] text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('inprogress')}
            className={`flex-1 py-3 rounded-xl transition-all ${
              activeTab === 'inprogress'
                ? 'bg-[#2563eb] text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex-1 py-3 rounded-xl transition-all ${
              activeTab === 'completed'
                ? 'bg-[#2563eb] text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Task Cards */}
      <div className="px-6 mt-6 space-y-4">
        {filteredTasks.map((task) => (
          <div key={task.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2563eb] to-[#1e40af] rounded-2xl flex items-center justify-center shadow-lg">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">{task.id}</p>
                    <h3 className="text-gray-800 mb-1">{task.clientName}</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{task.address}</span>
                    </div>
                  </div>
                </div>
                <Badge className={`${task.statusColor} text-white rounded-full px-3 py-1`}>
                  {task.status}
                </Badge>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-[#2563eb]">{task.progress}%</span>
                </div>
                <Progress value={task.progress} className="h-2" />
              </div>

              {/* Action Button */}
              <Button
                onClick={() => onNavigate('taskdetails')}
                className="w-full bg-[#2563eb] hover:bg-[#1e40af] rounded-xl h-12"
              >
                {task.status === 'Assigned' ? (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Start Task
                  </>
                ) : task.status === 'Completed' ? (
                  <>
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
