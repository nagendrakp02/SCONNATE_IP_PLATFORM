// const Pipeline = require('../models/Pipeline');

// // Get all pipelines for user
// exports.getUserPipelines = async (req, res) => {
//   try {
//     const pipelines = await Pipeline.find({ userId: req.userId })
//       .sort({ updatedAt: -1 });
//     res.json({ pipelines });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get single pipeline
// exports.getPipeline = async (req, res) => {
//   try {
//     const pipeline = await Pipeline.findOne({
//       _id: req.params.id,
//       userId: req.userId
//     });
    
//     if (!pipeline) {
//       return res.status(404).json({ message: 'Pipeline not found' });
//     }
    
//     res.json({ pipeline });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Create pipeline
// exports.createPipeline = async (req, res) => {
//   try {
//     const { name, description, blocks } = req.body;
    
//     const pipeline = await Pipeline.create({
//       name,
//       description,
//       blocks,
//       userId: req.userId
//     });
    
//     res.status(201).json({ 
//       message: 'Pipeline created successfully',
//       pipeline 
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update pipeline
// exports.updatePipeline = async (req, res) => {
//   try {
//     const { name, description, blocks } = req.body;
    
//     const pipeline = await Pipeline.findOneAndUpdate(
//       { _id: req.params.id, userId: req.userId },
//       { name, description, blocks, updatedAt: Date.now() },
//       { new: true }
//     );
    
//     if (!pipeline) {
//       return res.status(404).json({ message: 'Pipeline not found' });
//     }
    
//     res.json({ 
//       message: 'Pipeline updated successfully',
//       pipeline 
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Delete pipeline
// exports.deletePipeline = async (req, res) => {
//   try {
//     const pipeline = await Pipeline.findOneAndDelete({
//       _id: req.params.id,
//       userId: req.userId
//     });
    
//     if (!pipeline) {
//       return res.status(404).json({ message: 'Pipeline not found' });
//     }
    
//     res.json({ message: 'Pipeline deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const Pipeline = require('../models/Pipeline');

// Get all pipelines for user
exports.getUserPipelines = async (req, res) => {
  try {
    const pipelines = await Pipeline.find({ userId: req.userId })
      .sort({ updatedAt: -1 });
    res.json({ pipelines });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single pipeline
exports.getPipeline = async (req, res) => {
  try {
    const pipeline = await Pipeline.findOne({
      _id: req.params.id,
      userId: req.userId
    });
    
    if (!pipeline) {
      return res.status(404).json({ message: 'Pipeline not found' });
    }
    
    res.json({ pipeline });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create pipeline
exports.createPipeline = async (req, res) => {
  try {
    const { name, description, blocks } = req.body;
    
    const pipeline = await Pipeline.create({
      name,
      description,
      blocks,
      userId: req.userId
    });
    
    res.status(201).json({ 
      message: 'Pipeline created successfully',
      pipeline 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update pipeline
exports.updatePipeline = async (req, res) => {
  try {
    const { name, description, blocks } = req.body;
    
    const pipeline = await Pipeline.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { name, description, blocks, updatedAt: Date.now() },
      { new: true }
    );
    
    if (!pipeline) {
      return res.status(404).json({ message: 'Pipeline not found' });
    }
    
    res.json({ 
      message: 'Pipeline updated successfully',
      pipeline 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete pipeline
exports.deletePipeline = async (req, res) => {
  try {
    const pipeline = await Pipeline.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    });
    
    if (!pipeline) {
      return res.status(404).json({ message: 'Pipeline not found' });
    }
    
    res.json({ message: 'Pipeline deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

