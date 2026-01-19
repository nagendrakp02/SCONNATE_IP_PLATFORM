// import React from 'react';
// import { Settings, Book, BarChart3, Save } from 'lucide-react';

// const Navigation = ({ activeTab, setActiveTab }) => {
//   const tabs = [
//     { id: 'pipeline', label: 'Pipeline Builder', icon: Settings },
//     { id: 'experiment', label: 'Experiments', icon: Book },
//     { id: 'analytics', label: 'Analytics', icon: BarChart3 },
//     { id: 'saved', label: 'Saved Pipelines', icon: Save },
//   ];

//   return (
//     <nav className="bg-gray-900 border-b border-gray-800 px-6 overflow-x-auto">
//       <div className="flex gap-1 min-w-max">
//         {tabs.map(tab => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-all whitespace-nowrap ${
//               activeTab === tab.id
//                 ? 'border-blue-500 text-blue-400 bg-blue-500/10'
//                 : 'border-transparent text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
//             }`}
//           >
//             <tab.icon className="w-4 h-4" />
//             {tab.label}
//           </button>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;



import React from 'react';
import { Settings, Book, BarChart3, Save } from 'lucide-react';

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'pipeline', label: 'Pipeline Builder', icon: Settings },
    { id: 'experiment', label: 'Experiments', icon: Book },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'saved', label: 'Saved Pipelines', icon: Save },
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 overflow-x-auto">
      <div className="flex gap-1 min-w-max">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                : 'border-transparent text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;