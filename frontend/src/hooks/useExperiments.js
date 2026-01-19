// import { useState, useEffect } from 'react';
// import { experimentsAPI } from '../api/experiments.api';

// export const useExperiments = () => {
//   const [experiments, setExperiments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchExperiments();
//   }, []);

//   const fetchExperiments = async () => {
//     try {
//       setLoading(true);
//       const data = await experimentsAPI.getAllExperiments();
      
//       // Add mock progress data
//       const experimentsWithProgress = data.experiments.map((exp, idx) => ({
//         ...exp,
//         steps: exp.steps.length || 5,
//         completed: idx === 3 ? exp.steps.length : Math.floor(Math.random() * (exp.steps.length + 1))
//       }));
      
//       setExperiments(experimentsWithProgress);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { experiments, loading, error, refetch: fetchExperiments };
// };


import { useState, useEffect } from 'react';
import { experimentsAPI } from '../api/experiments.api';

export const useExperiments = () => {
  const [experiments, setExperiments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExperiments();
  }, []);

  const fetchExperiments = async () => {
    try {
      setLoading(true);
      const data = await experimentsAPI.getAllExperiments();
      
      // Add mock progress data
      const experimentsWithProgress = data.experiments.map((exp, idx) => ({
        ...exp,
        steps: exp.steps.length || 5,
        completed: idx === 3 ? exp.steps.length : Math.floor(Math.random() * (exp.steps.length + 1))
      }));
      
      setExperiments(experimentsWithProgress);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { experiments, loading, error, refetch: fetchExperiments };
};
