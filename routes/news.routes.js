const { verifyToken, isAuth } = require('../middleware/verifyToken');

const { Router } = require('express'),
    controllers = require('../controllers/news'),
    multer = require("../config/multer"),
    router = Router();

router.get('/api/v1/allNews', controllers.getAll)

router.get('/api/v1/allNews/:id_category', controllers.getByCategory)

router.post('/api/v1/news', verifyToken, isAuth, multer.single("img"), controllers.postNews)

router.post('/api/v1/news/like/:id_news', verifyToken, isAuth, controllers.putLike)
router.post('/api/v1/news/dislike/:id_news', verifyToken, isAuth, controllers.putdislike)


module.exports = router