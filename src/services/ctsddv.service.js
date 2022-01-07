const httpStatus = require('http-status');
const { CTSDDV } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a ctsddv
 * @param {Object} ctsddvBody
 * @returns {Promise<CTSDDV>}
 */
const createCTSDDV = async (ctsddvBody) => {
  return CTSDDV.create(ctsddvBody);
};

/**
 * Query for ctsddvs
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCTSDDVs = async (filter, options) => {
  const ctsddvs = await CTSDDV.paginate(filter, options);
  return ctsddvs;
};

/**
 * Get ctsddv by id
 * @param {ObjectId} id
 * @returns {Promise<CTSDDV>}
 */
const getCTSDDVById = async (id) => {
  return CTSDDV.findById(id);
};


/**
 * Update ctsddv by id
 * @param {ObjectId} ctsddvId
 * @param {Object} updateBody
 * @returns {Promise<CTSDDV>}
 */
const updateCTSDDVById = async (ctsddvId, updateBody) => {
  const ctsddv = await getCTSDDVById(ctsddvId);
  Object.assign(ctsddv, updateBody);
  await ctsddv.save();
  return ctsddv;
};

/**
 * Delete ctsddv by id
 * @param {ObjectId} ctsddvId
 * @returns {Promise<CTSDDV>}
 */
const deleteCTSDDVById = async (ctsddvId) => {
  const ctsddv = await getCTSDDVById(ctsddvId);
  if (!ctsddv) {
    throw new ApiError(httpStatus.NOT_FOUND, 'CTSDDV not found');
  }
  await ctsddv.remove();
  return ctsddv;
};

module.exports = {
  createCTSDDV,
  queryCTSDDVs,
  getCTSDDVById,
  updateCTSDDVById,
  deleteCTSDDVById,
};
