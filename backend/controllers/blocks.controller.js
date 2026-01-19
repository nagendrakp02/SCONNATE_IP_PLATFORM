// const Block = require('../models/Block');

// // Get all blocks
// exports.getAllBlocks = async (req, res) => {
//   try {
//     let blocks = await Block.find();
    
//     // If no blocks exist, seed with default blocks
//     if (blocks.length === 0) {
//       blocks = await seedBlocks();
//     }

//     res.json({ blocks });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Seed default blocks
// const seedBlocks = async () => {
//   const defaultBlocks = [
//     { id: 'input', name: 'Camera Input', category: 'input', cpu: 5, ram: 10, description: 'Capture frames from camera', parameters: [] },
//     { id: 'grayscale', name: 'Grayscale', category: 'basic', cpu: 10, ram: 20, description: 'Convert to grayscale', parameters: [] },
//     { id: 'blur', name: 'Gaussian Blur', category: 'basic', cpu: 15, ram: 25, description: 'Apply blur filter', parameters: [{ name: 'kernel', type: 'number', default: 5, min: 3, max: 15 }] },
//     { id: 'threshold', name: 'Threshold', category: 'basic', cpu: 12, ram: 22, description: 'Binary threshold', parameters: [{ name: 'value', type: 'number', default: 127, min: 0, max: 255 }] },
//     { id: 'edge', name: 'Canny Edge', category: 'basic', cpu: 20, ram: 30, description: 'Edge detection', parameters: [] },
//     { id: 'morphology', name: 'Morphology', category: 'basic', cpu: 18, ram: 28, description: 'Morphological operations', parameters: [] },
//     { id: 'yolo', name: 'YOLO Detection', category: 'ai', cpu: 60, ram: 120, description: 'Object detection with YOLO', parameters: [] },
//     { id: 'classification', name: 'Image Classification', category: 'ai', cpu: 50, ram: 100, description: 'TFLite classification', parameters: [] },
//     { id: 'calibration', name: 'Camera Calibration', category: 'geometry', cpu: 25, ram: 40, description: 'Calibrate camera', parameters: [] },
//     { id: 'undistort', name: 'Undistortion', category: 'geometry', cpu: 22, ram: 35, description: 'Remove lens distortion', parameters: [] },
//     { id: 'homography', name: 'Homography', category: 'geometry', cpu: 28, ram: 42, description: 'Perspective transform', parameters: [] },
//     { id: 'optical_flow', name: 'Optical Flow', category: 'geometry', cpu: 35, ram: 50, description: 'Track motion', parameters: [] }
//   ];

//   return await Block.insertMany(defaultBlocks);
// };


const Block = require('../models/Block');

// Get all blocks
exports.getAllBlocks = async (req, res) => {
  try {
    let blocks = await Block.find();
    
    // If no blocks exist, seed with default blocks
    if (blocks.length === 0) {
      blocks = await seedBlocks();
    }

    res.json({ blocks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Seed default blocks
const seedBlocks = async () => {
  const defaultBlocks = [
    { id: 'input', name: 'Camera Input', category: 'input', cpu: 5, ram: 10, description: 'Capture frames from camera', parameters: [] },
    { id: 'grayscale', name: 'Grayscale', category: 'basic', cpu: 10, ram: 20, description: 'Convert to grayscale', parameters: [] },
    { id: 'blur', name: 'Gaussian Blur', category: 'basic', cpu: 15, ram: 25, description: 'Apply blur filter', parameters: [{ name: 'kernel', type: 'number', default: 5, min: 3, max: 15 }] },
    { id: 'threshold', name: 'Threshold', category: 'basic', cpu: 12, ram: 22, description: 'Binary threshold', parameters: [{ name: 'value', type: 'number', default: 127, min: 0, max: 255 }] },
    { id: 'edge', name: 'Canny Edge', category: 'basic', cpu: 20, ram: 30, description: 'Edge detection', parameters: [] },
    { id: 'morphology', name: 'Morphology', category: 'basic', cpu: 18, ram: 28, description: 'Morphological operations', parameters: [] },
    { id: 'yolo', name: 'YOLO Detection', category: 'ai', cpu: 60, ram: 120, description: 'Object detection with YOLO', parameters: [] },
    { id: 'classification', name: 'Image Classification', category: 'ai', cpu: 50, ram: 100, description: 'TFLite classification', parameters: [] },
    { id: 'calibration', name: 'Camera Calibration', category: 'geometry', cpu: 25, ram: 40, description: 'Calibrate camera', parameters: [] },
    { id: 'undistort', name: 'Undistortion', category: 'geometry', cpu: 22, ram: 35, description: 'Remove lens distortion', parameters: [] },
    { id: 'homography', name: 'Homography', category: 'geometry', cpu: 28, ram: 42, description: 'Perspective transform', parameters: [] },
    { id: 'optical_flow', name: 'Optical Flow', category: 'geometry', cpu: 35, ram: 50, description: 'Track motion', parameters: [] }
  ];

  return await Block.insertMany(defaultBlocks);
};
