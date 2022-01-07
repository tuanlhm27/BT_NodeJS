const httpStatus = require('http-status');
const { DatPhong } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a datphong
 * @param {Object} datphongBody
 * @returns {Promise<DatPhong>}
 */
const createDatPhong = async (datphongBody) => {
  return DatPhong.create(datphongBody);
};

/**
 * Query for datphongs
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryDatPhongs = async (filter, options) => {
  const datphongs = await DatPhong.paginate(filter, options);
  return datphongs;
};

/**
 * Get datphong by id
 * @param {ObjectId} id
 * @returns {Promise<DatPhong>}
 */
const getDatPhongById = async (id) => {
  return DatPhong.findById(id);
};


/**
 * Update datphong by id
 * @param {ObjectId} datphongId
 * @param {Object} updateBody
 * @returns {Promise<DatPhong>}
 */
const updateDatPhongById = async (datphongId, updateBody) => {
  const datphong = await getDatPhongById(datphongId);
  Object.assign(datphong, updateBody);
  await datphong.save();
  return datphong;
};

/**
 * Delete datphong by id
 * @param {ObjectId} datphongId
 * @returns {Promise<DatPhong>}
 */
const deleteDatPhongById = async (datphongId) => {
  const datphong = await getDatPhongById(datphongId);
  if (!datphong) {
    throw new ApiError(httpStatus.NOT_FOUND, 'DatPhong not found');
  }
  await datphong.remove();
  return datphong;
};

module.exports = {
  createDatPhong,
  queryDatPhongs,
  getDatPhongById,
  updateDatPhongById,
  deleteDatPhongById,
};
