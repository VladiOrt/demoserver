const express = require('express');
const router = express.Router();


router.use('/sucursales', require('./sucursales'))



module.exports =  router