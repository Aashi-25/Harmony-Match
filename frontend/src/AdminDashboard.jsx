import React from 'react';
import { Shield, Users, Home, AlertTriangle, BarChart2, CheckCircle } from 'lucide-react';
import { ProtectiveShieldBackground } from './components';


const AdminDashboard = () => {
  const users = [
    { id: 1, name: 'Aashi Goel', room: '102', matchScore: 92, verified: true, city: 'Bangalore' },
    { id: 2, name: 'Sangya Ojha', room: '305', matchScore: 85, verified: false, city: 'Delhi' },
    { id: 3, name: 'Kanishka Sharma', room: '201', matchScore: 78, verified: true, city: 'Bangalore' },
    { id: 4, name: 'Disha', room: '519', matchScore: 89, verified: true, city: 'Nagpur' },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <ProtectiveShieldBackground />
      </div>

      {/* Dashboard Content */}
      <div className="relative z-10 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-900/80 backdrop-blur-sm p-4 h-screen sticky top-0">
          <h1 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            Admin Panel
          </h1>
          <nav className="space-y-2">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-pink-500/20">
              <Users className="w-5 h-5 mr-2" /> Users
            </a>
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-pink-500/20">
              <Home className="w-5 h-5 mr-2" /> Rooms
            </a>
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-pink-500/20">
              <BarChart2 className="w-5 h-5 mr-2" /> Analytics
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-slate-800/60 backdrop-blur-sm border border-pink-400/20">
              <div className="flex items-center">
                <Users className="w-6 h-6 text-pink-400 mr-2" />
                <h3 className="font-semibold">Total Users</h3>
              </div>
              <p className="text-2xl font-bold">1,245</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800/60 backdrop-blur-sm border border-pink-400/20">
              <div className="flex items-center">
                <Home className="w-6 h-6 text-purple-400 mr-2" />
                <h3 className="font-semibold">Available Rooms</h3>
              </div>
              <p className="text-2xl font-bold">320</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800/60 backdrop-blur-sm border border-purple-400/20">
              <div className="flex items-center">
                <BarChart2 className="w-6 h-6 text-emerald-400 mr-2" />
                <h3 className="font-semibold">Avg Match Score</h3>
              </div>
              <p className="text-2xl font-bold">87%</p>
            </div>
          </div>

          {/* User Table */}
          <div className="rounded-lg bg-slate-800/60 backdrop-blur-sm border border-pink-400/20 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-pink-400/20">
                  <th className="p-4">Name</th>
                  <th className="p-4">Room</th>
                  <th className="p-4">Match Score</th>
                  <th className="p-4">Verified</th>
                  <th className="p-4">City</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-slate-700/20 hover:bg-pink-500/10">
                    <td className="p-4">{user.name}</td>
                    <td className="p-4">{user.room}</td>
                    <td className="p-4">{user.matchScore}%</td>
                    <td className="p-4">
                      {user.verified ? (
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-yellow-400" />
                      )}
                    </td>
                    <td className="p-4">{user.city}</td>
                    <td className="p-4 space-x-2">
                      <button className="px-3 py-1 text-sm rounded-full bg-purple-500 hover:bg-purple-600">
                        Reassign
                      </button>
                      <button className="px-3 py-1 text-sm rounded-full bg-pink-500 hover:bg-pink-600">
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Filters */}
          <div className="mt-4 flex space-x-4">
            <select className="p-2 rounded-lg bg-slate-800/60 border border-purple-400/20 text-white">
              <option>Filter by City</option>
              <option>Bangalore</option>
              <option>Delhi</option>
            </select>
            <select className="p-2 rounded-lg bg-slate-800/60 border border-purple-400/20 text-white">
              <option>Filter by Budget</option>
              <option>₹10,000 - ₹20,000</option>
              <option>₹20,000+</option>
            </select>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;