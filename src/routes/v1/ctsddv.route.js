const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const CTSDDVController = require('../../controllers/ctsddv.controller');

const router = express.Router();

router
  .route('/')
  .post(CTSDDVController.createCTSDDV)
  .get(CTSDDVController.getCTSDDVs);

router
  .route('/:phongId')
  .get(CTSDDVController.getCTSDDV)
  .patch(CTSDDVController.updateCTSDDV)
  .delete(CTSDDVController.deleteCTSDDV);

module.exports = router;

