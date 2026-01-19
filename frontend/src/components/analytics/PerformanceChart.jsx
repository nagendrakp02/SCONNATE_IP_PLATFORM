import React from 'react';

const PerformanceChart = () => {
  const metrics = [
    { label: 'Processing Efficiency', value: 80, status: 'Excellent', color: 'from-green-500 to-blue-500' },
    { label: 'Resource Optimization', value: 60, status: 'Good', color: 'from-yellow-500 to-orange-500' },
    { label: 'System Stability', value: 75, status: 'Very Good', color: 'from-blue-500 to-purple-500' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Excellent': 'text-green-400',
      'Good': 'text-yellow-400',
      'Very Good': 'text-blue-400'
    };
    return colors[status] || 'text-gray-400';
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <h3 className="text-lg font-semibold mb-4">Pipeline Performance</h3>
      <div className="space-y-4">
        {metrics.map((metric, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm mb-2">
              <span>{metric.label}</span>
              <span className={`font-medium ${getStatusColor(metric.status)}`}>
                {metric.status}
              </span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${metric.color} transition-all duration-500`}
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceChart;
