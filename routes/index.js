const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

//Get All index
router.get('/', indexController.getindex);

module.exports = router;
