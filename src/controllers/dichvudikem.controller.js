const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { DichVuDiKemService } = require('../services');

const createDichVuDiKem = catchAsync(async (req, res) => {
  const dichvudikem = await DichVuDiKemService.createDichVuDiKem(req.body);
  res.status(httpStatus.CREATED).send(dichvudikem);
});

const getDichVuDiKems = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await DichVuDiKemService.queryDichVuDiKems(filter, options);
  res.send(result);
});

const getDichVuDiKem = catchAsync(async (req, res) => {
  const dichvudikem = await DichVuDiKemService.getDichVuDiKemById(req.params.dichvudikemId);
  if (!dichvudikem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'DichVuDiKem not found');
  }
  res.send(dichvudikem);
});

const updateDichVuDiKem = catchAsync(async (req, res) => {
  const dichvudikem = await DichVuDiKemService.updateDichVuDiKemById(req.params.dichvudikemId, req.body);
  res.send(dichvudikem);
});

const deleteDichVuDiKem = catchAsync(async (req, res) => {
  await DichVuDiKemService.deleteDichVuDiKemById(req.params.dichvudikemId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createDichVuDiKem,
  getDichVuDiKems,
  getDichVuDiKem,
  updateDichVuDiKem,
  deleteDichVuDiKem,
};
