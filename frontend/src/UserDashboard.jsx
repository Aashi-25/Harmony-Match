
import React, { useState, useRef, useEffect } from 'react';
import { Shield, CheckCircle, AlertCircle, MapPin, Edit, Camera, Bell, User } from 'lucide-react';
import { ProtectiveShieldBackground } from './components';
import { motion } from 'framer-motion';

const UserDashboard = () => {
  // Inject OmniDim web widget script on mount
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'omnidimension-web-widget';
    script.async = true;
    script.src = 'https://backend.omnidim.io/web_widget.js?secret_key=966db3fa32aad479ffe01cb14a4cf81b';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [matchStatuses, setMatchStatuses] = useState({});
  
  const matches = [
    { id: 1, name: 'Priya S.', score: 92, room: 'Room 102, Sunny Side', verified: true },
    { id: 2, name: 'Ananya R.', score: 85, room: 'Room 305, Quiet Corner', verified: false },
    { id: 3, name: 'Meera K.', score: 78, room: 'Room 201, City View', verified: true },
  ];

  const handleAcceptMatch = (matchId) => {
    setMatchStatuses(prev => ({
      ...prev,
      [matchId]: 'accepted'
    }));
  };

  const handleRejectMatch = (matchId) => {
    setMatchStatuses(prev => ({
      ...prev,
      [matchId]: 'rejected'
    }));
  };

  const getMatchStatus = (matchId) => {
    return matchStatuses[matchId] || 'pending';
  };

  useEffect(() => {
  function handleClickOutside(event) {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target) &&
      showNotifications
    ) {
      setShowNotifications(false);
    }
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target) &&
      showProfile
    ) {
      setShowProfile(false);
    }
  }
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [showNotifications, showProfile]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <ProtectiveShieldBackground />
      </div>

      {/* Dashboard Content */}
      <div className="relative z-10 max-w-7xl mx-auto p-6">
        {/* Navbar */}
         <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-xl shadow-lg z-20 border-b border-pink-400/20"
          >
        {/* <nav className="w-full bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 shadow-lg mb-6"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex items-center">
               <div className="flex items-center space-x-3 flex-shrink-0">
  <img
    src="/src/assets/logo.png"
    alt="Logo"
    className="h-10 w-auto"
  />
  <span className="text-2xl font-extrabold text-pink-400 tracking-tight drop-shadow-lg">HarmonyMatch</span>
</div>
          </div>

          {/* Right side - User actions */}
          <div className="flex items-center space-x-4">
            {/* Hi, Username */}
            <div className="text-white text-sm">
              Hi, <span className="font-medium">UserName</span>
            </div>

            {/* Bell Icon */}
                {/* <div className="relative"> */}
                <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="text-white hover:text-pink-200 p-2 rounded-full hover:bg-purple-600 transition-colors duration-200"
              >
                <Bell size={20} />
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <div className="px-4 py-2 text-sm text-gray-700">No new notifications</div>
                </div>
              )}
            </div>

            {/* Profile Picture */}
                {/* <div className="relative"> */}
                <div className="relative" ref={profileRef}>
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center justify-center w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full transition-colors duration-200"
              >
                <User size={18} className="text-white" />
              </button>
              {showProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </a>
                </div>
              )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-pink-200 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
          </div>
      </motion.nav>

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
                    {getMatchStatus(match.id) === 'pending' && (
                      <div className="flex space-x-2 mt-2">
                        <button 
                          onClick={() => handleAcceptMatch(match.id)}
                          className="px-4 py-1 text-sm rounded-full bg-green-500 hover:bg-green-600 transition text-white font-medium"
                        >
                          Accept
                        </button>
                        <button 
                          onClick={() => handleRejectMatch(match.id)}
                          className="px-4 py-1 text-sm rounded-full bg-red-500 hover:bg-red-600 transition text-white font-medium"
                        >
                          Reject
                    </button>
                      </div>
                    )}
                    {getMatchStatus(match.id) === 'accepted' && (
                      <div className="mt-2">
                        <span className="px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-400 border border-green-400/30">
                          ✓ Accepted
                        </span>
                      </div>
                    )}
                    {getMatchStatus(match.id) === 'rejected' && (
                      <div className="mt-2">
                        <span className="px-3 py-1 text-sm rounded-full bg-red-500/20 text-red-400 border border-red-400/30">
                          ✗ Rejected
                        </span>
                      </div>
                    )}
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
            {/* Match Summary */}
            <div className="p-4 rounded-lg bg-slate-800/60 backdrop-blur-sm border border-pink-400/20">
              <h2 className="text-lg font-semibold mb-3">Match Summary</h2>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">
                    {matches.filter(m => getMatchStatus(m.id) === 'pending').length}
                  </div>
                  <div className="text-gray-300">Pending</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {matches.filter(m => getMatchStatus(m.id) === 'accepted').length}
                  </div>
                  <div className="text-gray-300">Accepted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">
                    {matches.filter(m => getMatchStatus(m.id) === 'rejected').length}
                  </div>
                  <div className="text-gray-300">Rejected</div>
                </div>
              </div>
            </div>
            
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