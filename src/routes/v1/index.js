const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const studentRoute = require('./student.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const ngaRoute = require('./nga.route');
const detaiRoute = require('./detai.route');

const sinhVienRoute = require('./sinh-vien.route');
const lopRoute = require('./lop.route');
const khoaRoute = require('./khoa.route');
const ketQuaRoute = require('./ket-qua.route');
const monHocRoute = require('./mon-hoc.route');
const baiTap1Route = require('./bai-tap1.route');

const khachHangRoute = require('./khachhang.route');
const PhongRoute = require('./phong.route');
const DatPhongRoute = require('./datphong.route');
const DichVuDiKemRoute = require('./dichvudikem.route');
const CTSDDVRoute = require('./ctsddv.route');

const router = express.Router();


const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/students',
    route: studentRoute,
  },
  {
    path: '/nga',
    route: ngaRoute,
  },
  {
    path: '/detai',
    route: detaiRoute,
  },
  {
    path: '/sinh-viens',
    route: sinhVienRoute,
  },
  {
    path: '/lops',
    route: lopRoute,
  },
  {
    path: '/khoas',
    route: khoaRoute,
  },
  {
    path: '/mon-hocs',
    route: monHocRoute,
  },
  {
    path: '/ket-quas',
    route: ketQuaRoute,
  },
  {
    path: '/bai-tap1',
    route: baiTap1Route,
  },
  {
    path: '/khachhangs',
    route: khachHangRoute,
  },
  {
    path: '/phongs',
    route: PhongRoute,
  },
  {
    path: '/datphongs',
    route: DatPhongRoute,
  },
  {
    path: '/dichvudikems',
    route: DichVuDiKemRoute,
  },
  {
    path: '/ctsddvs',
    route: CTSDDVRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
