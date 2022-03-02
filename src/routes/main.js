const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');
const adminValidator = require('../middlewars/adminMiddlewar.js');

router.get('/', mainController.index);
router.get('/admin', adminValidator, mainController.admin);

module.exports = router;