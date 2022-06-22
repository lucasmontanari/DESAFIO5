const { Router } = require('express')
const router = Router()
const { getProductos, postProductos, createProductos } = require('../controllers/productoController')

router.get('/productos', getProductos)
router.post('/productos', postProductos)
router.get('/productos/crear', createProductos)


module.exports = router