// export const formatDate = (date) => {
//   return new Date(date).toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric'
//   });
// };

// export const getTimeAgo = (date) => {
//   const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  
//   if (seconds < 60) return 'Just now';
//   if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
//   if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
//   return `${Math.floor(seconds / 86400)} days ago`;
// };

// export const calculateTotalResources = (blocks) => {
//   return blocks.reduce(
//     (acc, block) => ({
//       cpu: acc.cpu + (block.cpu || 0),
//       ram: acc.ram + (block.ram || 0)
//     }),
//     { cpu: 0, ram: 0 }
//   );
// };


export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const getTimeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  
  if (seconds < 60) return 'Just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  return `${Math.floor(seconds / 86400)} days ago`;
};

export const calculateTotalResources = (blocks) => {
  return blocks.reduce(
    (acc, block) => ({
      cpu: acc.cpu + (block.cpu || 0),
      ram: acc.ram + (block.ram || 0)
    }),
    { cpu: 0, ram: 0 }
  );
};