const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const datphongController = require('../../controllers/datphong.controller');

const router = express.Router();

router
  .route('/')
  .post(datphongController.createDatPhong)
  .get(datphongController.getDatPhongs);

router
  .route('/:phongId')
  .get(datphongController.getDatPhong)
  .patch(datphongController.updateDatPhong)
  .delete(datphongController.deleteDatPhong);

module.exports = router;

