const { Router } = require('express'),
    controllers = require('../controllers/category'),
    router = Router();

router.get('/api/v1/categories', controllers.getAll)



module.exports = router