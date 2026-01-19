// import React from 'react';
// import { useMetricsStore } from '../../store/metricsStore';
// import { LOG_LEVELS } from '../../utils/constants';

// const ActivityLogs = () => {
//   const { logs } = useMetricsStore();

//   return (
//     <div className="flex-1 overflow-hidden flex flex-col p-4">
//       <h3 className="text-sm font-semibold text-gray-300 mb-3">Activity Logs</h3>
//       <div className="flex-1 bg-gray-800/50 rounded-lg p-3 overflow-y-auto text-xs font-mono">
//         {logs.length === 0 ? (
//           <div className="text-gray-500 text-center py-8">No activity yet</div>
//         ) : (
//           logs.map((log, idx) => (
//             <div key={idx} className={`mb-1 ${LOG_LEVELS[log.level]}`}>
//               <span className="text-gray-600">[{log.timestamp}]</span> {log.message}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default ActivityLogs;


import React from 'react';
import { useMetricsStore } from '../../store/metricsStore';
import { LOG_LEVELS } from '../../utils/constants';

const ActivityLogs = () => {
  const { logs } = useMetricsStore();

  return (
    <div className="flex-1 overflow-hidden flex flex-col p-4">
      <h3 className="text-sm font-semibold text-gray-300 mb-3">Activity Logs</h3>
      <div className="flex-1 bg-gray-800/50 rounded-lg p-3 overflow-y-auto text-xs font-mono">
        {logs.length === 0 ? (
          <div className="text-gray-500 text-center py-8">No activity yet</div>
        ) : (
          logs.map((log, idx) => (
            <div key={idx} className={`mb-1 ${LOG_LEVELS[log.level]}`}>
              <span className="text-gray-600">[{log.timestamp}]</span> {log.message}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActivityLogs;