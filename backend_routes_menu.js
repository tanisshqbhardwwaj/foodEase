const express = require('express');
const MenuItem = require('../models/MenuItem');
const router = express.Router();

// Get all menu items
router.get('/', async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
});

module.exports = router;