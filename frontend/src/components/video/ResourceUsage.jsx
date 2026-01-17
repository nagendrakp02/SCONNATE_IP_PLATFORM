import React from 'react';
import { usePipelineStore } from '../../store/pipelineStore';
import { calculateTotalResources } from '../../utils/helpers';

const ResourceUsage = () => {
  const { blocks } = usePipelineStore();
  const { cpu: totalCPU, ram: totalRAM } = calculateTotalResources(blocks);

  return (
    <div className="p-4 border-b border-gray-800">
      <h3 className="text-sm font-semibold text-gray-300 mb-3">Resource Usage</h3>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400">CPU Usage</span>
            <span className="font-medium">{totalCPU}% / 100%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${
                totalCPU > 80 ? 'bg-red-500' : 
                totalCPU > 60 ? 'bg-yellow-500' : 
                'bg-green-500'
              }`}
              style={{ width: `${Math.min(totalCPU, 100)}%` }}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400">RAM Usage</span>
            <span className="font-medium">{totalRAM}MB / 512MB</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${
                totalRAM > 400 ? 'bg-red-500' : 
                totalRAM > 300 ? 'bg-yellow-500' : 
                'bg-blue-500'
              }`}
              style={{ width: `${Math.min((totalRAM / 512) * 100, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceUsage;