import { useState, useEffect } from 'react';
import { pipelinesAPI } from '../api/pipelines.api';
import { usePipelineStore } from '../store/pipelineStore';
import { useMetricsStore } from '../store/metricsStore';

export const usePipeline = () => {
  const [pipelines, setPipelines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { blocks, setBlocks } = usePipelineStore();
  const { addLog } = useMetricsStore();

  const fetchPipelines = async () => {
    try {
      setLoading(true);
      const data = await pipelinesAPI.getUserPipelines();
      setPipelines(data.pipelines);
    } catch (err) {
      setError(err.message);
      addLog('Failed to fetch pipelines', 'error');
    } finally {
      setLoading(false);
    }
  };

  const savePipeline = async (name, description) => {
    try {
      const data = await pipelinesAPI.createPipeline({
        name,
        description,
        blocks
      });
      addLog(`Pipeline "${name}" saved successfully`, 'success');
      await fetchPipelines();
      return data.pipeline;
    } catch (err) {
      addLog('Failed to save pipeline', 'error');
      throw err;
    }
  };

  const loadPipeline = async (pipelineId) => {
    try {
      const data = await pipelinesAPI.getPipeline(pipelineId);
      setBlocks(data.pipeline.blocks);
      addLog(`Pipeline "${data.pipeline.name}" loaded`, 'success');
      return data.pipeline;
    } catch (err) {
      addLog('Failed to load pipeline', 'error');
      throw err;
    }
  };

  const deletePipeline = async (pipelineId) => {
    try {
      await pipelinesAPI.deletePipeline(pipelineId);
      addLog('Pipeline deleted successfully', 'success');
      await fetchPipelines();
    } catch (err) {
      addLog('Failed to delete pipeline', 'error');
      throw err;
    }
  };

  useEffect(() => {
    fetchPipelines();
  }, []);

  return {
    pipelines,
    loading,
    error,
    savePipeline,
    loadPipeline,
    deletePipeline,
    refetch: fetchPipelines
  };
};