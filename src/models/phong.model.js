const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const phongSchema = mongoose.Schema(
  {
    loaiPhong: {
      type: String,
      required: true,
      trim: true,
    },
    SKTD: {
      type: Number,
      required: true,
      },
    giaPhong: {
      type: Number,
      required: true,
      },
    moTa: {
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
phongSchema.plugin(toJSON);
phongSchema.plugin(paginate);


/**
 * @typedef Phong
 */
const Phong = mongoose.model('Phong', phongSchema);

module.exports = Phong;
