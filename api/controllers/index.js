const express = require('express');
const router = express.Router();


// Load each controller
const authController = require('./auth.js');
const servicesController = require('./services.js');
const ordersController = require('./orders.js');
const appConfigController = require('./appConfig.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/auth', authController);
router.use('/services', servicesController);
router.use('/orders', ordersController);
router.use('/application-configuration', appConfigController);



module.exports = router;