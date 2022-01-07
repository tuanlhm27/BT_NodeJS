const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const detaiValidation = require('../../validations/detai.validation');
const detaiController = require('../../controllers/detai.controller');

const router = express.Router();

router
.route('/')
.post(validate(detaiValidation.createDetai), detaiController.createDetai)
.get(validate(detaiValidation.getDetais), detaiController.getDetais);

router
.route('/:userId')
.get(validate(detaiValidation.getDetai), detaiController.getDetai)
.patch(validate(detaiValidation.updateDetai), detaiController.updateDetai)
.delete(validate(detaiValidation.deleteDetai), detaiController.deleteDetai);

module.exports = router;