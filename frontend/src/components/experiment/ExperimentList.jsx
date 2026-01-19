import React from 'react';
import ExperimentCard from './ExperimentCard';

const ExperimentList = ({ experiments, onSelectExperiment }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {experiments.map(experiment => (
        <ExperimentCard
          key={experiment._id || experiment.id}
          experiment={experiment}
          onSelect={() => onSelectExperiment(experiment)}
        />
      ))}
    </div>
  );
};

export default ExperimentList;