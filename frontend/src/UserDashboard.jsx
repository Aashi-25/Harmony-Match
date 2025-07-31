import React from 'react';
import { Shield, CheckCircle, AlertCircle, MapPin, Edit, Camera } from 'lucide-react';
import { ProtectiveShieldBackground } from './components';


const UserDashboard = () => {
  const matches = [
    { id: 1, name: 'Priya S.', score: 92, room: 'Room 102, Sunny Side', verified: true },
    { id: 2, name: 'Ananya R.', score: 85, room: 'Room 305, Quiet Corner', verified: false },
    { id: 3, name: 'Meera K.', score: 78, room: 'Room 201, City View', verified: true },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <ProtectiveShieldBackground />
      </div>

      {/* Dashboard Content */}
      <div className="relative z-10 max-w-7xl mx-auto p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            HarmonyMatch Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Welcome, Aashi!</span>
            <button className="p-2 rounded-full bg-pink-500/20 hover:bg-pink-500/40 transition">
              <Edit className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Matches Section */}
          <div className="col-span-2 space-y-4">
            <h2 className="text-xl font-semibold">Your Top Matches</h2>
            {matches.map((match) => (
              <div
                key={match.id}
                className="p-4 rounded-lg bg-slate-800/60 backdrop-blur-sm border border-pink-400/20 hover:border-pink-400/40 transition"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={`https://via.placeholder.com/50?text=${match.name[0]}`}
                        alt={match.name}
                        className="w-12 h-12 rounded-full"
                      />
                      {match.verified && (
                        <CheckCircle className="absolute -bottom-1 -right-1 w-5 h-5 text-emerald-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{match.name}</h3>
                      <p className="text-sm text-gray-300">{match.room}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-pink-400">{match.score}% Match</p>
                    <button className="mt-2 px-4 py-1 text-sm rounded-full bg-pink-500 hover:bg-pink-600 transition">
                      Accept Match
                    </button>
                  </div>
                </div>
                <button className="mt-2 text-sm text-purple-300 hover:underline flex items-center">
                  <Camera className="w-4 h-4 mr-1" /> View Virtual Tour
                </button>
              </div>
            ))}
            <button className="text-sm text-pink-300 hover:underline">Request Re-Matching</button>
          </div>

          {/* Profile & Notifications Section */}
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-slate-800/60 backdrop-blur-sm border border-purple-400/20">
              <h2 className="text-lg font-semibold mb-2">Your Preferences</h2>
              <ul className="text-sm space-y-1">
                <li>Sleep: Late Night</li>
                <li>Cleanliness: Moderate</li>
                <li>Social Energy: Low</li>
              </ul>
              <button className="mt-3 text-sm text-purple-300 hover:underline flex items-center">
                <Edit className="w-4 h-4 mr-1" /> Edit Preferences
              </button>
            </div>
            <div className="p-4 rounded-lg bg-slate-800/60 backdrop-blur-sm border border-purple-400/20">
              <h2 className="text-lg font-semibold mb-2">Application Status</h2>
              <p className="text-sm">Survey Completed: ✅</p>
              <p className="text-sm">Match Pending: ⏳</p>
              <p className="text-sm text-pink-300">Complete your profile for better matches!</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800/60 backdrop-blur-sm border border-pink-400/20">
              <h2 className="text-lg font-semibold mb-2 flex items-center">
                <Shield className="w-5 h-5 mr-2" /> Safety Tools
              </h2>
              <button className="text-sm text-purple-300 hover:underline">Report Issue</button>
              <p className="text-sm mt-2">Emergency Contact: Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;