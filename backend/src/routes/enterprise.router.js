const express = require('express');
const enterpriseController = require('../controllers/enterprise.controller');

const router = express.Router();

router.get(
  '/empresas',
  enterpriseController.getAll,
);

module.exports = router;