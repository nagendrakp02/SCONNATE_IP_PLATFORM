import React, { useState } from 'react';
import { Plus, Grid } from 'lucide-react';
import { useBlocks } from '../../hooks/useBlocks';
import { usePipelineStore } from '../../store/pipelineStore';
import { BLOCK_CATEGORIES } from '../../utils/constants';

const BlockLibrary = () => {
  const { blocks: availableBlocks, loading } = useBlocks();
  const { addBlock } = usePipelineStore();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'input', 'basic', 'ai', 'geometry'];

  const filteredBlocks = selectedCategory === 'all' 
    ? availableBlocks 
    : availableBlocks.filter(block => block.category === selectedCategory);

  const getCategoryColor = (category) => {
    return BLOCK_CATEGORIES[category]?.color || 'bg-gray-500';
  };

  const handleAddBlock = (block) => {
    addBlock({
      type: block.id,
      name: block.name,
      params: {},
      cpu: block.cpu,
      ram: block.ram
    });
  };

  if (loading) {
    return (
      <div className="p-4 text-center text-gray-400">
        Loading blocks...
      </div>
    );
  }

  return (
    <div className="bg-gray-900/50 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Grid className="w-5 h-5 text-blue-400" />
        Block Library
      </h2>

      {/* Category Filters */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Block List */}
      <div className="space-y-2 max-h-[calc(100vh-350px)] overflow-y-auto pr-2">
        {filteredBlocks.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No blocks found in this category
          </div>
        ) : (
          filteredBlocks.map(block => (
            <button
              key={block.id}
              onClick={() => handleAddBlock(block)}
              className="w-full text-left p-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 hover:border-blue-500 transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="font-medium text-sm group-hover:text-blue-400 transition-colors">
                  {block.name}
                </span>
                <Plus className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-xs text-gray-400 mb-2 line-clamp-2">
                {block.description}
              </p>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-2 h-2 rounded-full ${getCategoryColor(block.category)}`} />
                <span className="text-xs text-gray-500 capitalize">
                  {BLOCK_CATEGORIES[block.category]?.label || block.category}
                </span>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-0.5 bg-gray-900 rounded text-gray-400">
                  CPU: {block.cpu}%
                </span>
                <span className="px-2 py-0.5 bg-gray-900 rounded text-gray-400">
                  RAM: {block.ram}MB
                </span>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default BlockLibrary;
