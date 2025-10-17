import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ArrowLeft, MapPin, Navigation, FileText, Wrench, Package, AlertCircle, MessageSquare } from 'lucide-react';
import { Link } from "react-router-dom";

export function TaskDetails() {
  const [checkedIn, setCheckedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] px-6 pt-12 pb-8 rounded-b-[32px] shadow-xl">
        <Link to="/technician/task-list">
          <button
            className="mb-6 w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
        </Link>
        <p className="text-white/80 mb-1">PRJ-2025-001</p>
        <h1 className="text-white mb-2">Sunrise Residency</h1>
      </div>

      {/* Client Details Card */}
      <div className="px-6 -mt-4 mb-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#1e40af] rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-800 mb-1">Location</h3>
              <p className="text-gray-600">
                Block A, Beach Road, Visakhapatnam, Andhra Pradesh 530002
              </p>
            </div>
          </div>

          <Button className="w-full bg-[#2563eb] hover:bg-[#1e40af] rounded-xl h-12">
            <Navigation className="w-4 h-4 mr-2" />
            Open in Maps
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-white rounded-2xl shadow-lg p-1 mb-6">
            <TabsTrigger
              value="overview"
              className="rounded-xl data-[state=active]:bg-[#2563eb] data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="stages"
              className="rounded-xl data-[state=active]:bg-[#2563eb] data-[state=active]:text-white"
            >
              Stages
            </TabsTrigger>
            <TabsTrigger
              value="material"
              className="rounded-xl data-[state=active]:bg-[#2563eb] data-[state=active]:text-white"
            >
              Material
            </TabsTrigger>
            <TabsTrigger
              value="issues"
              className="rounded-xl data-[state=active]:bg-[#2563eb] data-[state=active]:text-white"
            >
              Issues
            </TabsTrigger>
            <TabsTrigger
              value="chat"
              className="rounded-xl data-[state=active]:bg-[#2563eb] data-[state=active]:text-white"
            >
              Chat
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            {/* Lift Specifications */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-gray-800 mb-4">Lift Specifications</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Lift Type</span>
                  <span className="text-gray-800">PLX-2000 Hydraulic</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Capacity</span>
                  <span className="text-gray-800">8 Persons</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Speed</span>
                  <span className="text-gray-800">1.0 m/s</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Floors</span>
                  <span className="text-gray-800">Ground + 5</span>
                </div>
              </div>
            </div>

            {/* Blueprint */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-gray-800 mb-4">Blueprint</h3>
              <div className="w-full h-40 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-12 h-12 text-blue-400" />
              </div>
              <Button
                variant="outline"
                className="w-full border-[#2563eb] text-[#2563eb] hover:bg-blue-50 rounded-xl h-12"
              >
                Open Full View
              </Button>
            </div>

            {/* Check-In */}
            {!checkedIn ? (
              <Button
                onClick={() => setCheckedIn(true)}
                className="w-full h-14 bg-green-500 hover:bg-green-600 rounded-xl shadow-lg"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Check-In (Mark Arrival)
              </Button>
            ) : (
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 text-center">
                <p className="text-green-700">✓ Checked In Successfully</p>
                <p className="text-green-600">Location verified via GPS</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="stages">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <p className="text-gray-600 text-center py-8">
                Stage checklist available in Stage Progress screen
              </p>
              <Link to="/technician/stage-progress">
                <Button
                  className="w-full bg-[#2563eb] hover:bg-[#1e40af] rounded-xl h-12"
                >
                  <Wrench className="w-4 h-4 mr-2" />
                  Open Stage Progress
                </Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="material">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <p className="text-gray-600 text-center py-8">
                Request materials and parts for this project
              </p>
              <Link to="/technician/material-request">
                <Button
                  className="w-full bg-[#2563eb] hover:bg-[#1e40af] rounded-xl h-12"
                >
                  <Package className="w-4 h-4 mr-2" />
                  Material Request
                </Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="issues">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <p className="text-gray-600 text-center py-8">
                Report issues or pause work
              </p>
              <Link to="/technician/issue-report">
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 rounded-xl h-12"
                >
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Report Issue
                </Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="chat">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <p className="text-gray-600 text-center py-8">
                Chat with admin and support team
              </p>
              <Link to="/technician/chat-support">
                <Button
                  className="w-full bg-[#2563eb] hover:bg-[#1e40af] rounded-xl h-12"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Open Chat
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}