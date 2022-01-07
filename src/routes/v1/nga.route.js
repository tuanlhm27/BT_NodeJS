const express = require('express');
const { ngaValidation } = require('../../validations');
const { ngaController } = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

router
  .route('/')
  .post(validate(ngaValidation.addNga), ngaController.createBlog)
  // .get(validate(ngaValidation.addNga), ngaController.createBlog);

module.exports = router;

