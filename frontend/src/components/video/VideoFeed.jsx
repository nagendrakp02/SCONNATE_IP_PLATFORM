import React, { useRef } from 'react';
import { Camera } from 'lucide-react';
import { useWebSocket } from '../../hooks/useWebSocket';
import { usePipelineStore } from '../../store/pipelineStore';

const VideoFeed = () => {
  const videoRef = useRef(null);
  const { isConnected } = useWebSocket();
  const { pipelineStatus } = usePipelineStore();

  return (
    <div className="p-4 border-b border-gray-800">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-300">Live Camera Feed</h3>
        <div className={`px-2 py-1 rounded text-xs font-medium ${
          pipelineStatus === 'running' ? 'bg-green-900 text-green-300' :
          pipelineStatus === 'error' ? 'bg-red-900 text-red-300' :
          'bg-gray-700 text-gray-300'
        }`}>
          {pipelineStatus.toUpperCase()}
        </div>
      </div>
      <div className="bg-black rounded-lg aspect-video flex items-center justify-center overflow-hidden">
        <img ref={videoRef} alt="Camera feed" className="w-full h-full object-contain" />
        {!isConnected && (
          <div className="text-gray-500 flex flex-col items-center gap-2 p-6 text-center">
            <Camera className="w-12 h-12 opacity-50" />
            <span className="text-sm">Connecting to camera...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoFeed;