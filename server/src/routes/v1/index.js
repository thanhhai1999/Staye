const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const roomRoute = require('./room.route');
const locationRoute = require('./location.route');
const bookingRoute = require('./booking.route');
const categoryRoute = require('./category.route');
const amenityRoute = require('./amenity.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

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
    path: '/rooms',
    route: roomRoute,
  },
  {
    path: '/locations',
    route: locationRoute,
  },
  {
    path: '/bookings',
    route: bookingRoute,
  },
  {
    path: '/categories',
    route: categoryRoute,
  },
  {
    path: '/amenities',
    route: amenityRoute,
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
