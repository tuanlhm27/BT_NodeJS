const httpStatus = require('http-status');
const { DichVuDiKem } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a dichvudikem
 * @param {Object} dichvudikemBody
 * @returns {Promise<DichVuDiKem>}
 */
const createDichVuDiKem = async (dichvudikemBody) => {
  return DichVuDiKem.create(dichvudikemBody);
};

/**
 * Query for dichvudikems
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryDichVuDiKems = async (filter, options) => {
  const dichvudikems = await DichVuDiKem.paginate(filter, options);
  return dichvudikems;
};

/**
 * Get dichvudikem by id
 * @param {ObjectId} id
 * @returns {Promise<DichVuDiKem>}
 */
const getDichVuDiKemById = async (id) => {
  return DichVuDiKem.findById(id);
};


/**
 * Update dichvudikem by id
 * @param {ObjectId} dichvudikemId
 * @param {Object} updateBody
 * @returns {Promise<DichVuDiKem>}
 */
const updateDichVuDiKemById = async (dichvudikemId, updateBody) => {
  const dichvudikem = await getDichVuDiKemById(dichvudikemId);
  Object.assign(dichvudikem, updateBody);
  await dichvudikem.save();
  return dichvudikem;
};

/**
 * Delete dichvudikem by id
 * @param {ObjectId} dichvudikemId
 * @returns {Promise<DichVuDiKem>}
 */
const deleteDichVuDiKemById = async (dichvudikemId) => {
  const dichvudikem = await getDichVuDiKemById(dichvudikemId);
  if (!dichvudikem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'DichVuDiKem not found');
  }
  await dichvudikem.remove();
  return dichvudikem;
};

module.exports = {
  createDichVuDiKem,
  queryDichVuDiKems,
  getDichVuDiKemById,
  updateDichVuDiKemById,
  deleteDichVuDiKemById,
};
