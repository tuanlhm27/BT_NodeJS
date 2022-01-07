const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { CTSDDVService } = require('../services');

const createCTSDDV = catchAsync(async (req, res) => {
  const ctsddv = await CTSDDVService.createCTSDDV(req.body);
  res.status(httpStatus.CREATED).send(ctsddv);
});

const getCTSDDVs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await CTSDDVService.queryCTSDDVs(filter, options);
  res.send(result);
});

const getCTSDDV = catchAsync(async (req, res) => {
  const ctsddv = await CTSDDVService.getCTSDDVById(req.params.ctsddvId);
  if (!ctsddv) {
    throw new ApiError(httpStatus.NOT_FOUND, 'CTSDDV not found');
  }
  res.send(ctsddv);
});

const updateCTSDDV = catchAsync(async (req, res) => {
  const ctsddv = await CTSDDVService.updateCTSDDVById(req.params.ctsddvId, req.body);
  res.send(ctsddv);
});

const deleteCTSDDV = catchAsync(async (req, res) => {
  await CTSDDVService.deleteCTSDDVById(req.params.ctsddvId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCTSDDV,
  getCTSDDVs,
  getCTSDDV,
  updateCTSDDV,
  deleteCTSDDV,
};
