const express = require('express');
const router = express.Router();

const {
  getItems
} = require('../controller/itemsController');

router.get('/', getItems);

module.exports = router;
