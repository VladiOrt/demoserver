const {Router} =  require('express')

const{
    crearSucursal,
    editarSucursal,    
    listarSucursales,
    eliminarSucursal
} = require('../controller/sucursales');

const router  = Router()

router.post('/crearSucursal', crearSucursal);
router.put('/editarSucursal', editarSucursal);
router.get('/listarSucursales', listarSucursales);
router.post('/eliminarSucursal', eliminarSucursal);

module.exports = router;
