import React from 'react';
import { CheckCircle } from 'lucide-react';
import { DIFFICULTY_COLORS } from '../../utils/constants';

const ExperimentCard = ({ experiment, onSelect }) => {
  const progressPercentage = (experiment.completed / experiment.steps) * 100;
  const isCompleted = experiment.completed === experiment.steps;

  return (
    <div
      onClick={onSelect}
      className="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-blue-500 transition-all cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold group-hover:text-blue-400 transition-colors line-clamp-2">
          {experiment.name}
        </h3>
        {isCompleted && (
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 ml-2" />
        )}
      </div>
      
      <div className="flex items-center gap-3 mb-3 text-sm">
        <span className={`${DIFFICULTY_COLORS[experiment.difficulty]} font-medium`}>
          {experiment.difficulty}
        </span>
        <span className="text-gray-500">•</span>
        <span className="text-gray-400">{experiment.duration}</span>
      </div>

      <div className="mb-3">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Progress</span>
          <span>{experiment.completed}/{experiment.steps} steps</span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <button className="w-full py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors">
        {experiment.completed === 0 ? 'Start Experiment' : 
         isCompleted ? 'Review' : 'Continue'}
      </button>
    </div>
  );
};

export default ExperimentCard;
