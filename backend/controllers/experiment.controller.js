const Experiment = require('../models/Experiment');

// Get all experiments
exports.getAllExperiments = async (req, res) => {
  try {
    let experiments = await Experiment.find();
    
    // If no experiments, seed with defaults
    if (experiments.length === 0) {
      experiments = await seedExperiments();
    }
    
    res.json({ experiments });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single experiment
exports.getExperiment = async (req, res) => {
  try {
    const experiment = await Experiment.findById(req.params.id);
    
    if (!experiment) {
      return res.status(404).json({ message: 'Experiment not found' });
    }
    
    res.json({ experiment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Seed default experiments
const seedExperiments = async () => {
  const defaultExperiments = [
    {
      name: 'Introduction to Image Processing',
      description: 'Learn the basics of image processing with OpenCV',
      difficulty: 'Beginner',
      duration: '45 min',
      category: 'basic',
      steps: [
        {
          title: 'Understanding Images',
          description: 'Learn about digital images, pixels, and color spaces',
          hints: ['Think of images as 2D arrays', 'RGB vs Grayscale']
        },
        {
          title: 'Reading and Displaying Images',
          description: 'Use OpenCV to load and display images',
          hints: ['Use cv2.imread()', 'Remember to convert BGR to RGB']
        },
        {
          title: 'Basic Transformations',
          description: 'Apply basic transformations like resize and rotate',
          hints: ['cv2.resize() for scaling', 'cv2.rotate() for rotation']
        }
      ]
    },
    {
      name: 'Object Detection with YOLO',
      description: 'Implement real-time object detection using YOLO',
      difficulty: 'Intermediate',
      duration: '90 min',
      category: 'ai',
      steps: [
        {
          title: 'Understanding YOLO',
          description: 'Learn about YOLO architecture and how it works',
          hints: ['Single-shot detection', 'Grid-based approach']
        },
        {
          title: 'Loading YOLO Model',
          description: 'Load pre-trained YOLO weights and configuration',
          hints: ['Use cv2.dnn.readNet()', 'Load class names']
        }
      ]
    },
    {
      name: 'Camera Calibration Fundamentals',
      description: 'Learn to calibrate cameras for accurate measurements',
      difficulty: 'Beginner',
      duration: '60 min',
      category: 'geometry',
      steps: []
    },
    {
      name: 'Advanced Edge Detection',
      description: 'Master edge detection techniques and applications',
      difficulty: 'Advanced',
      duration: '75 min',
      category: 'basic',
      steps: []
    }
  ];

  return await Experiment.insertMany(defaultExperiments);
};
