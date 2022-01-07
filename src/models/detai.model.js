const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const detaiSchema = mongoose.Schema(
  {
    madt: {
      type: String,
      required: true,
      trim: true,
    },
    tendt: {
      type: String,
      required: true,
      trim: true,
    },
    kinhphi: {
      type: Number,
      required: true,
    },
    noithuctap: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
detaiSchema.plugin(toJSON);
detaiSchema.plugin(paginate);

detaiSchema.pre('save', async function (next) {
  next();
});

/**
 * @typedef Detai
 */
const Detai = mongoose.model('Detai', detaiSchema);

module.exports = Detai;