const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { ngaService } = require('../services');

const createBlog = catchAsync(async (req, res) => {
  // console.log('phuong', req.body);
  // res.send("le hong phuong");
  const nga = await ngaService.addNga(req.body);
  res.status(httpStatus.CREATED).send(nga);
});

module.exports = {
  createBlog,
};
