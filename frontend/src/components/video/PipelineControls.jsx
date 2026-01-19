// import React, { useState } from 'react';
// import { Play, Square, Save, Download } from 'lucide-react';
// import { useWebSocket } from '../../hooks/useWebSocket';
// import { usePipelineStore } from '../../store/pipelineStore';
// import { usePipeline } from '../../hooks/usePipeline';
// import { useMetricsStore } from '../../store/metricsStore';

// const PipelineControls = () => {
//   const { startPipeline, stopPipeline } = useWebSocket();
//   const { blocks, pipelineStatus, setPipelineStatus } = usePipelineStore();
//   const { savePipeline } = usePipeline();
//   const { addLog } = useMetricsStore();
//   const [saving, setSaving] = useState(false);

//   const handleStart = () => {
//     if (blocks.length === 0) {
//       addLog('Add blocks to pipeline first', 'warning');
//       return;
//     }
//     startPipeline({ blocks });
//     setPipelineStatus('running');
//     addLog('Pipeline started successfully', 'success');
//   };

//   const handleStop = () => {
//     stopPipeline();
//     setPipelineStatus('idle');
//     addLog('Pipeline stopped', 'warning');
//   };

//   const handleSave = async () => {
//     const name = prompt('Enter pipeline name:');
//     if (!name) return;

//     setSaving(true);
//     try {
//       await savePipeline(name, '');
//     } catch (error) {
//       addLog('Failed to save pipeline', 'error');
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleReport = () => {
//     addLog('Generating PDF report...', 'info');
//     setTimeout(() => {
//       addLog('Report generated successfully', 'success');
//     }, 1500);
//   };

//   return (
//     <div className="p-4 border-b border-gray-800">
//       <h3 className="text-sm font-semibold text-gray-300 mb-3">Pipeline Controls</h3>
//       <div className="flex gap-2 mb-3">
//         {pipelineStatus === 'running' ? (
//           <button
//             onClick={handleStop}
//             className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2.5 rounded-lg transition-all font-medium"
//           >
//             <Square className="w-4 h-4" />
//             Stop Pipeline
//           </button>
//         ) : (
//           <button
//             onClick={handleStart}
//             disabled={blocks.length === 0}
//             className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-700 disabled:cursor-not-allowed px-4 py-2.5 rounded-lg transition-all font-medium"
//           >
//             <Play className="w-4 h-4" />
//             Start Pipeline
//           </button>
//         )}
//       </div>
      
//       <div className="grid grid-cols-2 gap-2">
//         <button
//           onClick={handleSave}
//           disabled={blocks.length === 0 || saving}
//           className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed px-3 py-2 rounded-lg transition-all text-sm"
//         >
//           <Save className="w-4 h-4" />
//           Save
//         </button>
//         <button
//           onClick={handleReport}
//           className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded-lg transition-all text-sm"
//         >
//           <Download className="w-4 h-4" />
//           Report
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PipelineControls;


import React, { useState } from 'react';
import { Play, Square, Save, Download } from 'lucide-react';
import { useWebSocket } from '../../hooks/useWebSocket';
import { usePipelineStore } from '../../store/pipelineStore';
import { usePipeline } from '../../hooks/usePipeline';
import { useMetricsStore } from '../../store/metricsStore';

const PipelineControls = () => {
  const { startPipeline, stopPipeline } = useWebSocket();
  const { blocks, pipelineStatus, setPipelineStatus } = usePipelineStore();
  const { savePipeline } = usePipeline();
  const { addLog } = useMetricsStore();
  const [saving, setSaving] = useState(false);

  const handleStart = () => {
    if (blocks.length === 0) {
      addLog('Add blocks to pipeline first', 'warning');
      return;
    }
    startPipeline({ blocks });
    setPipelineStatus('running');
    addLog('Pipeline started successfully', 'success');
  };

  const handleStop = () => {
    stopPipeline();
    setPipelineStatus('idle');
    addLog('Pipeline stopped', 'warning');
  };

  const handleSave = async () => {
    const name = prompt('Enter pipeline name:');
    if (!name) return;

    setSaving(true);
    try {
      await savePipeline(name, '');
    } catch (error) {
      addLog('Failed to save pipeline', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleReport = () => {
    addLog('Generating PDF report...', 'info');
    setTimeout(() => {
      addLog('Report generated successfully', 'success');
    }, 1500);
  };

  return (
    <div className="p-4 border-b border-gray-800">
      <h3 className="text-sm font-semibold text-gray-300 mb-3">Pipeline Controls</h3>
      <div className="flex gap-2 mb-3">
        {pipelineStatus === 'running' ? (
          <button
            onClick={handleStop}
            className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2.5 rounded-lg transition-all font-medium"
          >
            <Square className="w-4 h-4" />
            Stop Pipeline
          </button>
        ) : (
          <button
            onClick={handleStart}
            disabled={blocks.length === 0}
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-700 disabled:cursor-not-allowed px-4 py-2.5 rounded-lg transition-all font-medium"
          >
            <Play className="w-4 h-4" />
            Start Pipeline
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={handleSave}
          disabled={blocks.length === 0 || saving}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed px-3 py-2 rounded-lg transition-all text-sm"
        >
          <Save className="w-4 h-4" />
          Save
        </button>
        <button
          onClick={handleReport}
          className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded-lg transition-all text-sm"
        >
          <Download className="w-4 h-4" />
          Report
        </button>
      </div>
    </div>
  );
};

export default PipelineControls;