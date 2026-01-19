import React from 'react';
import { Settings } from 'lucide-react';
import { usePipelineStore } from '../../store/pipelineStore';
import BlockCard from './BlockCard';

const PipelineCanvas = () => {
  const { blocks, clearBlocks } = usePipelineStore();

  return (
    <div className="bg-gray-900/50 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Settings className="w-5 h-5 text-purple-400" />
          Pipeline Canvas
          <span className="text-sm text-gray-500">({blocks.length} blocks)</span>
        </h2>
        {blocks.length > 0 && (
          <button
            onClick={clearBlocks}
            className="px-3 py-1.5 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg text-sm transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {blocks.length === 0 ? (
        <div className="bg-gray-900 rounded-xl p-12 text-center border-2 border-dashed border-gray-800">
          <Settings className="w-16 h-16 mx-auto mb-4 opacity-20" />
          <h3 className="text-xl font-semibold mb-2 text-gray-400">
            No blocks in pipeline
          </h3>
          <p className="text-gray-500 mb-4">
            Add blocks from the library to start building your image processing pipeline
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <span>Tip: Click the + button on any block to add it to your pipeline</span>
          </div>
        </div>
      ) : (
        <div className="space-y-3 max-h-[calc(100vh-250px)] overflow-y-auto pr-2">
          {blocks.map((block, idx) => (
            <React.Fragment key={block.id}>
              <BlockCard block={block} index={idx} />
              {idx < blocks.length - 1 && (
                <div className="flex justify-center my-2">
                  <div className="text-gray-600 text-2xl">↓</div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default PipelineCanvas;
