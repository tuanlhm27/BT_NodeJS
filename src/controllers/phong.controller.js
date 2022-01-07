const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { PhongService } = require('../services');

const createPhong = catchAsync(async (req, res) => {
  const phong = await PhongService.createPhong(req.body);
  res.status(httpStatus.CREATED).send(phong);
});

const getPhongs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await PhongService.queryPhongs(filter, options);
  res.send(result);
});

const getPhong = catchAsync(async (req, res) => {
  const phong = await PhongService.getPhongById(req.params.phongId);
  if (!phong) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Phong not found');
  }
  res.send(phong);
});

const updatePhong = catchAsync(async (req, res) => {
  const phong = await PhongService.updatePhongById(req.params.phongId, req.body);
  res.send(phong);
});

const deletePhong = catchAsync(async (req, res) => {
  await PhongService.deletePhongById(req.params.phongId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createPhong,
  getPhongs,
  getPhong,
  updatePhong,
  deletePhong,
};
