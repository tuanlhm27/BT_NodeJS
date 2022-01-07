const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const ngaSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
ngaSchema.plugin(toJSON);
ngaSchema.plugin(paginate);



/**
 * @typedef Nga
 */
const Nga = mongoose.model('Nga', ngaSchema);

module.exports = Nga;
