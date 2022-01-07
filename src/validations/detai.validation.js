const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createDetai = {
  body: Joi.object().keys({
    madt: Joi.string().required(),
    tendt: Joi.string().required(),
    kinhphi: Joi.number().integer().required(),
    noithuctap: Joi.string().required(),
  }),
};

const getDetais = {
  query: Joi.object().keys({
    madt: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number(),
  }),
};

const getDetai = {
  params: Joi.object().keys({
    detaiId: Joi.string().custom(objectId),
  }),
};

const updateDetai = {
  params: Joi.object().keys({
    detaiId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      madt: Joi.string(),
      tendt: Joi.string(),
      kinhphi: Joi.number().integer(),
      noithuctap: Joi.string(),
    })
    .min(1),
};

const deleteDetai = {
  params: Joi.object().keys({
    detaiId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createDetai,
  getDetais,
  getDetai,
  updateDetai,
  deleteDetai,
};