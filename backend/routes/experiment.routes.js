// const express = require('express');
// const router = express.Router();
// const experimentController = require('../controllers/experiment.controller');

// router.get('/', experimentController.getAllExperiments);
// router.get('/:id', experimentController.getExperiment);

// module.exports = router;


const express = require('express');
const router = express.Router();
const experimentController = require('../controllers/experiment.controller');

router.get('/', experimentController.getAllExperiments);
router.get('/:id', experimentController.getExperiment);

module.exports = router;