const { Router } = require('express'),
    controllers = require('../controllers/reaction'),
    router = Router();

router.get('/api/v1/reactions', controllers.getAll)

router.get('/api/v1/reactions/:id_news', controllers.getByNewsId)


module.exports = router