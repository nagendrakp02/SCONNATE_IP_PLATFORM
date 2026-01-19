// const express = require('express');
// const router = express.Router();
// const blocksController = require('../controllers/blocks.controller');

// router.get('/', blocksController.getAllBlocks);

// module.exports = router;

const express = require('express');
const router = express.Router();
const blocksController = require('../controllers/blocks.controller');

router.get('/', blocksController.getAllBlocks);

module.exports = router;