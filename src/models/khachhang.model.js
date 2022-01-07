const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const khachhangSchema = mongoose.Schema(
  {
    tenKH: {
      type: String,
      required: true,
      trim: true,
    },
    soDT: {
      type: Number,
      required: true,
      },
    diaChi: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
khachhangSchema.plugin(toJSON);
khachhangSchema.plugin(paginate);


/**
 * @typedef KhachHang
 */
const KhachHang = mongoose.model('KhachHang', khachhangSchema);

module.exports = KhachHang;
