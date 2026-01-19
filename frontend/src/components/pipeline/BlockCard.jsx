import React from 'react';
import { Trash2, Edit3, ChevronUp, ChevronDown } from 'lucide-react';
import { usePipelineStore } from '../../store/pipelineStore';
import { BLOCK_CATEGORIES } from '../../utils/constants';

const BlockCard = ({ block, index }) => {
  const { blocks, removeBlock, moveBlock, setSelectedBlock } = usePipelineStore();

  const getCategoryColor = (category) => {
    return BLOCK_CATEGORIES[category]?.color || 'bg-gray-500';
  };

  const blockCategory = Object.keys(BLOCK_CATEGORIES).find(cat => 
    block.type.includes(cat) || block.name.toLowerCase().includes(cat)
  ) || 'basic';

  return (
    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-blue-500 transition-all group">
      <div className="flex items-center gap-4">
        {/* Block Number */}
        <div className={`w-10 h-10 rounded-lg ${getCategoryColor(blockCategory)} flex items-center justify-center font-bold text-white flex-shrink-0`}>
          {index + 1}
        </div>

        {/* Block Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold">{block.name}</h4>
            <span className="px-2 py-0.5 bg-gray-800 rounded text-xs capitalize">
              {BLOCK_CATEGORIES[blockCategory]?.label || blockCategory}
            </span>
          </div>
          <div className="flex gap-3 mt-2 text-xs text-gray-500">
            <span>CPU: {block.cpu}%</span>
            <span>RAM: {block.ram}MB</span>
          </div>
        </div>

        {/* Block Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setSelectedBlock(block)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            title="Edit parameters"
          >
            <Edit3 className="w-4 h-4 text-gray-400" />
          </button>
          <button
            onClick={() => moveBlock(block.id, 'up')}
            disabled={index === 0}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            title="Move up"
          >
            <ChevronUp className="w-4 h-4 text-gray-400" />
          </button>
          <button
            onClick={() => moveBlock(block.id, 'down')}
            disabled={index === blocks.length - 1}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            title="Move down"
          >
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          <button
            onClick={() => removeBlock(block.id)}
            className="p-2 hover:bg-red-700 rounded-lg transition-colors text-red-400"
            title="Remove"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockCard;
