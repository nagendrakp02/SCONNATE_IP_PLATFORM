import React from 'react';
import { Activity, Zap, Cpu } from 'lucide-react';

const MetricsCards = ({ metrics }) => {
  const cards = [
    {
      title: 'Frames Per Second',
      value: metrics.fps.toFixed(1),
      icon: Activity,
      color: 'green',
      label: 'REAL-TIME'
    },
    {
      title: 'Milliseconds',
      value: metrics.latency.toFixed(0),
      icon: Zap,
      color: 'yellow',
      label: 'LATENCY'
    },
    {
      title: 'Processor Usage',
      value: `${metrics.cpuUsage.toFixed(0)}%`,
      icon: Cpu,
      color: 'blue',
      label: 'CPU'
    },
    {
      title: 'RAM Usage',
      value: `${metrics.ramUsage.toFixed(0)}%`,
      icon: Activity,
      color: 'purple',
      label: 'MEMORY'
    }
  ];

  const getGradientClass = (color) => {
    const gradients = {
      green: 'from-green-900/20 to-green-800/20 border-green-700/50',
      yellow: 'from-yellow-900/20 to-yellow-800/20 border-yellow-700/50',
      blue: 'from-blue-900/20 to-blue-800/20 border-blue-700/50',
      purple: 'from-purple-900/20 to-purple-800/20 border-purple-700/50'
    };
    return gradients[color];
  };

  const getIconColor = (color) => {
    const colors = {
      green: 'text-green-400',
      yellow: 'text-yellow-400',
      blue: 'text-blue-400',
      purple: 'text-purple-400'
    };
    return colors[color];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`bg-gradient-to-br ${getGradientClass(card.color)} rounded-xl p-5 border`}
        >
          <div className="flex items-center justify-between mb-2">
            <card.icon className={`w-8 h-8 ${getIconColor(card.color)}`} />
            <span className={`text-xs ${getIconColor(card.color)} font-medium`}>
              {card.label}
            </span>
          </div>
          <div className="text-3xl font-bold mb-1">{card.value}</div>
          <div className="text-sm text-gray-400">{card.title}</div>
        </div>
      ))}
    </div>
  );
};

export default MetricsCards;
