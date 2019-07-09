const express = require('express');
const router = require('express-promise-router')();

const StatsController = require('../controllers/stats');

router.route('/transactions')
  .get(StatsController.transactions);

module.exports = router;
