// const express = require('express');
// const router = express.Router();
// const pipelineController = require('../controllers/pipeline.controller');
// const authMiddleware = require('../middleware/auth.middleware');

// router.use(authMiddleware);

// router.get('/', pipelineController.getUserPipelines);
// router.get('/:id', pipelineController.getPipeline);
// router.post('/', pipelineController.createPipeline);
// router.put('/:id', pipelineController.updatePipeline);
// router.delete('/:id', pipelineController.deletePipeline);

// module.exports = router;


const express = require('express');
const router = express.Router();
const pipelineController = require('../controllers/pipeline.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.use(authMiddleware);

router.get('/', pipelineController.getUserPipelines);
router.get('/:id', pipelineController.getPipeline);
router.post('/', pipelineController.createPipeline);
router.put('/:id', pipelineController.updatePipeline);
router.delete('/:id', pipelineController.deletePipeline);

module.exports = router;

