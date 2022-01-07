const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const khachhangController = require('../../controllers/khachhang.controller');

const router = express.Router();

router
  .route('/')
  .post(khachhangController.createKhachhang)
  .get(khachhangController.getKhachhangs);

router
  .route('/:khachhangId')
  .get(khachhangController.getKhachhang)
  .patch(khachhangController.updateKhachhang)
  .delete(khachhangController.deleteKhachhang);

module.exports = router;

