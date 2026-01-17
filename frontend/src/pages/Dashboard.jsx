import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Welcome, {user?.email || 'User'}
        </h1>
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">
          Dashboard Ready ✅
        </h2>
        <p className="text-gray-400">
          Pipeline builder, blocks, and analytics will load here.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
