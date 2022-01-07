const httpStatus = require('http-status');
const { Khachhang } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a khachhang
 * @param {Object} khachhangBody
 * @returns {Promise<Khachhang>}
 */
const createKhachhang = async (khachhangBody) => {
  return Khachhang.create(khachhangBody);
};

/**
 * Query for khachhangs
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryKhachhangs = async (filter, options) => {
  const khachhangs = await Khachhang.paginate(filter, options);
  return khachhangs;
};

/**
 * Get khachhang by id
 * @param {ObjectId} id
 * @returns {Promise<Khachhang>}
 */
const getKhachhangById = async (id) => {
  return Khachhang.findById(id);
};


/**
 * Update khachhang by id
 * @param {ObjectId} khachhangId
 * @param {Object} updateBody
 * @returns {Promise<Khachhang>}
 */
const updateKhachhangById = async (khachhangId, updateBody) => {
  const khachhang = await getKhachhangById(khachhangId);
  Object.assign(khachhang, updateBody);
  await khachhang.save();
  return khachhang;
};

/**
 * Delete khachhang by id
 * @param {ObjectId} khachhangId
 * @returns {Promise<Khachhang>}
 */
const deleteKhachhangById = async (khachhangId) => {
  const khachhang = await getKhachhangById(khachhangId);
  if (!khachhang) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Khachhang not found');
  }
  await khachhang.remove();
  return khachhang;
};

module.exports = {
  createKhachhang,
  queryKhachhangs,
  getKhachhangById,
  updateKhachhangById,
  deleteKhachhangById,
};
