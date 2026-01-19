// import React from 'react';
// import { Camera, Activity, Zap, Cpu, LogOut } from 'lucide-react';
// import { useAuth } from '../../context/AuthContext';
// import { useMetricsStore } from '../../store/metricsStore';
// import { useWebSocket } from '../../hooks/useWebSocket';

// const Header = () => {
//   const { user, logout } = useAuth();
//   const { metrics } = useMetricsStore();
//   const { isConnected } = useWebSocket();

//   return (
//     <header className="bg-gray-900 border-b border-gray-800 px-6 py-3 sticky top-0 z-50">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
//             <Camera className="w-6 h-6" />
//           </div>
//           <div>
//             <h1 className="text-lg font-bold">S-CONNATE IP</h1>
//             <p className="text-xs text-gray-400">Image Processing Platform</p>
//           </div>
//         </div>

//         <div className="flex items-center gap-6">
//           <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-lg">
//             <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
//             <span className="text-sm text-gray-300">
//               {isConnected ? 'Connected' : 'Disconnected'}
//             </span>
//           </div>

//           <div className="hidden lg:flex items-center gap-3">
//             <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-lg">
//               <Activity className="w-4 h-4 text-green-400" />
//               <span className="text-sm font-medium">{metrics.fps.toFixed(1)} FPS</span>
//             </div>
//             <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-lg">
//               <Zap className="w-4 h-4 text-yellow-400" />
//               <span className="text-sm font-medium">{metrics.latency.toFixed(0)}ms</span>
//             </div>
//             <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-lg">
//               <Cpu className="w-4 h-4 text-blue-400" />
//               <span className="text-sm font-medium">{metrics.cpuUsage.toFixed(0)}%</span>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="hidden md:block text-right">
//               <div className="text-sm font-medium">{user?.fullName}</div>
//               <div className="text-xs text-gray-400 capitalize">{user?.role}</div>
//             </div>
//             <div className="relative group">
//               <button className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold">
//                 {user?.fullName?.charAt(0) || 'U'}
//               </button>
//               <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
//                 <div className="p-3 border-b border-gray-700">
//                   <div className="text-sm font-medium">{user?.fullName}</div>
//                   <div className="text-xs text-gray-400">{user?.email}</div>
//                 </div>
//                 <button
//                   onClick={logout}
//                   className="w-full px-4 py-2 text-left text-sm hover:bg-gray-700 flex items-center gap-2 text-red-400"
//                 >
//                   <LogOut className="w-4 h-4" />
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { Camera, Activity, Zap, Cpu, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useMetricsStore } from '../../store/metricsStore';
import { useWebSocket } from '../../hooks/useWebSocket';

const Header = () => {
  const { user, logout } = useAuth();
  const { metrics } = useMetricsStore();
  const { isConnected } = useWebSocket();

  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Camera className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold">S-CONNATE IP</h1>
            <p className="text-xs text-gray-400">Image Processing Platform</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-lg">
            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
            <span className="text-sm text-gray-300">
              {isConnected ? 'Connected' : 'Disconnected'}
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-lg">
              <Activity className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">{metrics.fps.toFixed(1)} FPS</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-lg">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">{metrics.latency.toFixed(0)}ms</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-lg">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium">{metrics.cpuUsage.toFixed(0)}%</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block text-right">
              <div className="text-sm font-medium">{user?.fullName}</div>
              <div className="text-xs text-gray-400 capitalize">{user?.role}</div>
            </div>
            <div className="relative group">
              <button className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold">
                {user?.fullName?.charAt(0) || 'U'}
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-3 border-b border-gray-700">
                  <div className="text-sm font-medium">{user?.fullName}</div>
                  <div className="text-xs text-gray-400">{user?.email}</div>
                </div>
                <button
                  onClick={logout}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-700 flex items-center gap-2 text-red-400"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;