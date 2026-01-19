// import { create } from 'zustand';

// export const usePipelineStore = create((set) => ({
//   blocks: [],
//   pipelineStatus: 'idle',
//   selectedBlock: null,

//   addBlock: (block) => set((state) => ({
//     blocks: [...state.blocks, {
//       ...block,
//       id: `${block.type}_${Date.now()}`,
//       position: state.blocks.length
//     }]
//   })),

//   removeBlock: (blockId) => set((state) => ({
//     blocks: state.blocks.filter(b => b.id !== blockId)
//   })),

//   moveBlock: (blockId, direction) => set((state) => {
//     const index = state.blocks.findIndex(b => b.id === blockId);
//     if (index === -1) return state;

//     const newBlocks = [...state.blocks];
//     const newIndex = direction === 'up' ? index - 1 : index + 1;

//     if (newIndex >= 0 && newIndex < newBlocks.length) {
//       [newBlocks[index], newBlocks[newIndex]] = [newBlocks[newIndex], newBlocks[index]];
//     }

//     return { blocks: newBlocks };
//   }),

//   clearBlocks: () => set({ blocks: [] }),

//   setBlocks: (blocks) => set({ blocks }),

//   setPipelineStatus: (status) => set({ pipelineStatus: status }),

//   setSelectedBlock: (block) => set({ selectedBlock: block })
// }));


import { create } from 'zustand';

export const usePipelineStore = create((set) => ({
  blocks: [],
  pipelineStatus: 'idle',
  selectedBlock: null,

  addBlock: (block) =>
    set((state) => ({
      blocks: [
        ...state.blocks,
        {
          ...block,
          id: `${block.type}_${Date.now()}`,
          position: state.blocks.length
        }
      ]
    })),

  removeBlock: (blockId) =>
    set((state) => ({
      blocks: state.blocks.filter((b) => b.id !== blockId)
    })),

  moveBlock: (blockId, direction) =>
    set((state) => {
      const index = state.blocks.findIndex((b) => b.id === blockId);
      if (index === -1) return state;

      const newBlocks = [...state.blocks];
      const newIndex = direction === 'up' ? index - 1 : index + 1;

      if (newIndex >= 0 && newIndex < newBlocks.length) {
        [newBlocks[index], newBlocks[newIndex]] = [
          newBlocks[newIndex],
          newBlocks[index]
        ];
      }

      return { blocks: newBlocks };
    }),

  clearBlocks: () => set({ blocks: [] }),

  setBlocks: (blocks) => set({ blocks }),

  setPipelineStatus: (status) =>
    set({ pipelineStatus: status || 'idle' }),

  setSelectedBlock: (block) =>
    set({ selectedBlock: block || null })
}));
