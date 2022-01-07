const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const datphongSchema = mongoose.Schema(
  {
    maPhong: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Phong',
    },
    maKH: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'KhachHang',
    },
    ngayDat: {
      type: Date,
      max: new Date(),
      required: true,
    },
    gioBD: {
      type: String,
      required: true,
      },
    gioKT: {
      type: String,
      required: true,
      },
    tienDatCoc: {
      type: Number,
      required: true,
      },
    ghiChu: {
      type: String,
    },
    trangThaiDat: {
      type: String,
      required: true,
      },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
datphongSchema.plugin(toJSON);
datphongSchema.plugin(paginate);


/**
 * @typedef DatPhong
 */
const DatPhong = mongoose.model('DatPhong', datphongSchema);

module.exports = DatPhong;
