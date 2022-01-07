const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const dichvudikemSchema = mongoose.Schema(
  {
    tenDV: {
      type: String,
      required: true,
      trim: true,
    },
    DVT: {
      type: String,
      required: true,
      },
    donGia: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
dichvudikemSchema.plugin(toJSON);
dichvudikemSchema.plugin(paginate);


/**
 * @typedef DichVuDiKem
 */
const DichVuDiKem = mongoose.model('DichVuDiKem', dichvudikemSchema);

module.exports = DichVuDiKem;
