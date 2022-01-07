const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const phongController = require('../../controllers/phong.controller');

const router = express.Router();

router
  .route('/')
  .post(phongController.createPhong)
  .get(phongController.getPhongs);

router
  .route('/:phongId')
  .get(phongController.getPhong)
  .patch(phongController.updatePhong)
  .delete(phongController.deletePhong);

module.exports = router;

