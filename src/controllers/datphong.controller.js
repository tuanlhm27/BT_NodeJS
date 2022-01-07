const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { DatPhongService } = require('../services');

const createDatPhong = catchAsync(async (req, res) => {
  const phong = await DatPhongService.createDatPhong(req.body);
  res.status(httpStatus.CREATED).send(phong);
});

const getDatPhongs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await DatPhongService.queryDatPhongs(filter, options);
  res.send(result);
});

const getDatPhong = catchAsync(async (req, res) => {
  const phong = await DatPhongService.getDatPhongById(req.params.phongId);
  if (!phong) {
    throw new ApiError(httpStatus.NOT_FOUND, 'DatPhong not found');
  }
  res.send(phong);
});

const updateDatPhong = catchAsync(async (req, res) => {
  const phong = await DatPhongService.updateDatPhongById(req.params.phongId, req.body);
  res.send(phong);
});

const deleteDatPhong = catchAsync(async (req, res) => {
  await DatPhongService.deleteDatPhongById(req.params.phongId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createDatPhong,
  getDatPhongs,
  getDatPhong,
  updateDatPhong,
  deleteDatPhong,
};
