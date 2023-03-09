const express = require('express');

const router = express.Router()


router.use(require('./news.routes'))
router.use(require('./session.routes'))
router.use(require('./user.routes'))
router.use(require('./category.routes'))
router.use(require('./reaction.routes'))


module.exports = router