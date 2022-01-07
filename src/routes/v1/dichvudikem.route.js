const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const DichVuDiKemController = require('../../controllers/dichvudikem.controller');

const router = express.Router();

router
  .route('/')
  .post(DichVuDiKemController.createDichVuDiKem)
  .get(DichVuDiKemController.getDichVuDiKems);

router
  .route('/:khachhangId')
  .get(DichVuDiKemController.getDichVuDiKem)
  .patch(DichVuDiKemController.updateDichVuDiKem)
  .delete(DichVuDiKemController.deleteDichVuDiKem);

module.exports = router;

