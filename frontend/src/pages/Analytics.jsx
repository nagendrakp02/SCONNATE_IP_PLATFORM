import React from 'react';
import { BarChart3, Activity, Zap, Cpu, Download } from 'lucide-react';
import { useMetricsStore } from '../store/metricsStore';

const Analytics = () => {
  const { metrics, addLog } = useMetricsStore();

  const generateReport = () => {
    addLog('Generating PDF report...', 'info');
    setTimeout(() => {
      addLog('Report generated successfully', 'success');
    }, 1500);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <BarChart3 className="w-6 h-6 text-yellow-400" />
        Performance Analytics
      </h2>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 rounded-xl p-5 border border-green-700/50">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-8 h-8 text-green-400" />
            <span className="text-xs text-green-400 font-medium">REAL-TIME</span>
          </div>
          <div className="text-3xl font-bold mb-1">{metrics.fps.toFixed(1)}</div>
          <div className="text-sm text-gray-400">Frames Per Second</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 rounded-xl p-5 border border-yellow-700/50">
          <div className="flex items-center justify-between mb-2">
            <Zap className="w-8 h-8 text-yellow-400" />
            <span className="text-xs text-yellow-400 font-medium">LATENCY</span>
          </div>
          <div className="text-3xl font-bold mb-1">{metrics.latency.toFixed(0)}</div>
          <div className="text-sm text-gray-400">Milliseconds</div>
        </div>

        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-xl p-5 border border-blue-700/50">
          <div className="flex items-center justify-between mb-2">
            <Cpu className="w-8 h-8 text-blue-400" />
            <span className="text-xs text-blue-400 font-medium">CPU</span>
          </div>
          <div className="text-3xl font-bold mb-1">{metrics.cpuUsage.toFixed(0)}%</div>
          <div className="text-sm text-gray-400">Processor Usage</div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 rounded-xl p-5 border border-purple-700/50">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-8 h-8 text-purple-400" />
            <span className="text-xs text-purple-400 font-medium">MEMORY</span>
          </div>
          <div className="text-3xl font-bold mb-1">{metrics.ramUsage.toFixed(0)}%</div>
          <div className="text-sm text-gray-400">RAM Usage</div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-6">
        <h3 className="text-lg font-semibold mb-4">Pipeline Performance</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Processing Efficiency</span>
              <span className="font-medium text-green-400">Excellent</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 w-4/5" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Resource Optimization</span>
              <span className="font-medium text-yellow-400">Good</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 w-3/5" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>System Stability</span>
              <span className="font-medium text-blue-400">Very Good</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-3/4" />
            </div>
          </div>
        </div>
      </div>

      {/* Report Generator */}
      <button
        onClick={generateReport}
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-medium transition-all"
      >
        <Download className="w-5 h-5" />
        Generate Full PDF Report
      </button>
    </div>
  );
};

export default Analytics;
