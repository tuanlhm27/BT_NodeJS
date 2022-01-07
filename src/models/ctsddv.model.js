const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const ctsddvSchema = mongoose.Schema(
  {
    maDatPhong: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'DatPhong',
    },
    maDV: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'DichVuDiKem',
    },
    
    soLuong: {
      type: Number,
      required: true,
      },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
ctsddvSchema.plugin(toJSON);
ctsddvSchema.plugin(paginate);


/**
 * @typedef CTSDDV
 */
const CTSDDV = mongoose.model('CTSDDV', ctsddvSchema);

module.exports = CTSDDV;
