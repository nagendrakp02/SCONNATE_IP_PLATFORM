import React, { useState } from 'react';
import { Book, CheckCircle } from 'lucide-react';
import { useExperiments } from '../hooks/useExperiments';
import { DIFFICULTY_COLORS } from '../utils/constants';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Experiments = () => {
  const { experiments, loading } = useExperiments();
  const [currentExperiment, setCurrentExperiment] = useState(null);

  const loadExperiment = (experiment) => {
    setCurrentExperiment(experiment);
  };

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center h-full">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Book className="w-6 h-6 text-green-400" />
        Learning Experiments
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {experiments.map(exp => (
          <div
            key={exp._id || exp.id}
            className="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-blue-500 transition-all cursor-pointer group"
            onClick={() => loadExperiment(exp)}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold group-hover:text-blue-400 transition-colors">
                {exp.name}
              </h3>
              {exp.completed === exp.steps && (
                <CheckCircle className="w-5 h-5 text-green-400" />
              )}
            </div>
            
            <div className="flex items-center gap-3 mb-3 text-sm">
              <span className={`${DIFFICULTY_COLORS[exp.difficulty]} font-medium`}>
                {exp.difficulty}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400">{exp.duration}</span>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Progress</span>
                <span>{exp.completed}/{exp.steps} steps</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
                  style={{ width: `${(exp.completed / exp.steps) * 100}%` }}
                />
              </div>
            </div>

            <button className="w-full py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors">
              {exp.completed === 0 ? 'Start Experiment' : exp.completed === exp.steps ? 'Review' : 'Continue'}
            </button>
          </div>
        ))}
      </div>

      {currentExperiment && (
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Book className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{currentExperiment.name}</h3>
              <p className="text-sm text-gray-400">
                {currentExperiment.difficulty} • {currentExperiment.duration}
              </p>
            </div>
          </div>
          <p className="text-gray-300 mb-4">
            {currentExperiment.description || `This experiment will guide you through ${currentExperiment.steps} steps to master image processing concepts.`}
          </p>
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
              Start Learning
            </button>
            <button 
              onClick={() => setCurrentExperiment(null)}
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experiments;
