import React from 'react';
import BlockLibrary from '../components/pipeline/BlockLibrary';
import PipelineCanvas from '../components/pipeline/PipelineCanvas';
import BlockEditor from '../components/pipeline/BlockEditor';
import { usePipelineStore } from '../store/pipelineStore';

const PipelineBuilder = () => {
  const { selectedBlock, setSelectedBlock } = usePipelineStore();

  const handleSaveBlock = (updatedBlock) => {
    // Update block in store
    console.log('Saving block:', updatedBlock);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-6">
        {/* Block Library - Left Side */}
        <div className="col-span-1">
          <BlockLibrary />
        </div>

        {/* Pipeline Canvas - Right Side */}
        <div className="col-span-3">
          <PipelineCanvas />
        </div>
      </div>

      {/* Block Editor Modal */}
      {selectedBlock && (
        <BlockEditor
          block={selectedBlock}
          onClose={() => setSelectedBlock(null)}
          onSave={handleSaveBlock}
        />
      )}
    </div>
  );
};

export default PipelineBuilder;
