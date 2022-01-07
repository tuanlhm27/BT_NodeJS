const httpStatus = require('http-status');
const { Phong } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a phong
 * @param {Object} phongBody
 * @returns {Promise<Phong>}
 */
const createPhong = async (phongBody) => {
  return Phong.create(phongBody);
};

/**
 * Query for phongs
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryPhongs = async (filter, options) => {
  const phongs = await Phong.paginate(filter, options);
  return phongs;
};

/**
 * Get phong by id
 * @param {ObjectId} id
 * @returns {Promise<Phong>}
 */
const getPhongById = async (id) => {
  return Phong.findById(id);
};


/**
 * Update phong by id
 * @param {ObjectId} phongId
 * @param {Object} updateBody
 * @returns {Promise<Phong>}
 */
const updatePhongById = async (phongId, updateBody) => {
  const phong = await getPhongById(phongId);
  Object.assign(phong, updateBody);
  await phong.save();
  return phong;
};

/**
 * Delete phong by id
 * @param {ObjectId} phongId
 * @returns {Promise<Phong>}
 */
const deletePhongById = async (phongId) => {
  const phong = await getPhongById(phongId);
  if (!phong) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Phong not found');
  }
  await phong.remove();
  return phong;
};

module.exports = {
  createPhong,
  queryPhongs,
  getPhongById,
  updatePhongById,
  deletePhongById,
};
