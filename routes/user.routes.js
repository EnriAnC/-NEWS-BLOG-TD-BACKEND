const { Router } = require('express'),
    controllers = require('../controllers/user'), 
    { verifyToken, isAuth } = require('../middleware/verifyToken'),
    router = Router();

router.get('/api/v1/user/', verifyToken, isAuth, controllers.userByToken)


module.exports = router