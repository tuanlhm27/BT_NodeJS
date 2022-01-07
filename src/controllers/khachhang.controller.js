const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { khachHangService } = require('../services');

const createKhachhang = catchAsync(async (req, res) => {
  const khachhang = await khachHangService.createKhachhang(req.body);
  res.status(httpStatus.CREATED).send(khachhang);
});

const getKhachhangs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await khachHangService.queryKhachhangs(filter, options);
  res.send(result);
});

const getKhachhang = catchAsync(async (req, res) => {
  const khachhang = await khachHangService.getKhachhangById(req.params.khachhangId);
  if (!khachhang) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Khachhang not found');
  }
  res.send(khachhang);
});

const updateKhachhang = catchAsync(async (req, res) => {
  const khachhang = await khachHangService.updateKhachhangById(req.params.khachhangId, req.body);
  res.send(khachhang);
});

const deleteKhachhang = catchAsync(async (req, res) => {
  await khachHangService.deleteKhachhangById(req.params.khachhangId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createKhachhang,
  getKhachhangs,
  getKhachhang,
  updateKhachhang,
  deleteKhachhang,
};
