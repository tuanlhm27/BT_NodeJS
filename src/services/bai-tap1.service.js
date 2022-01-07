const mongoose = require('mongoose');
const { Lop, SinhVien, Khoa, KetQua } = require('../models');
const { CTSDDV, DichVuDiKem, Phong, Khachhang, DatPhong } = require('../models');

/**
 * cau1
 * @returns
 */
const cau1 = async () => {
  const results = await CTSDDV.find({
    $and: [{ soLuong: { $gt: 3 } }, { soLuong: { $lt: 10 } }],
  });
  return results;
};

/**
 * cau2
 * @returns
 */
const cau2 = async () => {
  const results = await Phong.updateMany().select('giaPhong');
  return results;
};

/**
 * cau3
 * @returns
 */
const cau3 = async () => {
  const results = await DatPhong.deleteOne({ trangThaiDat: "Da huy" });
  return results;
};

/**
 * cau4
 * @returns
 */
const cau4 = async () => {
  const results = await Khachhang.find({"tenKH": {$regex: /^a/, $options: 'i'}});
  return results;
};

/**
 * cau5
 * @returns
 */
const cau5 = async () => {
  return results;
};

/**
 * cau6
 * @returns
 */
const cau6 = async () => {
  const results = await DichVuDiKem.find({
    $or:[
      {
        $and: [{ DVT : 'lon' }, { donGia : { $gt: 10000 } }],
        $and: [{ DVT : 'cai' }, { donGia : { $lt: 5000 } }],
      }
    ]
  }).select('maDV, tenDV, DVT, donGia');

  return results;
};

/**
 * cau7
 * @returns
 */
const cau7 = async () => {
  return results;
};

/**
 * cau8
 * @returns
 */
const cau8 = async () => {
  return results;
};

/**
 * cau9
 * @returns
 */
const cau9 = async () => {
  return results;
};

/**
 * cau10
 * @returns
 */
const cau10 = async () => {
  return results;
};


module.exports = {
  cau1,
  cau2,
  cau3,
  cau4,
  cau5,
  cau6,
  cau7,
  cau8,
  cau9,
  cau10,
};
