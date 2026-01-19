import React from 'react';
import { Book, X, Play, CheckCircle, Circle } from 'lucide-react';

const ExperimentDetails = ({ experiment, onClose, onStart }) => {
  if (!experiment) return null;

  return (
    <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/50">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <Book className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{experiment.name}</h3>
            <p className="text-sm text-gray-400">
              {experiment.difficulty} • {experiment.duration}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <p className="text-gray-300 mb-4">
        {experiment.description || 
         `This experiment will guide you through ${experiment.steps} steps to master image processing concepts. Follow the instructions and complete each task to proceed.`}
      </p>

      {experiment.steps?.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Steps:</h4>
          <div className="space-y-2">
            {experiment.steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg"
              >
                <div className="flex-shrink-0 mt-0.5">
                  {idx < experiment.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-600" />
                  )}
                </div>
                <div>
                  <h5 className="font-medium text-sm">{step.title}</h5>
                  {step.description && (
                    <p className="text-xs text-gray-400 mt-1">{step.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={onStart}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors flex items-center gap-2"
        >
          <Play className="w-4 h-4" />
          {experiment.completed === 0 ? 'Start Learning' : 'Continue'}
        </button>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ExperimentDetails;

