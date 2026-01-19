import React from 'react';
import { Save, FileText, Trash2, Clock } from 'lucide-react';
import { usePipeline } from '../hooks/usePipeline';
import { usePipelineStore } from '../store/pipelineStore';
import { getTimeAgo } from '../utils/helpers';
import LoadingSpinner from '../components/common/LoadingSpinner';

const SavedPipelines = () => {
  const { pipelines, loading, loadPipeline, deletePipeline } = usePipeline();
  const { setBlocks } = usePipelineStore();

  const handleLoad = async (pipelineId) => {
    try {
      const pipeline = await loadPipeline(pipelineId);
      // Switch to pipeline tab
      window.history.pushState({}, '', '/dashboard/pipeline');
      window.location.reload();
    } catch (error) {
      console.error('Error loading pipeline:', error);
    }
  };

  const handleDelete = async (pipelineId, pipelineName) => {
    if (window.confirm(`Are you sure you want to delete "${pipelineName}"?`)) {
      try {
        await deletePipeline(pipelineId);
      } catch (error) {
        console.error('Error deleting pipeline:', error);
      }
    }
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
        <Save className="w-6 h-6 text-blue-400" />
        Saved Pipelines
      </h2>

      {pipelines.length === 0 ? (
        <div className="bg-gray-900 rounded-xl p-12 text-center border border-gray-800">
          <FileText className="w-16 h-16 mx-auto mb-4 opacity-20" />
          <h3 className="text-xl font-semibold mb-2 text-gray-400">
            No saved pipelines yet
          </h3>
          <p className="text-gray-500 mb-4">
            Create and save a pipeline from the Pipeline Builder to see it here
          </p>
          <button
            onClick={() => {
              window.history.pushState({}, '', '/dashboard/pipeline');
              window.location.reload();
            }}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
          >
            Go to Pipeline Builder
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pipelines.map(pipeline => (
            <div
              key={pipeline._id}
              className="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-blue-500 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold group-hover:text-blue-400 transition-colors">
                  {pipeline.name}
                </h3>
                <FileText className="w-5 h-5 text-gray-600" />
              </div>
              
              {pipeline.description && (
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                  {pipeline.description}
                </p>
              )}

              <div className="text-sm text-gray-400 mb-3 space-y-1">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>{pipeline.blocks?.length || 0} blocks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{getTimeAgo(pipeline.updatedAt || pipeline.createdAt)}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleLoad(pipeline._id)}
                  className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors"
                >
                  Load
                </button>
                <button
                  onClick={() => handleDelete(pipeline._id, pipeline.name)}
                  className="px-3 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedPipelines;
